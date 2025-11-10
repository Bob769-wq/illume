import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface ExploreList {
  id: number;
  link: string;
  img: string;
}
@Component({
  selector: 'app-menu01-explore',
  imports: [RouterLink],
  template: `
    <div class="flex gap-8 px-2">
      <div class="w-1/3">
        <h4 class="font-bold text-xl">熱門推薦</h4>
        @for (item of leftItem; track item.id) {
          <a [routerLink]="item.link" class="inline-block mt-6"
            ><img [src]="item.img" [alt]="item.link"
          /></a>
        }
      </div>
      <div class="w-2/3">
        <div class="grid grid-cols-3 gap-2">
          @for (item of rightItem; track item.id) {
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
            <i class="fa-solid fa-book fa-2xl" style="color: currentColor;"></i>
          </span>
          <h4 class="text-xl">查看所有旅遊指南</h4>
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class Menu01Explore {
  leftItem: ExploreList[] = [{ id: 1, img: '/menu01/left01.webp', link: '/left01' }];
  rightItem: ExploreList[] = [
    { id: 1, img: '/menu01/right01.webp', link: '/right01' },
    { id: 2, img: '/menu01/right02.webp', link: '/right02' },
    { id: 3, img: '/menu01/right03.jpg', link: '/right03' },
    { id: 4, img: '/menu01/right04.webp', link: '/right04' },
    { id: 5, img: '/menu01/right05.webp', link: '/right05' },
    { id: 6, img: '/menu01/right06.webp', link: '/right06' },
  ];
}
