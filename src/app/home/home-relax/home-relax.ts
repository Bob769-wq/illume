import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface RelaxList {
  id: number;
  title: string;
  description: string;
  link: string;
  img: string;
}
@Component({
  selector: 'app-home-relax',
  imports: [RouterLink],
  template: `
    <div class="flex justify-center py-12">
      <div class="text-4xl font-bold w-2/3">放鬆充電 – 尊享頂級設施</div>
    </div>
    <div class="px-6">
      <div class="flex h-[37.5rem]">
        @for (item of relaxItem; track item.id; let i = $index) {
          <div class="relative group rounded-xl overflow-hidden">
            <img [src]="item.img" class="h-full object-cover flex-1 min-w-0" [alt]="item.title" />
            <div
              class="absolute inset-0 bg-black group-hover:opacity-30 opacity-0 transition-opacity duration-500"
            ></div>
            <div class="absolute top-1/2 left-4  group-hover:flex flex-col justify-center hidden">
              <h4 class="text-white  text-xl font-bold">{{ item.title }}</h4>
              <p class="text-white">{{ item.description }}</p>
              <a
                [routerLink]="item.link"
                class="bg-icon-hover mt-4 px-4 py-2 rounded-md text-black self-start"
                >了解更多</a
              >
            </div>
          </div>
        }
      </div>
      <div class="flex justify-center py-4">
        <a
          routerLink="/room"
          class="flex items-center gap-2 py-1 px-5 bg-button-bg rounded-md shadow-xl hover:scale-110 transition-all duration-500"
        >
          <span><i class="fa-solid fa-calendar" style="color: currentColor;"></i></span>
          <span class="font-bold text-base">探索所有房型</span>
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeRelax {
  relaxItem: RelaxList[] = [
    {
      id: 1,
      title: '健身房',
      description: '超過50組專業健身設施',
      link: '/relax',
      img: '/service/01.webp',
    },
    {
      id: 2,
      title: '戶外游泳池',
      description: '享受風光明媚的城市之旅',
      link: '/relax',
      img: '/service/02.webp',
    },
    {
      id: 3,
      title: '健身房',
      description: '超過50組專業健身設施',
      link: '/relax',
      img: '/service/03.webp',
    },
  ];
}
