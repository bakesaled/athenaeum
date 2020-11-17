import { Injectable } from '@angular/core';
import { ComponentsUiStore } from './components-ui.store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ComponentMetaData } from './components-ui.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ComponentsUiService {
  constructor(
    protected store: ComponentsUiStore,
    private httpClient: HttpClient
  ) {}

  syncComponents(): Observable<ComponentMetaData[]> {
    return this.httpClient
      .get<ComponentMetaData[]>('assets/component-data.json')
      .pipe(tap((items) => this.updateComponents(items)));
  }

  updateComponents(components: ComponentMetaData[]): void {
    this.store.updateUI({
      components: [...components],
    });
  }
}
