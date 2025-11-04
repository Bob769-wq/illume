import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface DiscountList {
  id: number;
  title: string;
  img: string;
  link: string;
}
@Component({
  selector: 'app-discount',
  imports: [RouterLink],
  template: `
    <h2 class="text-4xl font-bold px-6 py-2.5">最新住房優惠</h2>
    <div class="grid  media-screen-800:grid-cols-2 gap-2 px-6 py-10">
      @for (item of discountItem; track item.id) {
        <div class="overflow-hidden rounded-lg relative">
          <img [src]="item.img" class="w-full h-full object-cover" [alt]="item.title" />
          <a
            [routerLink]="item.link"
            class="absolute inset-0 bg-discount-hover flex justify-center items-center
            hover:opacity-100 opacity-0 transition-opacity duration-500"
          >
            <h3 class="text-white text-lg">{{ item.title }}</h3>
          </a>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class Discount {
  discountItem: DiscountList[] = [
    {
      id: 1,
      title: '台北跨年煙火最佳觀賞飯店：茹曦酒店',
      img: '/discount/discount1.webp',
      link: '/discount',
    },
    { id: 2, title: '農曆新年圍爐宴', img: '/discount/discount2.jpg', link: '/discount' },
    {
      id: 3,
      title: '台北酒店藝術展覽推薦｜茹曦酒店 x Eric Hsueh 不鏽鋼雕塑特展',
      img: '/discount/discount3.jpg',
      link: '/discount',
    },
    {
      id: 4,
      title: '2025 台北馬拉松 - 茹曦酒店為跑者點亮晨曦之旅',
      img: '/discount/discount4.webp',
      link: '/discount',
    },
    {
      id: 5,
      title: '為什麼台北親子住宿首選是茹曦酒店？5 個親子必訪周邊景點推薦',
      img: '/discount/discount5.webp',
      link: '/discount',
    },
    {
      id: 6,
      title: '台北 LGBTQ 友善酒店：茹曦酒店彩虹藝術裝置響應驕傲月',
      img: '/discount/discount6.webp',
      link: '/discount',
    },
  ];
}
