/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
// const todo = require('../json/todo');
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTodo(): string {
    return 'daosijdk';
  }
}
