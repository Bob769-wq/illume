import { Component, input } from '@angular/core';
import { RoomTypePicContent } from './room-type-pic-content/room-type-pic-content';
interface Room {
  id: number;
  title: string;
  img: string;
}
@Component({
  selector: 'app-room-type-pic-frame',
  imports: [RoomTypePicContent],
  template: `
    <h2 class="text-4xl font-bold px-6 py-2.5">客房照片</h2>
    <div class="grid media-screen-800:grid-cols-2 gap-4 px-6 py-8">
      @for (item of items(); track item.id; let i = $index) {
        <app-room-type-pic-content
          [pic]="item"
          [class.hidden]="i >= 1"
          [class.media-screen-800:flex]="i >= 1"
        />
      }
    </div>
  `,
  styles: ``,
})
export class RoomTypePicFrame {
  items = input.required<Room[]>();
}
