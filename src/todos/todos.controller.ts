import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import * as todo from '../json/todo.json';
import { Response } from 'express';

@Controller('todos')
export class TodosController {
  @Get('todos')
  getHello(): string {
    // console.log(todo);
    return 'toso test';
  }

  @Get('')
  todos(@Res() res: Response) {
    res.status(HttpStatus.OK).send(todo);
  }
}
