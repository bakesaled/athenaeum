import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {
  SIDENAV_UI_EXPANDED_NAV_ITEMS,
  SIDENAV_UI_IS_DARK_THEME,
  SIDENAV_UI_NAV_ITEMS,
  SIDENAV_UI_SELECTED_NAV_ITEM,
  SidenavUI,
} from './sidenav-ui.model';

export interface SidenavState extends EntityState<SidenavUI> {
  ui: SidenavUI;
}

const initialState = {
  ui: {
    navItems: SIDENAV_UI_NAV_ITEMS,
    selectedNavItem: SIDENAV_UI_SELECTED_NAV_ITEM,
    expandedNavItems: SIDENAV_UI_EXPANDED_NAV_ITEMS,
    isDarkTheme: SIDENAV_UI_IS_DARK_THEME,
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sidenav' })
export class SidenavUiStore extends EntityStore<SidenavState> {
  constructor() {
    super(initialState);
  }

  updateUI(ui: SidenavState['ui']): void {
    this.update((state) => ({
      ui: {
        ...state.ui,
        ...ui,
      },
    }));
  }
}
