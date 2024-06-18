import { Inject, Injectable } from '@nestjs/common';
import { Eta } from 'eta';
import { chromium } from 'playwright';

import { PDFOptions } from './pdf.interface';
import { PDF_OPTIONS } from './pdf.constants';

@Injectable()
export class PDFService {
  private eta: Eta;

  constructor(
    @Inject(PDF_OPTIONS)
    private readonly pdfOptions: PDFOptions,
  ) {}

  private async create(html: string) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    const pdf = await page.pdf();
    await browser.close();
    return pdf;
  }

  async onModuleInit() {
    this.eta = new Eta({ views: this.pdfOptions.root });
  }

  async createPDF(template: string, data: object) {
    const html = this.eta.render(template, data);
    return this.create(html);
  }
}
