import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('home')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/welcome')
  getHello(): string {
    return this.appService.getHello();
  }
}
