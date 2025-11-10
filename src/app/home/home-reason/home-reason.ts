import { Component } from '@angular/core';
interface ReasonList {
  id: number;
  title: string;
  description: string;
  img: string;
}
interface Rating {
  id: number;
  title: string;
  rated: string;
}
@Component({
  selector: 'app-home-reason',
  imports: [],
  template: `
    <div class="w-[90%] mx-auto pt-12">
      <h2 class="text-4xl text-center font-bold py-4">為何選擇茹曦酒店?</h2>
      <div class="grid grid-cols-2 media-screen-800:grid-cols-5 gap-3 pt-12 pb-6">
        @for (item of reasonItem; track item.id) {
          <div class="flex flex-col gap-3 items-center">
            <span class="hover:text-icon-hover"
              ><i [class]="item.img" style="color: currentColor"></i
            ></span>
            <div class="text-center">
              <h3 class="font-bold text-lg">{{ item.title }}</h3>
              <p class="text-lg max-w-56">{{ item.description }}</p>
            </div>
          </div>
        }
      </div>
    </div>
    <div class="bg-icon-hover py-2 px-4">
      <div class="md:flex items-center justify-between hidden">
        <div class="flex items-center gap-2 pr-4 border-r border-r-black">
          <p class="text-2xl">4.1<span class="text-sm">/5</span></p>
          <div class="flex flex-col">
            <p class="font-bold">很好</p>
            <p>基於9053評論</p>
          </div>
        </div>
        @for (item of ratingItem; track item.id) {
          <div class="flex flex-col items-center">
            <h4 class="text-base">{{ item.title }}</h4>
            <p class="text-2xl">{{ item.rated }}<span class="text-sm">/10</span></p>
          </div>
        }

        <a class="border border-black rounded-md flex justify-center items-center py-1 px-2">
          閱讀評論
        </a>
      </div>

      <div class="flex flex-col gap-2 md:hidden">
        <div class="flex items-center justify-center gap-2">
          <p class="text-2xl">4.1<span class="text-sm">/5</span></p>
          <div class="flex flex-col">
            <p class="font-bold">很好</p>
            <p>基於9053評論</p>
          </div>
        </div>
        <div class="flex justify-between">
          @for (item of ratingItem; track item.id) {
            <div class="flex flex-col">
              <h4 class="text-base">{{ item.title }}</h4>
              <p class="text-2xl">{{ item.rated }}<span class="text-sm">/10</span></p>
            </div>
          }
        </div>
        <a class="border border-black rounded-md flex justify-center items-center py-1 px-2">
          閱讀評論
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeReason {
  ratingItem: Rating[] = [
    { id: 1, title: 'Booking.com', rated: '8.4' },
    { id: 2, title: 'Expedia', rated: '9.0' },
    { id: 3, title: 'Agoda', rated: '7.9' },
  ];
  reasonItem: ReasonList[] = [
    {
      id: 1,
      title: '絕佳地理位置',
      description: 'Easy access to top attractions & metro stations',
      img: 'fa-solid fa-location-dot fa-3x',
    },
    {
      id: 2,
      title: '精彩會員計劃',
      description: '讓您的住宿更加愉悅與舒適',
      img: 'fa-solid fa-gift fa-3x',
    },
    {
      id: 3,
      title: '極致舒適',
      description: '現代時尚客房，打造放鬆氛圍',
      img: 'fa-solid fa-bed fa-3x',
    },
    {
      id: 4,
      title: '免費 Wi-Fi',
      description: '無縫連接，輕鬆掌握資訊',
      img: 'fa-solid fa-wifi fa-3x',
    },
    {
      id: 5,
      title: '館內餐廳',
      description: '盡享精選在地與國際美饌',
      img: 'fa-solid fa-utensils fa-3x',
    },
    {
      id: 6,
      title: '24小時接待櫃台',
      description: '隨時滿足您的需求',
      img: 'fa-solid fa-hand-holding-heart fa-3x',
    },
    {
      id: 7,
      title: '會議活動空間',
      description: '商務聚會與慶典的完美選擇',
      img: 'fa-solid fa-wine-glass fa-3x',
    },
    {
      id: 8,
      title: '支持永續旅行',
      description: '落實環保理念，打造永續住宿體驗',
      img: 'fa-solid fa-leaf fa-3x',
    },
    {
      id: 9,
      title: '賓客免費停車',
      description: '先到先停，方便您的行程',
      img: 'fa-solid fa-square-parking fa-3x',
    },
    {
      id: 10,
      title: '穆斯林友善旅宿',
      description: '符合MFT和MFR標準',
      img: 'fa-solid fa-star-and-crescent fa-3x',
    },
  ];
}
