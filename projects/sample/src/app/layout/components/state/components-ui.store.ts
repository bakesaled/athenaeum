import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { COMPONENTS_UI_COMPONENTS, ComponentsUI } from './components-ui.model';

export interface ComponentsState extends EntityState<ComponentsUI> {
  ui: ComponentsUI;
}

const initialState = {
  ui: {
    components: COMPONENTS_UI_COMPONENTS,
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'components' })
export class ComponentsUiStore extends EntityStore<ComponentsState> {
  constructor() {
    super(initialState);
  }

  updateUI(ui: ComponentsState['ui']): void {
    this.update((state) => ({
      ui: {
        ...state.ui,
        ...ui,
      },
    }));
  }
}
