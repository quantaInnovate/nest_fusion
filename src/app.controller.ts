import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
// import todo from './json/todo.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as todo from './json/todo.json'; // or use const inside the controller function
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  getTodo(): string {
    console.log(todo);
    return this.appService.getTodo();
  }
}
