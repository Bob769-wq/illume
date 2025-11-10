import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface About {
  id: number;
  title: string;
  link: string;
  img: string;
}
@Component({
  selector: 'app-menu08',
  imports: [RouterLink],
  template: `
    <div class="flex justify-center items-center gap-4 py-4">
      <a><img src="/menu08/01.webp" class="w-[37.5rem] object-cover" alt="menu08" /></a>
      <ul>
        @for (item of menuSub8; track item.id) {
          <li class="text-xl border-b py-5 hover:text-hover-text">
            <a [routerLink]="item.link" class="flex items-center gap-3">
              <span><i [class]="item.img" style="color: currentColor;"></i></span>
              <span>{{ item.title }}</span>
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class Menu08 {
  menuSub8: About[] = [
    { id: 1, title: '我們的故事', link: '/menu08', img: 'fa-solid fa-sun fa-xl' },
    { id: 2, title: '聯絡我們', link: '/menu08', img: 'fa-solid fa-envelope fa-xl' },
    { id: 3, title: '常見問題', link: '/menu08', img: 'fa-solid fa-circle-question fa-xl' },
    { id: 4, title: '茹曦光影集', link: '/menu08', img: 'fa-solid fa-camera fa-xl' },
    { id: 5, title: '加入我們', link: '/menu08', img: 'fa-solid fa-handshake fa-xl' },
    { id: 6, title: '隱私權政策', link: '/menu08', img: 'fa-solid fa-lock fa-xl' },
  ];
}
