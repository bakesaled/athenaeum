import { ComponentsUiQuery } from '../layout/components/state/components-ui.query';
import {
  ComponentMetaData,
  ComponentProperty,
} from '../layout/components/state/components-ui.model';

export interface DisplayMetaData {
  componentsUiQuery: ComponentsUiQuery;

  getDecoratorProps(
    component: ComponentMetaData,
    decoratorName: string
  ): ComponentProperty[];
}
