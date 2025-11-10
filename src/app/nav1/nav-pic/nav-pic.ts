import { Component } from '@angular/core';
import { RoomTypePicFrame } from '../../shared/room-type-pic-frame/room-type-pic-frame';
interface Room {
  id: number;
  title: string;
  img: string;
}
@Component({
  selector: 'app-nav-pic',
  imports: [RoomTypePicFrame],
  template: ` <app-room-type-pic-frame [items]="roomItem" /> `,
  styles: ``,
})
export class NavPic {
  roomItem: Room[] = [
    { id: 1, img: '/nav-pic1.webp', title: '客房光照' },
    { id: 2, img: '/nav-pic2.webp', title: '尊爵三人房' },
  ];
}
