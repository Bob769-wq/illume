import { Component } from '@angular/core';
import { SpecialContent } from '../../special-content/special-content';
interface SpecialList {
  id: number;
  title: string;
  children?: SpecialList[];
}
@Component({
  selector: 'app-nav-special',
  imports: [SpecialContent],
  template: `
    <h2 class="text-4xl font-bold pt-8 pb-6 px-6">客房特色</h2>
    <div class="grid media-screen-800:grid-cols-3 px-6">
      @for (item of specialItem; track item.id; let i = $index) {
        <div class="p-2.5" [class.bg-special-grid]="i % 2 !== 0">
          <app-special-content [label]="item" />
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class NavSpecial {
  specialItem: SpecialList[] = [
    {
      id: 1,
      title: '房型規格',
      children: [
        { id: 1, title: '36-44平方公尺 / 11坪' },
        { id: 2, title: '空調設備' },
        { id: 3, title: '無菸客房' },
        { id: 4, title: '座位區' },
        { id: 5, title: '110V 電源。請依您的需求自備電源轉接頭' },
      ],
    },
    {
      id: 2,
      title: '床型與床具',
      children: [
        { id: 1, title: '最多 3 人入住' },
        { id: 2, title: '1大床＋1小床' },
        { id: 3, title: '此房型恕不提供加床服務' },
        { id: 4, title: '可額外提供一組棉被與枕頭' },
      ],
    },
    {
      id: 3,
      title: '盥洗沐浴',
      children: [
        { id: 1, title: '仙妮蕾德瓶裝沐浴組 (沐浴乳/洗髮乳/潤髮乳)' },
        { id: 2, title: '設有浴缸，乾溼分離' },
        { id: 3, title: '提供吹風機' },
      ],
    },
    {
      id: 4,
      title: '餐飲',
      children: [
        { id: 1, title: '客房餐飲 11:30 - 20:30' },
        { id: 2, title: '客房配有玻璃水壺，公共區域每層樓都設有水飲機' },
        { id: 3, title: 'UCC 咖啡濾掛膠囊與茶包' },
        { id: 4, title: '環境友善冰箱' },
      ],
    },
    {
      id: 5,
      title: '娛樂設備',
      children: [
        { id: 1, title: 'LCD 液晶電視' },
        { id: 2, title: '有線電視/衛星頻道' },
        { id: 3, title: '免費 Wi-Fi' },
      ],
    },
    {
      id: 6,
      title: '兒童備品',
      children: [
        { id: 1, title: '嬰兒床' },
        { id: 2, title: '奶瓶消毒鍋' },
        { id: 3, title: '兒童澡盆' },
        { id: 4, title: '數量有限，敬請提前預約' },
      ],
    },
    {
      id: 7,
      title: '客房設備',
      children: [
        { id: 1, title: '玻璃桌椅' },
        { id: 2, title: '鬧鐘' },
        { id: 3, title: '客房電話' },
        { id: 4, title: '保險箱' },
      ],
    },
    {
      id: 8,
      title: '無障礙設置',
      children: [
        { id: 1, title: '無障礙客房' },
        { id: 2, title: '無障礙衛浴設施' },
      ],
    },
  ];
}
