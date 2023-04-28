import { Injectable } from '@nestjs/common';
import { Logger } from '../common/logger';

@Injectable()
export class LyricsService {
  logger = Logger.init();

  constructor() {}

  async letsGoCrazyIntro(): Promise<string> {
    this.logger.debug('Returning intro to "Let\'s Go Crazy"');

    const msg =
      " Dearly Beloved. We are gathered here todat to get through this thing called life.\n\nElectric word \"life\", it means forever and that's a mighty long time. But I'm here to tell you there's something else. The afterworld. A world of never ending happiness. You can always see the sun, day or night.\n\nSo when you call up that shrink in Beverly Hills, you know the one, Dr. Everything'll Be Alright. Instead of asking him how much of your time is left, ask him how much of your mind, baby. 'Cause in this life, things are much harder than in the afterworld. In this life, you're on your own. And if the elevator tries to bring you down, go crazy. Punch a higher floor.";
    return msg;
  }

  async letsGoCrazy(): Promise<any> {
    this.logger.debug('Returning lyrics for "Let\'s Go Crazy"');

    const response = {
      artist: 'Prince',
      album: 'Purple Rain',
      song: "Let's Go Crazy",
      writer: 'Prince Rogers Nelson',
      lyrics: `Dearly beloved
      We are gathered here today
      To get through this thing called life
      Electric word, life
      It means forever and that's a mighty long time
      But I'm here to tell you
      There's something else
      The afterworld
      A world of never ending happiness
      You can always see the sun, day or night
      So when you call up that shrink in Beverly Hills
      You know the one, Dr. Everything'll-Be-Alright
      Instead of asking him how much of your time is left
      Ask him how much of your mind, baby
      'Cause in this life
      Things are much harder than in the afterworld
      In this life
      You're on your own
      And if de-elevator tries to bring you down
      Go crazy, punch a higher floor
      Hoo
      
      If you don't like the world you're living in
      Take a look around you
      At least you got friends
      You see, I called my old lady
      For a friendly word
      She picked up the phone
      Dropped it on the floor
      (Ah, ah) is all I heard
      
      I'm not gonna let de-elevator
      Bring us down
      Oh, no let's go
      
      Let's go crazy
      Let's get nuts
      Let's look for the purple banana
      'Til they put us in the truck, let's go
      
      We're all excited
      But we don't know why
      Maybe it's 'cause
      We're all gonna die
      And when we do (when we do)
      What's it all for (what's it all for)
      You better live now
      Before the grim reaper come knocking on your door
      
      Tell me, are we gonna let de-elevator bring us down
      Oh, no let's go
      
      Let's go crazy
      Let's get nuts
      Look for the purple banana
      'Til they put us in the truck, let's go
      
      Come on, baby
      Let's get nuts
      Yeah
      Crazy
      
      Let's go crazy
      Are we gonna let de-elevator bring us down?
      Oh, no let's go
      Go crazy (woo)
      
      I said let's go crazy (go crazy)
      Let's go, let's go
      Go (let's go)
      
      Dr. Everything'll-Be-Alright
      Will make everything go wrong
      Pills and thrills and daffodils will kill
      Hang tough, children
      
      He's coming
      He's coming
      Coming
      
      Take me away`,
    };
    return response;
  }

  async songs(): Promise<any> {
    this.logger.debug('Returning list of songs');

    const songsList = [
      {
        song: "Let's Go Crazy",
        endpoint: 'lets-go-crazy',
      },
      {
        song: "Let's Go Crazy (Intro)",
        endpoint: 'lets-go-crazy-intro',
      },
    ];
    return songsList;
  }
}
