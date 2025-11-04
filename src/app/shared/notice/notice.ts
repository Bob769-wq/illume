import { Component } from '@angular/core';
interface NoticeList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-notice',
  imports: [],
  template: `
    <h2 class="text-4xl font-bold px-6 py-2.5">入住須知</h2>
    <ul class="text-base list-disc px-14 pt-3 pb-12">
      @for (item of noticeItem; track item.id) {
        <li>{{ item.title }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class Notice {
  noticeItem: NoticeList[] = [
    { id: 1, title: '依政府菸害防制法第15條規範，酒店與客房內全面禁菸。' },
    {
      id: 2,
      title:
        '若發生違規情形，依據菸害防制法第40條規定，可處以NT$2,000至NT$10,000罰鍰。此外，酒店將對額外的除臭服務收取NT$3,000的清潔費。',
    },
    {
      id: 3,
      title:
        '感謝您遵守我們的政策，這不僅確保了所有客人的舒適體驗，也有助於維持一個健康、無菸的環境。感謝您的關注和合作。',
    },
    {
      id: 4,
      title:
        '為確保賓客安全並配合我國法規，電子煙與加熱菸於臺灣全面禁止輸入及使用。違規者最高可處新臺幣 500 萬元罰鍰，敬請留意並遵守相關規定。',
    },
  ];
}
