export interface PDFOptions {
  root: string;
}

export interface RegisterOptions extends PDFOptions {
  isGlobal?: boolean;
}

export type pdfFormat =
  | 'Letter'
  | 'Legal'
  | 'Tabloid'
  | 'Ledger'
  | 'A0'
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'A6';
