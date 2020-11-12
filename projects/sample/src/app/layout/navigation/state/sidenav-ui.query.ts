import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SidenavUiStore, SidenavState } from './sidenav-ui.store';
import { NavItem } from './sidenav-ui.model';

@Injectable({ providedIn: 'root' })
export class SidenavUiQuery extends QueryEntity<SidenavState> {
  navItems$ = this.select((state) => state.ui.navItems);

  constructor(protected store: SidenavUiStore) {
    super(store);
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
    return this.getAllNavItemsIncludingChildren().filter(
      (item) => item.expanded
    );
  }
}
