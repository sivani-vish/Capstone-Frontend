import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

type HealthResponse = { status: string; author: string; time: string };

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): HealthResponse {
    return { status: 'ok', author: 'Nishant', time: new Date().toISOString() };
  }
}
