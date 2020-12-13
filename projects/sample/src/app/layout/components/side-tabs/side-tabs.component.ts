import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ComponentsUiQuery } from '../state/components-ui.query';
import {
  ComponentMetaData,
  ComponentProperty,
} from '../state/components-ui.model';
import { DisplayMetaData } from '../../../core/display-meta-data';

@Component({
  selector: 'app-side-tabs',
  templateUrl: './side-tabs.component.html',
  styleUrls: ['./side-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideTabsComponent implements OnInit, DisplayMetaData {
  constructor(public componentsUiQuery: ComponentsUiQuery) {}

  ngOnInit(): void {}

  getDecoratorProps(
    component: ComponentMetaData,
    decoratorName: string
  ): ComponentProperty[] {
    return component.properties.filter((c) => c.decorator === decoratorName);
  }
}
