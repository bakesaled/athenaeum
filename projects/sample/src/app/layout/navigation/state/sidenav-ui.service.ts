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
    const navItem = allItems.find((i) => i.path === path);
    this.sidenavStore.updateUI({
      selectedNavItem: navItem,
    });
    if (navItem) {
      this.expandParents(allItems, navItem.path);
    }
  }

  updateExpandedNavItems(navItem: NavItem, expand: boolean): void {
    const expandedItems = [...this.sidenavUiQuery.getExpandedNavItems()];
    const expandedMatchIndex = expandedItems.findIndex(
      (ei) => ei.path === navItem.path
    );

    if (expandedMatchIndex > -1 && !expand) {
      expandedItems.splice(expandedMatchIndex, 1);
    } else if (expandedMatchIndex === -1 && expand) {
      expandedItems.push(navItem);
    }

    this.sidenavStore.updateUI({
      expandedNavItems: expandedItems,
    });
  }

  private expandParents(allItems: NavItem[], selectedPath: string): void {
    const result = allItems.find((item) => item.path === selectedPath);
    if (!result) {
      return;
    }
    let expandedItem = result;
    while (expandedItem.parentPath) {
      const parentItem = allItems.find(
        (item) => item.path === expandedItem.parentPath
      );
      this.updateExpandedNavItems(parentItem, true);
      expandedItem = parentItem;
    }
  }
}
