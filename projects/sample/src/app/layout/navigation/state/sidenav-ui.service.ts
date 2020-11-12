import { Injectable } from '@angular/core';
import { SidenavUiStore } from './sidenav-ui.store';
import { NavItem } from './sidenav-ui.model';
import { SidenavUiQuery } from './sidenav-ui.query';

@Injectable({ providedIn: 'root' })
export class SidenavUiService {
  constructor(
    private sidenavStore: SidenavUiStore,
    private sidenavUiQuery: SidenavUiQuery
  ) {}

  updateNavItems(navItems: NavItem[]): void {
    this.sidenavStore.updateUI({
      navItems: [...navItems],
    });
  }

  updateSelectedNavItem(path: string): void {
    const allItems = this.sidenavUiQuery.getAllNavItemsIncludingChildren();
    // if (!path || !path.length) {
    //   return;
    // }
    const navItem = allItems.find((i) => i.path === path);
    this.sidenavStore.updateUI({
      selectedNavItem: navItem,
    });
    // const allItems = this.sidenavUiQuery.getAllNavItemsIncludingChildren();
    // if (!path || !path.length) {
    //   return;
    // }
    //
    // allItems.forEach((item) => {
    //   item.selected = false;
    // });
    // this.expandAndSelect(allItems, path);
  }

  updateExpandedNavItems(): void {}

  // private expandAndSelect(allItems: NavItem[], selectedPath: string): void {
  //   const result = allItems.find((item) => item.path === selectedPath);
  //   if (!result) {
  //     return;
  //   }
  //   // result.selected = true;
  //   let expandedItem = result;
  //   while (expandedItem.parentPath) {
  //     const parentItem = allItems.find(
  //       (item) => item.path === expandedItem.parentPath
  //     );
  //     parentItem.expanded = true;
  //     expandedItem = parentItem;
  //   }
  // }
}
