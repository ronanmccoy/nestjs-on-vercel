import pino, { Logger as PinoLogger, LoggerOptions } from 'pino';

export class Logger {
  private static instance: PinoLogger;

  static init() {
    if (this.instance) return this.instance;

    const level = process.env.LOG_LEVEL;

    const isDev = process.env.NODE_ENV === 'development' ? true : false;

    const options: LoggerOptions = {
      level,
      ...(isDev && {
        transport: {
          target: 'pino-pretty',
          options: {
            translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
          },
        },
      }),
    };

    this.instance = pino(options);

    return this.instance;
  }
}
