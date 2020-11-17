export interface ComponentProperty {
  name?: string;
  type?: string;
  encodedType?: string;
  comment?: string;
  decorator?: 'input' | 'output';
}

export interface Example {
  name?: string;
  simpleName?: string;
  html?: string;
  scss?: string;
  ts?: string;
}

export interface ComponentMetaData {
  name?: string;
  simpleName?: string;
  selector?: string;
  comment?: string;
  encodedImportText?: string;
  encodedUsageText?: string;
  properties: ComponentProperty[];
  examples: Example[];
}

export type ComponentsUI = {
  components?: ComponentMetaData[];
};

export const COMPONENTS_UI_COMPONENTS = [];
