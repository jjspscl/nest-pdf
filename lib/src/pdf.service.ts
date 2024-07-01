import { Inject, Injectable } from '@nestjs/common';
import { Eta } from 'eta';
import { chromium } from 'playwright';

import { PDFOptions } from './pdf.interface';
import { PDF_OPTIONS } from './pdf.constants';

import * as dto from './pdf.dto';

@Injectable()
export class PDFService {
  private eta: Eta;

  constructor(
    @Inject(PDF_OPTIONS)
    private readonly pdfOptions: PDFOptions,
  ) {}

  private async create({ html, pdf_options }: dto.dtoPDFCreate) {
    const browser = await chromium.launch({
      args: ['--disable-web-security'],
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setContent(html, { waitUntil: 'networkidle' });
    const pdf = await page.pdf(pdf_options);
    await browser.close();
    return pdf;
  }

  private async onModuleInit() {
    this.eta = new Eta({ views: this.pdfOptions.root });
  }

  async createPDF(
    template: string,
    data: object,
    pdf_options?: dto.dtoPDFOptions,
  ) {
    const html = this.eta.render(template, data);
    return await this.create({ html, pdf_options });
  }
}
