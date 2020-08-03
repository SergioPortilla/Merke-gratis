export class DocumentType {
  id: number;
  documentType: string;
  description: string;

  constructor(code: number, value: string, description: string) {
    this.id = code;
    this.documentType = value;
    this.description = description;
  }
}
