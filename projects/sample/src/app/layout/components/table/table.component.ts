import { Component, OnInit } from '@angular/core';
import { ComponentsUiQuery } from '../state/components-ui.query';
import {
  ComponentMetaData,
  ComponentProperty,
} from '../state/components-ui.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(public componentsUiQuery: ComponentsUiQuery) {}

  ngOnInit(): void {}

  getInputs(component: ComponentMetaData): ComponentProperty[] {
    return component.properties.filter((c) => c.decorator === 'input');
  }
}
