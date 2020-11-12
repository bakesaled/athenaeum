export interface NavItem {
  text?: string;
  route?: string;
  level?: number;
  expandable?: boolean;
  expanded?: boolean;
  selected?: boolean;
  path?: string;
  parentPath?: string;
  children?: NavItem[];
}

export type SidenavUI = {
  navItems?: NavItem[];
};

export const SIDENAV_UI_NAV_ITEMS = [];
