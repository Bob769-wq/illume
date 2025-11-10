import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface CuisineList {
  id: number;
  title: string;
  link: string;
  img: string;
}
@Component({
  selector: 'app-menu05-cuisine',
  imports: [RouterLink],
  template: `
    <div class="w-4/5 mx-auto">
      <div class="flex gap-8">
        <div class="w-2/5">
          <h4 class="text-xl">館內餐廳</h4>
          @for (item of cuisineItem; track item.id) {
            <a
              [routerLink]="item.link"
              class="inline-block mt-4 relative group rounded-md overflow-hidden"
            >
              <img [src]="item.img" class="w-full h-full object-cover" [alt]="item.title" />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 flex justify-center"
              ></div>
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center"
              >
                <h4 class="text-xl text-white">{{ item.title }}</h4>
              </div>
            </a>
          }
        </div>
        <div class="w-3/5 flex flex-col">
          <h4 class="text-xl">館內獨立經營餐廳</h4>
          <div class="flex gap-4 mt-4">
            @for (item of cuisineIndependent; track item.id) {
              <a
                [routerLink]="item.link"
                class="inline-block mt-4 relative group rounded-md overflow-hidden"
              >
                <img [src]="item.img" class="w-full h-full object-cover" [alt]="item.title" />
                <div
                  class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 flex justify-center"
                ></div>
                <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center"
                >
                  <h4 class="text-xl text-white">{{ item.title }}</h4>
                </div>
              </a>
            }
          </div>
          <a
            routerLink="/more"
            class="flex items-center gap-2 justify-end py-2 mt-12 hover:text-hover-text"
          >
            <span>
              <i class="fa-solid fa-utensils fa-2xl" style="color:currentColor;"></i>
            </span>
            <h4 class="text-xl">查看所有餐廳</h4>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Menu05Cuisine {
  cuisineItem: CuisineList[] = [
    { id: 1, title: 'Sunny Buffet 自助餐廳', link: '/buffet', img: '/menu05/01.webp' },
  ];
  cuisineIndependent: CuisineList[] = [
    { id: 1, title: 'Opera 雞尾酒吧', link: '/opera', img: '/menu05/02.webp' },
    { id: 2, title: '八和和牛燒肉專賣店', link: '/beef', img: '/menu05/03.webp' },
  ];
}
