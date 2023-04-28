import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './common/logger';

async function bootstrap() {
  // const logger = Logger.init();

  try {
    const app = await NestFactory.create(AppModule);
    const appPort = process.env.NODE_PORT || 3000;

    await app.listen(appPort);

    // logger.info(`Application is running on: ${await app.getUrl()}`);
  } catch (e) {
    // logger.error(`Failed to launch: ${e}`);
  }
}
bootstrap();
