import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface DiscountList {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  img: string;
}
@Component({
  selector: 'app-home-discount',
  imports: [RouterLink],
  template: `
    <div class="max-w-[60rem] mx-auto my-12">
      <div class="px-2.5">
        <h2 class="font-bold text-4xl">絕佳優惠 – 讓您的台北之旅更超值！</h2>
        <p class="text-base">享用我們的超值優惠，讓您的住宿和聚會精彩難忘！</p>
      </div>
    </div>
    <div class="max-w-1200 mx-auto px-2.5">
      <div class="grid media-screen-800:grid-cols-3 gap-4">
        @for (item of discountItem; track item.id) {
          <div class="flex flex-col gap-3">
            <a [routerLink]="item.link">
              <img [src]="item.img" class="w-full h-full object-cover" [alt]="item.title" />
            </a>
            <div class="min-h-16">
              <h3 class="font-bold text-lg">{{ item.title }}</h3>
              <p class="text-gray-400">{{ item.date }}</p>
            </div>
            <p class="text-gray-300">
              {{ item.description }}
            </p>
            <a class="font-bold text-lg mt-auto hover:text-hover-text" [routerLink]="item.link"
              >前往了解</a
            >
          </div>
        }
      </div>
      <p class="text-center py-6">持續關注我們，發現更多精彩優惠</p>
    </div>
  `,
  styles: ``,
})
export class HomeDiscount {
  discountItem: DiscountList[] = [
    {
      id: 1,
      title: '台北跨年煙火最佳觀賞飯店：茹曦酒店',
      date: '29/10 月/2025',
      description:
        'Best Taipei Hotel for New Year’s Eve Fireworks – Want to enjoy the dazzling 101 fireworks in Taipei? ILLUME TAIPEI offers superb accessibility, Premier Rooms with balconies and stunning night views, plus a wide array of dining options in and around the hotel-your top choice for a New Year’s Eve stay in Taipei.',
      link: '/discount',
      img: '/discount/discount1.webp',
    },
    {
      id: 2,
      title: '農曆新年圍爐宴',
      date: '29/10 月/2025',
      description:
        '在茹曦酒店，和家人享受農曆新年溫馨團圓時刻。由君品Collection五星廚藝團隊，規劃一系列精緻的中式桌菜、及吃到飽饗宴，以各式精彩的料理，豐富佳節團聚時分。',
      link: '/discount',
      img: '/discount/discount2.jpg',
    },
    {
      id: 3,
      title: '台北酒店藝術展覽推薦｜茹曦酒店 x Eric Hsueh 不鏽鋼雕塑特展',
      date: '28/10 月/2025',
      description:
        '茹曦酒店與藝術家 Eric Hsueh 合作，透過展示五件生動且富有活力的不鏽鋼雕塑，重新定義公共空間，為旅宿體驗注入光影藝術的人文溫度。',
      link: '/discount',
      img: '/discount/discount3.jpg',
    },
    {
      id: 4,
      title: '2025 台北馬拉松 - 茹曦酒店為跑者點亮晨曦之旅',
      date: '09/10 月/2025',
      description:
        '台北馬拉松 2025 將於 12 月 21 日開跑！入住茹曦酒店 ILLUME TAIPEI，距離市民廣場與台北田徑場僅數分鐘車程。無論您參加全程、半程，或歡樂早餐跑，茹曦都為您準備了明亮舒適的客房、健康早餐與貼心服務，打造充滿靈感的馬拉松旅程。',
      link: '/discount',
      img: '/discount/discount4.webp',
    },
    {
      id: 5,
      title: '為什麼台北親子住宿首選是茹曦酒店？5 個親子必訪周邊景點推薦',
      date: '07/10 月/2025',
      description:
        'Taipei Hotel Family Friendly ILLUME TAIPEI is surrounded by family friendly attractions – just steps away, you’ll find an indoor ice rink, a beautifully designed play space, an immersive insect museum, a hands on flight simulator, and more.',
      link: '/discount',
      img: '/discount/discount5.webp',
    },
    {
      id: 6,
      title: '台北 LGBTQ 友善酒店：茹曦酒店彩虹藝術裝置響應驕傲月',
      date: '30/9 月/2025',
      description:
        'Taipei Hotel LGBTQ Friendly – At ILLUME TAIPEI, October Pride Month is celebrated with the dazzling Rainbow Tree art installation. Recycled glass bottles and lampshades are reborn as symbols of love, diversity, and warm hospitality, making the hotel a true LGBTQ friendly landmark in the heart of Taipei.',
      link: '/discount',
      img: '/discount/discount6.webp',
    },
    {
      id: 7,
      title: '台北跨年煙火最佳觀賞飯店：茹曦酒店',
      date: '29/10 月/2025',
      description:
        'Best Taipei Hotel for New Year’s Eve Fireworks – Want to enjoy the dazzling 101 fireworks in Taipei? ILLUME TAIPEI offers superb accessibility, Premier Rooms with balconies and stunning night views, plus a wide array of dining options in and around the hotel-your top choice for a New Year’s Eve stay in Taipei.',
      link: '/discount',
      img: '/discount/discount1.webp',
    },
    {
      id: 8,
      title: '農曆新年圍爐宴',
      date: '29/10 月/2025',
      description:
        '在茹曦酒店，和家人享受農曆新年溫馨團圓時刻。由君品Collection五星廚藝團隊，規劃一系列精緻的中式桌菜、及吃到飽饗宴，以各式精彩的料理，豐富佳節團聚時分。',
      link: '/discount',
      img: '/discount/discount2.jpg',
    },
    {
      id: 9,
      title: '台北酒店藝術展覽推薦｜茹曦酒店 x Eric Hsueh 不鏽鋼雕塑特展',
      date: '28/10 月/2025',
      description:
        '茹曦酒店與藝術家 Eric Hsueh 合作，透過展示五件生動且富有活力的不鏽鋼雕塑，重新定義公共空間，為旅宿體驗注入光影藝術的人文溫度。',
      link: '/discount',
      img: '/discount/discount3.jpg',
    },
    {
      id: 10,
      title: '2025 台北馬拉松 - 茹曦酒店為跑者點亮晨曦之旅',
      date: '09/10 月/2025',
      description:
        '台北馬拉松 2025 將於 12 月 21 日開跑！入住茹曦酒店 ILLUME TAIPEI，距離市民廣場與台北田徑場僅數分鐘車程。無論您參加全程、半程，或歡樂早餐跑，茹曦都為您準備了明亮舒適的客房、健康早餐與貼心服務，打造充滿靈感的馬拉松旅程。',
      link: '/discount',
      img: '/discount/discount4.webp',
    },
    {
      id: 11,
      title: '為什麼台北親子住宿首選是茹曦酒店？5 個親子必訪周邊景點推薦',
      date: '07/10 月/2025',
      description:
        'Taipei Hotel Family Friendly ILLUME TAIPEI is surrounded by family friendly attractions – just steps away, you’ll find an indoor ice rink, a beautifully designed play space, an immersive insect museum, a hands on flight simulator, and more.',
      link: '/discount',
      img: '/discount/discount5.webp',
    },
    {
      id: 12,
      title: '台北 LGBTQ 友善酒店：茹曦酒店彩虹藝術裝置響應驕傲月',
      date: '30/9 月/2025',
      description:
        'Taipei Hotel LGBTQ Friendly – At ILLUME TAIPEI, October Pride Month is celebrated with the dazzling Rainbow Tree art installation. Recycled glass bottles and lampshades are reborn as symbols of love, diversity, and warm hospitality, making the hotel a true LGBTQ friendly landmark in the heart of Taipei.',
      link: '/discount',
      img: '/discount/discount6.webp',
    },
  ];
}
