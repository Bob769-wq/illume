import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-hero',
  imports: [],
  template: `
    <div class="mt-48">
      <div class="px-6 grid lg:grid-cols-2 gap-8 mt-10">
        <div class="h-420">
          <img
            src="/nav-hero-section.webp"
            class="max-h-full object-cover w-full"
            alt="hero-section"
          />
        </div>
        <div class="flex flex-col gap-8">
          <h1 class="text-6xl font-bold py-2">尊爵三人房</h1>
          <p class="text-base leading-7">
            沉浸於現代舒適的全新尊爵三人房，專為三位旅客精心設計。從窗外可欣賞壯麗的城市天際線與台北101美景。
            寬敞的空間、現代化的設施與精緻細節，為您提升住宿體驗。無論是家庭還是小型團體，這間房間完美結合了優雅與放鬆，保證為您帶來難忘的回憶。
            立即預訂，享受令人耳目一新的住宿體驗，每個細節都為提升您的舒適感與愉悅而設計。
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
            <span class="group-hover:hidden">前往訂房</span>
            <span class="group-hover:flex hidden">最優房價保證</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavHero {}
