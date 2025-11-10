import { Component } from '@angular/core';
import { RoomHeroSectionContent } from '../../shared/room-hero-section-content/room-hero-section-content';
interface RoomHeroSection {
  id: number;
  title: string;
  img: string;
  description: string;
}
@Component({
  selector: 'app-hero-section',
  imports: [RoomHeroSectionContent],
  template: ` <app-room-hero-section-content [item]="roomHeroItem[0]" /> `,
  styles: ``,
})
export class HeroSection {
  roomHeroItem: RoomHeroSection[] = [
    {
      id: 1,
      title: '公寓式套房',
      description:
        '沉浸於優雅與舒適的全新公寓式套房，專為兩人精心設計。公寓式套房擁有寬敞的客廳與設備齊全的小廚房，是長期住宿旅客的理想選擇。置身於寧靜的氛圍中，享受現代化設施與精心設計的細節，提升您的住宿體驗。不論是商務還是休閒，公寓式套房都是您在旅途中的完美家園。讓您的住宿體驗難以忘懷，離開時倍感煥然一新，靈感滿滿，準備迎接全新挑戰。',
      img: '/hero-section.webp',
    },
  ];
}
