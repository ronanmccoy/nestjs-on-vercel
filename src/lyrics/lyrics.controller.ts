import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { LyricsService } from './lyrics.service';

@Controller('lyrics')
export class LyricsController {
  constructor(private lyricsService: LyricsService) {}

  @Get()
  async default() {
    throw new NotImplementedException();
  }

  @Get('songs')
  async getSongs() {
    return this.lyricsService.songs();
  }

  @Get('lets-go-crazy-intro')
  async letsGoCrazyIntro() {
    return this.lyricsService.letsGoCrazyIntro();
  }

  @Get('lets-go-crazy')
  async letsGoCrazy() {
    return this.lyricsService.letsGoCrazy();
  }
}
