import { Component } from '@angular/core';
import { RoomTypePicFrame } from '../../shared/room-type-pic-frame/room-type-pic-frame';
interface Room {
  id: number;
  title: string;
  img: string;
}
@Component({
  selector: 'app-pic',
  imports: [RoomTypePicFrame],
  template: ` <app-room-type-pic-frame [items]="roomItem" /> `,
  styles: ``,
})
export class Pic {
  roomItem: Room[] = [
    { id: 1, img: '/pic1.webp', title: '中庭光照' },
    { id: 2, img: '/pic2.webp', title: '公寓式套房｜客廳' },
  ];
}
