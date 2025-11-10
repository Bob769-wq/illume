import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
interface RoomList {
  id: number;
  link: string;
  img: string;
  title: string;
}
@Component({
  selector: 'app-menu04-room',
  imports: [RouterLink],
  template: `
    <div class="grid grid-cols-4 gap-2 w-4/5 mx-auto">
      @for (item of roomItem; track item.id) {
        <div class="flex flex-col cursor-pointer group">
          <a [routerLink]="item.link" class="group-hover:opacity-80" (click)="onLinkClick()"
            ><img [src]="item.img" class="rounded-md" [alt]="item.title"
          /></a>
          <h4 class="text-xl text-center hover:text-hover-text">{{ item.title }}</h4>
        </div>
      }
    </div>
    <a
      routerLink="/more"
      class="flex items-center justify-center gap-2 pt-6 w-4/5 mx-auto hover:text-hover-text"
      (click)="onLinkClick()"
    >
      <span>
        <i class="fa-solid fa-bed fa-2xl" style="color:currentColor;"></i>
      </span>
      <h4 class="text-xl">查看所有客房</h4>
    </a>
  `,
  styles: ``,
})
export class Menu04Room {
  linkClicked = output();
  onLinkClick() {
    this.linkClicked.emit();
  }
  roomItem: RoomList[] = [
    { id: 1, title: '尊爵客房', img: '/menu04/01.webp', link: '/nav4/room' },
    { id: 2, title: '尊爵三人房', img: '/menu04/02.webp', link: '/nav4/triple-room' },
    { id: 3, title: '尊爵家庭房', img: '/menu04/03.webp', link: '/nav4/room' },
    { id: 4, title: '尊爵套房', img: '/menu04/04.webp', link: '/nav4/room' },
    { id: 5, title: '公寓式套房', img: '/menu04/05.webp', link: '/nav4/apartment' },
    { id: 6, title: '行政套房', img: '/menu04/06.webp', link: '/nav4/room' },
    { id: 7, title: '標準客房（2017年裝修）', img: '/menu04/07.webp', link: '/nav4/room' },
    { id: 8, title: '豪華套房', img: '/menu04/08.webp', link: '/nav4/room' },
  ];
}
