import { Component, OnInit } from '@angular/core';
import { ComponentsUiQuery } from '../state/components-ui.query';
import {
  ComponentMetaData,
  ComponentProperty,
} from '../state/components-ui.model';
import { DisplayMetaData } from '../../../core/display-meta-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, DisplayMetaData {
  constructor(public componentsUiQuery: ComponentsUiQuery) {}

  ngOnInit(): void {}

  getDecoratorProps(
    component: ComponentMetaData,
    decoratorName: string
  ): ComponentProperty[] {
    return component.properties.filter((c) => c.decorator === decoratorName);
  }
}
