import { Component, input } from '@angular/core';
interface RoomHeroSection {
  id: number;
  title: string;
  img: string;
  description: string;
}
@Component({
  selector: 'app-room-hero-section-content',
  imports: [],
  template: `
    <div class="mt-24 media-screen-800:mt-36 lg:mt-52">
      <div class="px-2 media-screen-800:px-6 grid lg:grid-cols-2 gap-8 mt-10">
        <img
          [src]="item().img"
          class="media-screen-800:aspect-video object-cover h-full w-full"
          alt="hero-section"
        />
        <div class="flex flex-col gap-8">
          <h1 class="text-4xl media-screen-800:text-6xl font-bold py-2">{{ item().title }}</h1>
          <p class="text-base leading-7">
            {{ item().description }}
          </p>
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-2">
                <span><i class="fa-solid fa-clock fa-lg" style="color: #1c2d4a;"></i></span>
                <p class="font-bold text-lg">16:00後辦理住房</p>
              </div>
              <div class="h-6 w-0.5 bg-gray-400"></div>
              <div class="flex items-center gap-2">
                <span><i class="fa-solid fa-clock fa-lg" style="color: #1c2d4a;"></i></span>
                <p class="font-bold text-lg">11:00前辦理退房</p>
              </div>
            </div>
            <div class="flex items-center gap-2 text-leaf-color">
              <span>
                <i class="fa-solid fa-leaf fa-lg" style="color:currentColor;"></i>
              </span>
              <p class="text-base">
                為響應國際推動永續發展、綠色環保，恕不提供牙膏、牙刷等一次性備品。
              </p>
            </div>
          </div>
          <a
            class="flex py-2.5 px-8 gap-4 rounded-md text-xl bg-button-bg hover:bg-button-hover self-start mt-4 cursor-pointer group"
          >
            <span class="group-hover:hidden">
              <i class="fa-solid fa-calendar-check fa-lg" style="color: #1d2f4e;"></i>
            </span>
            <span class="group-hover:hidden">聯絡我們</span>
            <span class="group-hover:flex hidden">最優房價保證</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class RoomHeroSectionContent {
  item = input.required<RoomHeroSection>();
}
