import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface FooterList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-footer-bg">
      <div class="flex flex-col gap-8 items-center">
        <div class="pt-12">
          <img src="/footer-logo.png" class="h-16" alt="world-hotels" />
        </div>
        <div class="flex gap-6">
          <a class="cursor-pointer hover:text-icon-hover"
            ><i class="fa-brands fa-facebook fa-2xl" style="color: currentColor;"></i
          ></a>
          <a class="cursor-pointer hover:text-icon-hover"
            ><i class="fa-brands fa-instagram fa-2xl" style="color: currentColor;"></i
          ></a>
          <a class="cursor-pointer hover:text-icon-hover"
            ><i class="fa-brands fa-google fa-2xl" style="color: currentColor;"></i
          ></a>
          <a class="cursor-pointer hover:text-icon-hover"
            ><i class="fa-brands fa-linkedin fa-2xl" style="color: currentColor;"></i
          ></a>
          <a class="cursor-pointer hover:text-icon-hover"
            ><i class="fa-brands fa-youtube fa-2xl" style="color: currentColor;"></i
          ></a>
        </div>
        <ul class="flex  flex-col media-screen-800:flex-row gap-2">
          @for (item of footerItem; track item.id) {
            <li class="hover:text-hover-text text-center">
              <a [routerLink]="item.link">{{ item.title }}</a>
            </li>
          }
        </ul>
      </div>
      <div class="flex flex-col gap-1 items-center py-3">
        <p class="text-base text-center">
          Copyright © 2025 SUNRIDER HOTEL TAIWAN LTD. | Powered by ILLUME TAIPEI
        </p>
        <p class="text-sm text-center">
          仙妮蕾德餐旅管理有限公司｜統一編號 28337899｜旅館業登記證：臺北市旅館305-2號
        </p>
      </div>
    </footer>
  `,
  styles: ``,
})
export class Footer {
  footerItem: FooterList[] = [
    { id: 1, title: '無障礙宣告', link: '/footerItem' },
    { id: 2, title: '隱私權政策', link: '/footerItem' },
    { id: 3, title: '網站地圖', link: '/footerItem' },
    { id: 4, title: '性騷擾防治辦法', link: '/footerItem' },
    { id: 5, title: '加入我們', link: '/footerItem' },
  ];
}
