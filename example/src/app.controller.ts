import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Res() res: Response) {
    const pdf = await this.appService.getHello();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdf.length,
    });

    res.send(pdf);
  }
}
