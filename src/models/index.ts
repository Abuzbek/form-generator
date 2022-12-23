export type IFieldType = 1 | 2 | 3;
type Booleanish = boolean | "true" | "false";
export interface IDocument {
  id: number;
  document_name: string;
  created_at: Date | string;
  field_count: number;
}

export interface IDocumentDetailField {
  id: number;
  field_seq: number;
  is_mandatory: Booleanish | any[] | Set<any>;
  field_type: IFieldType;
  field_name: number;
  document_id: number;
  select_values: any;
}

export interface IDocumentDetail {
  documentName: string;
  fields: IDocumentDetailField[];
}

export interface IDocumentBodyFormValues {
  field_seq: number;
  is_mandatory: Booleanish | any[] | Set<any>;
  field_type: IFieldType;
  field_name: string;
  select_values: any | any[];
}

export interface IDocumentBody {
  document_name: string;
  form_values: IDocumentBodyFormValues[];
}
