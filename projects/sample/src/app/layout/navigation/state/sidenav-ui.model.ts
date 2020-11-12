export interface NavItem {
  text?: string;
  route?: string;
  level?: number;
  expandable?: boolean;
  expanded?: boolean;
  path?: string;
  parentPath?: string;
  children?: NavItem[];
}

export type SidenavUI = {
  navItems?: NavItem[];
  selectedNavItem?: NavItem;
  expandedNavItems?: NavItem[];
};

export const SIDENAV_UI_NAV_ITEMS = [];
export const SIDENAV_UI_SELECTED_NAV_ITEM = undefined;
export const SIDENAV_UI_EXPANDED_NAV_ITEMS = [];
