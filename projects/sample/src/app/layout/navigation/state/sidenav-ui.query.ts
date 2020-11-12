import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SidenavUiStore, SidenavState } from './sidenav-ui.store';
import { NavItem } from './sidenav-ui.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SidenavUiQuery extends QueryEntity<SidenavState> {
  navItems$ = this.select((state) => state.ui.navItems);
  selectedNavItem$ = this.select((state) => state.ui.selectedNavItem);
  expandedNavItems$ = this.select((state) => state.ui.expandedNavItems);

  constructor(protected store: SidenavUiStore) {
    super(store);
  }

  selectIsNavItemSelected(navItem: NavItem): Observable<boolean> {
    return this.selectedNavItem$.pipe(
      map((selectedItem) => selectedItem && selectedItem.path === navItem.path)
    );
  }

  selectIsNavItemExpanded(navItem: NavItem): Observable<boolean> {
    return this.expandedNavItems$.pipe(
      map(
        (expandedItems) =>
          expandedItems.findIndex((ei) => ei.path === navItem.path) > -1
      )
    );
  }

  getNavItems(): NavItem[] {
    return this.getValue().ui.navItems;
  }

  getAllNavItemsIncludingChildren(): NavItem[] {
    const rootNavItems = this.getNavItems();
    let results = [...rootNavItems];
    rootNavItems.forEach((res) => {
      if (res.children && res.children.length) {
        results = results.concat(this.getAllChildNavItems(res));
      }
    });

    return results;
  }

  getAllChildNavItems(navItem: NavItem): NavItem[] {
    let results = [];
    navItem.children.forEach((child) => {
      results.push(child);
      if (child.children && child.children.length) {
        results = results.concat(this.getAllChildNavItems(child));
      }
    });

    return results;
  }

  getExpandedNavItems(): NavItem[] {
    return this.getValue().ui.expandedNavItems;
  }
}
