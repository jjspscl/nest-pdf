import { Module, DynamicModule } from '@nestjs/common';
import { PDFService } from './pdf.service';
import { RegisterOptions } from './pdf.interface';
import { PDF_OPTIONS } from './pdf.constants';

@Module({
  providers: [PDFService],
  exports: [PDFService],
})
export class PDFModule {
  static register(options: RegisterOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: PDFModule,
      providers: [
        {
          provide: PDF_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
}
