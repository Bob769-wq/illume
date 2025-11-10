import { Component } from '@angular/core';
interface StarList {
  id: number;
  img: string;
}
interface UserList {
  id: number;
  name: string;
  date: string;
  description: string;
}
@Component({
  selector: 'app-home-experience',
  imports: [],
  template: `
    <div class="max-w-1200 mx-auto px-2.5">
      <div class="my-12">
        <h2 class="text-4xl font-bold">值得信賴的評價，來自真實的入住體驗</h2>
        <p>
          不只五星，我們更在意您是否感受到安心與貼心。這裡不只是住宿空間，更是專為身心打造的城市綠洲。閱讀真實旅客的感動分享，讓您安心預訂，也安心啟程。
        </p>
      </div>
      <div class="border rounded-2xl px-4 py-2 shadow-md">
        <div class="flex flex-col sm:flex-row sm:justify-between">
          <div class="flex flex-col sm:flex-row sm:items-center gap-2">
            <img src="/experience/google.svg" class="w-20" alt="google" />
            <span class="font-bold text-base">Good</span>
            <div class="flex">
              @for (item of star; track item.id) {
                <img [src]="item.img" class="w-5" alt="star" />
              }
            </div>
            <span class="font-bold text-base">4.1｜7459 reviews</span>
          </div>
          <a
            class="border p-2 border-black rounded-md bg-icon-hover
            cursor-pointer hover:text-white hover:bg-black self-start"
          >
            <span>😀 邀請您撰寫評論</span>
          </a>
        </div>
      </div>
      <div class="grid media-screen-800:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-4">
        @for (item of userItem; track item.id; let i = $index) {
          <div
            class="rounded-xl border shadow-md p-4"
            [class.hidden]="i >= 1"
            [class.media-screen-800:block]="i >= 1 && i < 2"
            [class.lg:block]="i >= 1 && i < 3"
            [class.xl:block]="i >= 1 && i < 4"
          >
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-full bg-icon-hover flex justify-center items-center">
                  {{ item.name }}
                </div>
                <div class="flex flex-col ">
                  <p class="font-bold">{{ item.name }}</p>
                  <p class="text-gray-400">{{ item.date }}</p>
                </div>
              </div>
              <div class="flex mt-2">
                @for (item of star2; track item.id) {
                  <img [src]="item.img" alt="star" class="w-4" />
                }
                <img src="/experience/verify.svg" class="w-4 ml-2" alt="verify" />
              </div>
              <div class="min-h-28 py-2">
                <p class="text-base">{{ item.description }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeExperience {
  star: StarList[] = [
    { id: 1, img: '/experience/star.svg' },
    { id: 2, img: '/experience/star.svg' },
    { id: 3, img: '/experience/star.svg' },
    { id: 4, img: '/experience/star.svg' },
    { id: 5, img: '/experience/star-gray.svg' },
  ];
  star2: StarList[] = [
    { id: 1, img: '/experience/star.svg' },
    { id: 2, img: '/experience/star.svg' },
    { id: 3, img: '/experience/star.svg' },
    { id: 4, img: '/experience/star.svg' },
    { id: 5, img: '/experience/star.svg' },
  ];
  userItem: UserList[] = [
    {
      id: 1,
      name: 'John',
      date: '1 April 2025',
      description: '5樓1號桌喝喜酒，餐點好吃，服務員熱心細心服務好。',
    },
    { id: 2, name: 'Jack', date: '1 May 2025', description: '素卿餐飲服務100分，菜色好吃' },
    { id: 3, name: 'Jones', date: '1 June 2025', description: '素卿服務態度很好👍' },
    { id: 4, name: 'Jay', date: '1 July 2025', description: '素卿讚服務好\n' + '菜色好吃' },
  ];
}
