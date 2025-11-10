import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface DiscountList {
  id: number;
  link: string;
  img: string;
}
@Component({
  selector: 'app-menu02-discount',
  imports: [RouterLink],
  template: `
    <div class="grid grid-cols-3 px-6">
      <div class="flex flex-col gap-6 pr-6">
        <h4 class="font-bold text-xl">住宿優惠</h4>
        <div class="grid grid-cols-2 gap-2">
          @for (item of stayItem; track item.id) {
            <a [routerLink]="item.link" class="hover:opacity-80"
              ><img [src]="item.img" [alt]="item.link"
            /></a>
          }
        </div>
      </div>
      <div class="flex flex-col gap-6 border-x px-2 h-full">
        <h4 class="font-bold text-xl">餐飲優惠</h4>
        <div class="grid grid-cols-2 gap-2">
          @for (item of tasteItem; track item.id) {
            <a [routerLink]="item.link" class="hover:opacity-80"
              ><img [src]="item.img" [alt]="item.link"
            /></a>
          }
        </div>
      </div>
      <div class="flex flex-col gap-6 pl-6">
        <h4 class="font-bold text-xl">宴會專案</h4>
        <div class="grid grid-cols-2 gap-2">
          @for (item of partyItem; track item.id) {
            <a [routerLink]="item.link" class="hover:opacity-80"
              ><img [src]="item.img" [alt]="item.link"
            /></a>
          }
        </div>
        <a
          routerLink="/more"
          class="flex items-center gap-2 justify-end pt-6 hover:text-hover-text"
        >
          <span>
            <i class="fa-solid fa-gift fa-2xl" style="color:currentColor;"></i>
          </span>
          <h4 class="text-xl">探索所有專屬優惠</h4>
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class Menu02Discount {
  stayItem: DiscountList[] = [
    { id: 1, img: '/menu02/1-1.webp', link: '/stay1' },
    { id: 2, img: '/menu02/1-2.jpg', link: '/stay2' },
    { id: 3, img: '/menu02/1-3.webp', link: '/stay3' },
    { id: 4, img: '/menu02/1-4.webp', link: '/stay4' },
  ];
  tasteItem: DiscountList[] = [
    { id: 1, img: '/menu02/2-1.jpg', link: '/taste1' },
    { id: 2, img: '/menu02/2-2.webp', link: '/taste2' },
    { id: 3, img: '/menu02/2-3.webp', link: '/taste3' },
    { id: 4, img: '/menu02/2-4.webp', link: '/taste4' },
  ];
  partyItem: DiscountList[] = [
    { id: 1, img: '/menu02/3-1.webp', link: '/party1' },
    { id: 2, img: '/menu02/3-2.webp', link: '/party2' },
    { id: 3, img: '/menu02/3-3.webp', link: '/party3' },
  ];
}
