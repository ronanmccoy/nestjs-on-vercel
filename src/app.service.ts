import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const msg =
      " Dearly Beloved. We are gathered here todat to get through this thing called life.\n\nElectric word \"life\", it means forever and that's a mighty long time. But I'm here to tell you there's something else. The afterworld. A world of never ending happiness. You can always see the sun, day or night.\n\nSo when you call up that shrink in Beverly Hills, you know the one, Dr. Everything'll Be Alright. Instead of asking him how much of your time is left, ask him how much of your mind, baby. 'Cause in this life, things are much harder than in the afterworld. In this life, you're on your own. And if the elevator tries to bring you down, go crazy. Punch a higher floor.";
    return msg;
  }
}
