import type { pdfFormat } from './pdf.interface';

export interface dtoPDFOptions {
  footerTemplate?: string;
  format?: pdfFormat;
}

export interface dtoPDFCreate {
  html: string;
  pdf_options?: dtoPDFOptions;
}
