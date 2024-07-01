import type { pdfFormat } from './pdf.interface';

export interface dtoPDFOptions {
  displayHeaderFooter?: boolean;
  footerTemplate?: string;
  format?: pdfFormat;
}

export interface dtoPDFCreate {
  html: string;
  pdf_options?: dtoPDFOptions;
}
