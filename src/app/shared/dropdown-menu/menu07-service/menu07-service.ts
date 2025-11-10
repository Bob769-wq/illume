import { Component } from '@angular/core';
interface ServiceList {
  id: number;
  img: string;
  title: string;
}
@Component({
  selector: 'app-menu07-service',
  imports: [],
  template: `
    <div class="grid grid-cols-[4fr_1.2fr] place-items-center w-3/4 mx-auto gap-6">
      <div class="grid grid-cols-4 gap-4">
        @for (item of serviceItem; track item.id) {
          <a><img [src]="item.img" [alt]="item.title" /></a>
        }
      </div>
      <div
        class="flex flex-col items-center cursor-pointer
        shadow-md group overflow-hidden"
      >
        <img
          src="/menu07/09.webp"
          class="group-hover:scale-105 transition-all duration-500"
          alt="menu07"
        />
        <div class="flex flex-col gap-3 items-center justify-center px-5 py-8 min-h-40">
          <span><i class="fa-solid fa-bell fa-2xl" style="color: #1f3251;"></i></span>
          <h4 class="font-bold text-xl">瀏覽全部設施</h4>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Menu07Service {
  serviceItem: ServiceList[] = [
    { id: 1, title: '01', img: '/menu07/01.webp' },
    { id: 2, title: '02', img: '/menu07/02.webp' },
    { id: 3, title: '03', img: '/menu07/03.webp' },
    { id: 4, title: '04', img: '/menu07/04.webp' },
    { id: 5, title: '05', img: '/menu07/05.webp' },
    { id: 6, title: '06', img: '/menu07/06.webp' },
    { id: 7, title: '07', img: '/menu07/07.webp' },
    { id: 8, title: '08', img: '/menu07/08.webp' },
  ];
}
