import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PDFModule } from '@jjspscl/nest-pdf';
import * as path from 'path';

@Module({
  imports: [
    PDFModule.register({
      isGlobal: true,
      root: path.join(__dirname, 'templates'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
