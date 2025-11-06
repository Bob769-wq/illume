import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  template: `
    <div class="mt-48">
      <div class="px-6 grid lg:grid-cols-2 gap-8 mt-10">
        <div class="h-420">
          <img src="/hero-section.webp" class="max-h-full object-cover w-full" alt="hero-section" />
        </div>
        <div class="flex flex-col gap-8">
          <h1 class="text-6xl font-bold py-2">公寓式套房</h1>
          <p class="text-base leading-7">
            沉浸於優雅與舒適的全新公寓式套房，專為兩人精心設計。公寓式套房擁有寬敞的客廳與設備齊全的小廚房，
            是長期住宿旅客的理想選擇。置身於寧靜的氛圍中，享受現代化設施與精心設計的細節，提升您的住宿體驗。
            不論是商務還是休閒，公寓式套房都是您在旅途中的完美家園。讓您的住宿體驗難以忘懷，離開時倍感煥然一新，靈感滿滿，準備迎接全新挑戰。
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
export class HeroSection {}
