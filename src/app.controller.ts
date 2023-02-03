import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NonDurableProviderBService } from './non-durable-provider-b/non-durable-provider-b.service';

@Controller('hello')
export class AppController {
  constructor(
    private readonly dep: NonDurableProviderBService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
