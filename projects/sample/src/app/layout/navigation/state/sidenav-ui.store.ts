import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SIDENAV_UI_NAV_ITEMS, SidenavUI } from './sidenav-ui.model';

export interface SidenavState extends EntityState<SidenavUI> {
  ui: SidenavUI;
}

const initialState = {
  ui: {
    navItems: SIDENAV_UI_NAV_ITEMS,
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
