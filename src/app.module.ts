import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LyricsModule } from './lyrics/lyrics.module';

@Module({
  imports: [LyricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
