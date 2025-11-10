import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface ConferenceList {
  id: number;
  title: string;
  link: string;
  img: string;
}
@Component({
  selector: 'app-menu06-conference',
  imports: [RouterLink],
  template: `
    <div class="grid grid-cols-4 gap-6">
      @for (item of conferenceItem; track item.id) {
        <div class="flex flex-col group">
          <a [routerLink]="item.link" class="group-hover:opacity-80"
            ><img [src]="item.img" class="rounded-md" [alt]="item.title"
          /></a>
          <h4 class="text-center text-lg py-2 hover:text-hover-text cursor-pointer">
            {{ item.title }}
          </h4>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class Menu06Conference {
  conferenceItem: ConferenceList[] = [
    { id: 1, title: '「神助攻！超頂6選1」婚宴專案', link: '/menu06/1', img: '/menu06/01.webp' },
    { id: 2, title: '茹曦婚禮', link: '/menu06/2', img: '/menu06/02.webp' },
    { id: 3, title: '瀏覽全部宴會空間', link: '/menu06/3', img: '/menu06/03.webp' },
    { id: 4, title: '活動需求表單', link: '/menu06/4', img: '/menu06/04.webp' },
  ];
}
