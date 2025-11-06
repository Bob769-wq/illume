import { Component } from '@angular/core';
interface TransportationList {
  id: number;
  title: string;
  isExpanded?: boolean;
  children?: TransportationList[];
}
@Component({
  selector: 'app-home-transportation',
  imports: [],
  template: `
    <div class="max-w-[60rem] mx-auto">
      <div class="flex flex-col ">
        <div class="px-2.5">
          <div class="py-12">
            <h2 class="text-4xl font-bold">交通便利 - 輕鬆抵達</h2>
            <p>
              茹曦酒店擁有便捷的公共交通網絡，讓您的旅程順暢無憂。無論您選擇哪種交通方式，都能輕鬆快速抵達茹曦酒店！
            </p>
          </div>
        </div>
        <ul class="flex flex-col gap-3">
          @for (item of transItem; track item.id) {
            <li class="border flex flex-col  p-4 rounded-md" (click)="toggleExpanded(item)">
              <div class="flex gap-2">
                <span>
                  <i class="fa-solid fa-circle-plus fa-xl"></i>
                </span>
                <span>{{ item.title }}</span>
              </div>
              <ul
                class=" list-disc px-8 overflow-hidden transition-all duration-500"
                [class]="item.isExpanded ? 'max-h-96 py-8' : 'max-h-0'"
              >
                @for (child of item.children; track child.id) {
                  <li>
                    {{ child.title }}
                  </li>
                }
              </ul>
            </li>
          }
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1807.2262041070546!2d121.548262!3d25.052651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab944165274d%3A0xc7af209800fa674c!2z6Iy55pum6YWS5bqXIElMTFVNRSBUQUlQRUk!5e0!3m2!1szh-TW!2sus!4v1762339553928!5m2!1szh-TW!2sus"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeTransportation {
  transItem: TransportationList[] = [
    {
      id: 1,
      title: '捷運（MRT）',
      isExpanded: true,
      children: [
        { id: 1, title: '台北小巨蛋站 (G17) – 就在對面！' },
        { id: 2, title: '南京復興站 (G16/BR11) – 步行 7 分鐘即達' },
      ],
    },
    {
      id: 2,
      title: '附近的公車站點',
      isExpanded: false,
      children: [{ id: 1, title: '南京敦化路口 (台北小巨蛋)：下車後步行3分鐘即可抵達' }],
    },
    {
      id: 3,
      title: '從桃園機場出發',
      isExpanded: false,
      children: [
        { id: 1, title: '搭乘機場捷運至台北車站（約 35 分鐘），再轉乘捷運。' },
        { id: 2, title: '酒店禮賓車服務 – 搭乘賓士 S-Class 優雅抵達（約 40–50 分鐘）。' },
      ],
    },
  ];
  toggleExpanded(item: TransportationList) {
    item.isExpanded = !item.isExpanded;
  }
}
