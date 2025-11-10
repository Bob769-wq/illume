import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface NoticeList {
  id: number;
  link: string;
  img: string;
}
@Component({
  selector: 'app-menu03-hotel-notice',
  imports: [RouterLink],
  template: `
    <div class="grid grid-cols-4 gap-2 w-4/5 mx-auto">
      @for (item of noticeItem; track item.id) {
        <a [routerLink]="item.link" class="hover:opacity-80"
          ><img [src]="item.img" [alt]="item.link"
        /></a>
      }
    </div>
    <a
      routerLink="/more"
      class="flex items-center gap-2 justify-end pt-6 w-4/5 mx-auto hover:text-hover-text"
    >
      <span>
        <i class="fa-solid fa-book fa-2xl" style="color:currentColor;"></i>
      </span>
      <h4 class="text-xl">瀏覽全部最新公告</h4>
    </a>
  `,
  styles: ``,
})
export class Menu03HotelNotice {
  noticeItem: NoticeList[] = [
    { id: 1, img: '/menu03/01.webp', link: '/notice1' },
    { id: 2, img: '/menu03/02.webp', link: '/notice2' },
    { id: 3, img: '/menu03/03.webp', link: '/notice3' },
    { id: 4, img: '/menu03/04.webp', link: '/notice4' },
    { id: 5, img: '/menu03/05.webp', link: '/notice5' },
    { id: 6, img: '/menu03/06.webp', link: '/notice6' },
  ];
}
