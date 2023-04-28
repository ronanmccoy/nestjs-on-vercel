import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const msg = 'Hello World! This is a basic demo NestJS app.';
    const timestamp = new Date().toISOString();
    return msg + `\n(${timestamp})`;
  }
}
