import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/button/button';
interface RoomList {
  id: number;
  title: string;
  description: string;
  link: string;
  img: string;
}
@Component({
  selector: 'app-room-type',
  imports: [RouterLink, Button],
  template: `
    <div class="px-6">
      <h2 class="font-bold text-4xl text-center py-16">全新客房與套房</h2>
      <div class="grid grid-cols-2 media-screen-800:grid-cols-3 gap-6">
        @for (item of roomItem; track item.id; let i = $index) {
          <div
            class="flex flex-col gap-2"
            [class.hidden]="i >= 2"
            [class.media-screen-800:flex]="i >= 2"
          >
            <a [routerLink]="item.link">
              <img
                [src]="item.img"
                [alt]="item.title"
                class="w-full h-full object-cover rounded-xl overflow-hidden"
              />
            </a>
            <div class="flex flex-col gap-4">
              <h3 class="font-bold text-3xl">{{ item.title }}</h3>
              <p class="text-base">{{ item.description }}</p>
              <a
                [routerLink]="item.link"
                class="bg-icon-hover flex self-start px-4 py-2 rounded-md border border-icon-hover hover:bg-white"
                >房型資訊</a
              >
            </div>
          </div>
        }
      </div>
      <div class="flex justify-center py-2">
        <app-button label="探索所有房型" />
      </div>
    </div>
  `,
  styles: ``,
})
export class RoomType {
  roomItem: RoomList[] = [
    {
      id: 1,
      title: '尊爵客房',
      description:
        '走進這間全新裝修、令人驚艷的客房，即可欣賞台北101和敦化北路的市中心樹海美景。在熙熙攘攘得旅途當中，享受無與倫比的景色與恬靜時光。',
      link: '/guest',
      img: '/menu04/01.webp',
    },
    {
      id: 2,
      title: '尊爵三人房',
      description:
        '這間全新裝修的客房最多可供三位旅客入住，欣賞城市和台北101的壯麗景色，體驗現代舒適。',
      link: '/nav4/triple-room',
      img: '/menu04/02.webp',
    },
    {
      id: 3,
      title: '尊爵家庭房',
      description:
        '全新裝修的家庭四人房，提供充滿舒適的風格和寬敞的空間，兩大床或是一大床兩小床的床型，非常適合與家人或朋友留下美好回憶。',
      link: '/family',
      img: '/menu04/03.webp',
    },
  ];
}
