import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ComponentsUiStore, ComponentsState } from './components-ui.store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComponentMetaData } from './components-ui.model';

@Injectable({ providedIn: 'root' })
export class ComponentsUiQuery extends QueryEntity<ComponentsState> {
  components$ = this.select((state) => state.ui.components);

  constructor(protected store: ComponentsUiStore) {
    super(store);
  }

  selectComponentsByName(name: string): Observable<ComponentMetaData> {
    return this.components$.pipe(
      map((components) => {
        return components.find(
          (c) => c.name.toLowerCase() === name.toLowerCase()
        );
      })
    );
  }
}
