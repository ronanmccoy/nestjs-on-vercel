import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const appPort = process.env.NODE_PORT || 3000;
    await app.listen(appPort);
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (e) {
    console.log(`Failed to launch: ${e}`);
  }
}
bootstrap();
