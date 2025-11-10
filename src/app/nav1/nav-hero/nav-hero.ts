import { Component } from '@angular/core';
import { RoomHeroSectionContent } from '../../shared/room-hero-section-content/room-hero-section-content';
interface RoomHeroSection {
  id: number;
  title: string;
  img: string;
  description: string;
}
@Component({
  selector: 'app-nav-hero',
  imports: [RoomHeroSectionContent],
  template: ` <app-room-hero-section-content [item]="roomHeroItem[0]" /> `,
  styles: ``,
})
export class NavHero {
  roomHeroItem: RoomHeroSection[] = [
    {
      id: 1,
      title: '尊爵三人房',
      description:
        '  沉浸於現代舒適的全新尊爵三人房，專為三位旅客精心設計。從窗外可欣賞壯麗的城市天際線與台北101美景。寬敞的空間、現代化的設施與精緻細節，為您提升住宿體驗。無論是家庭還是小型團體，這間房間完美結合了優雅與放鬆，保證為您帶來難忘的回憶。立即預訂，享受令人耳目一新的住宿體驗，每個細節都為提升您的舒適感與愉悅而設計。',
      img: '/nav-hero-section.webp',
    },
  ];
}
