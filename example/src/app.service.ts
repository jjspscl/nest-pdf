import { PDFService } from '@jjspscl/nest-pdf';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly pdfService: PDFService) {}

  getHello() {
    return this.pdfService.createPDF('hello', { name: 'John Doe' });
  }
}
