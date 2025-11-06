import { Component } from '@angular/core';
interface ServiceList {
  id: number;
  title: string;
  children?: ServiceList[];
}
@Component({
  selector: 'app-home-service',
  imports: [],
  template: `<h2 class="text-4xl font-bold text-center my-12">酒店資訊 ＆ 貴賓服務</h2>
    <div class="grid gap-3 media-screen-800:gap-0 media-screen-800:grid-cols-3 lg:grid-cols-5 py-8">
      @for (item of serviceItem; track item.id) {
        <div class="flex flex-col">
          <h3 class="text-4xl font-bold">{{ item.title }}</h3>
          <ul class="list-disc ml-12">
            @for (child of item.children; track child.id) {
              <li class="text-base">{{ child.title }}</li>
            }
          </ul>
        </div>
      }
    </div> `,
  styles: ``,
})
export class HomeService {
  serviceItem: ServiceList[] = [
    {
      id: 1,
      title: '地址與聯絡方式',
      children: [
        { id: 1, title: '地址：台北市松山區敦化北路100號' },
        { id: 2, title: '電話：+886-2-2719-8399' },
        { id: 3, title: '櫃檯服務：24小時專人服務' },
        { id: 4, title: '入住／退房時間：入住時間16:00｜退房時間11:00' },
      ],
    },
    {
      id: 2,
      title: '貴賓服務與設施',
      children: [
        { id: 1, title: '自動報到櫃檯' },
        { id: 2, title: '禮賓中心服務' },
        { id: 3, title: '哺集乳室' },
        { id: 4, title: '郵件代收寄服務' },
        { id: 5, title: '禮車接送服務（需預約，額外收費）' },
      ],
    },
    {
      id: 3,
      title: '商務＆共享辦公空間',
      children: [
        { id: 1, title: '專業會議室，滿足企業活動需求' },
        { id: 2, title: '24小時共享工作空間（彈性座位與 Wi-Fi）' },
      ],
    },
    {
      id: 4,
      title: '健身＆放鬆空間',
      children: [
        { id: 1, title: '健身房｜桑拿與蒸氣室' },
        { id: 2, title: '戶外游泳池' },
        { id: 3, title: '瑜伽與放鬆空間' },
      ],
    },
    {
      id: 5,
      title: '停車＆周邊娛樂',
      children: [
        { id: 1, title: '免費附設停車位（數量有限，先到先停）' },
        { id: 2, title: '鄰近台北小巨蛋、台北大巨蛋與台北101' },
        { id: 3, title: '周邊購物與娛樂場所林立' },
      ],
    },
  ];
}
