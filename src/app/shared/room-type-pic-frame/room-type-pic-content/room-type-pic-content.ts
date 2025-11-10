import { Component, input } from '@angular/core';
interface Room {
  id: number;
  title: string;
  img: string;
}
@Component({
  selector: 'app-room-type-pic-content',
  imports: [],
  template: `
    <div class="flex flex-col cursor-pointer">
      <img
        [src]="pic().img"
        [alt]="pic().title"
        class="overflow-hidden w-full h-full object-cover rounded-xl"
      />
      <p class="text-center text-base py-1">{{ pic().title }}</p>
    </div>
  `,
  styles: ``,
})
export class RoomTypePicContent {
  pic = input.required<Room>();
}
