import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface InfoList {
  id: number;
  title: string;
  children: ChildrenList[];
  isExpanded: boolean;
}
interface ChildrenList {
  id: number;
  title: string;
  description: string;
  link: string;
}
@Component({
  selector: 'app-info',
  imports: [RouterLink],
  template: `
    <h2 class="text-4xl font-bold px-6 py-2.5">最新住房優惠</h2>
    <div class="border-x border-t mx-6 my-8">
      <ul>
        @for (item of infoItem; track item.id) {
          <li
            (click)="toggleExpanded(item)"
            class="border-b flex text-base font-bold gap-3 px-4 py-2"
          >
            <span>
              <i class="fa-solid fa-caret-down fa-xs" style="color:currentColor;"></i>
            </span>
            <span>{{ item.title }}</span>
          </li>
          <ul
            class="overflow-hidden transition-all duration-500 ease-in-out"
            [class]="item.isExpanded ? 'max-h-1000' : 'max-h-0'"
          >
            @for (child of item.children; track child.id; let last = $last) {
              <li
                class="text-base px-4 py-2 flex gap-1"
                [class]="last ? 'border-b' : 'border-none'"
              >
                <!--                <a [routerLink]="child.link" class="underline flex-shrink-0">{{ child.title }}</a>-->
                <!--                <span>:</span>-->
                <!--                <span>{{ child.description }}</span>-->
                <div>
                  <a [routerLink]="child.link" class="underline">{{ child.title }}</a>
                  <span>: {{ child.description }}</span>
                </div>
              </li>
            }
          </ul>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class Info {
  toggleExpanded(itemToggled: InfoList) {
    const alreadyExpanded = itemToggled.isExpanded;
    this.infoItem.forEach((item: InfoList) => {
      if (item.id === itemToggled.id) {
        item.isExpanded = !alreadyExpanded;
      } else {
        item.isExpanded = false;
      }
    });
  }
  infoItem: InfoList[] = [
    {
      id: 1,
      title: '休閒旅遊',
      isExpanded: true,
      children: [
        {
          id: 1,
          title: '台北旅遊網',
          link: '/info1',
          description: '台北市官方旅遊資訊網站，提供景點、行程、活動資訊。',
        },
        {
          id: 2,
          title: '台北小巨蛋',
          link: '/info1',
          description: '多功能體育館，可觀賞各類表演和賽事。',
        },
        {
          id: 3,
          title: '台北大巨蛋',
          link: '/info1',
          description: '已正式啟用的大型運動與娛樂場域，舉辦各式賽事與活動。',
        },
        {
          id: 4,
          title: '松山文創園區',
          link: '/info1',
          description: '創意產業聚集地，有展覽、藝文活動與特色店舖。',
        },
        {
          id: 5,
          title: '饒河街觀光夜市',
          link: '/info1',
          description: '知名夜市，品嚐在地小吃與欣賞台灣街頭文化。',
        },
        {
          id: 6,
          title: '國父紀念館',
          link: '/info1',
          description: '紀念國父孫中山的文化地標，有展演與展覽活動。',
        },
        {
          id: 7,
          title: '台北101',
          link: '/info1',
          description: '台北地標摩天大樓，觀景、購物、餐飲的必訪景點。',
        },
      ],
    },
    {
      id: 2,
      title: '交通',
      isExpanded: false,
      children: [
        {
          id: 1,
          title: '台北松山機場',
          link: '/transport',
          description: '一座臨近市中心的國內與國際機場，往返便利。',
        },
        {
          id: 2,
          title: '台北捷運',
          link: '/transport',
          description: '台北市便捷的都會捷運系統，通勤快速。',
        },
        {
          id: 3,
          title: 'YouBike',
          link: '/transport',
          description: '適合短程通勤與城市漫旅的共享單車系統。',
        },
      ],
    },
    {
      id: 3,
      title: '政府資訊',
      isExpanded: false,
      children: [
        {
          id: 1,
          title: '台北市政府',
          link: '/gov',
          description: '提供行政服務和城市資訊的官方網站',
        },
        {
          id: 2,
          title: '交通部觀光署',
          link: '/gov',
          description: '全台觀光資訊與主題旅遊介紹的官方網站',
        },
      ],
    },
  ];
}
