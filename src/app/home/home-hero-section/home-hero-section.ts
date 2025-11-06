import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero-section',
  imports: [],
  template: `
    <div class="mt-24 media-screen-800:mt-36 lg:mt-48">
      <div class="h-[30rem] lg:h-800 relative">
        <img
          src="/home-hero-section.webp"
          class="w-full h-full object-cover"
          alt="home-hero-section"
        />
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <div class="absolute text-white bottom-32 left-24">
          <h2 class="text-4xl font-bold">盡情享受世界風味</h2>
          <p class="mt-6 text-base">
            歡迎蒞臨 Sunny Buffet，一個讓想像成真的美食天堂！ 盡情享受由君品 Collection<br />
            餐飲團隊提供的的歡悅美食之旅，餐廳以玻璃帷幕自然採光與16樓挑高<br />
            設計，結合大片綠色植栽與寬敞用餐空間，驚豔於白天撒落的陽光，徜徉在夜晚星空<br />
            燦爛的浪漫。
          </p>
          <a
            class="inline-block mt-6 px-6 py-2 rounded-md bg-icon-hover text-base text-black font-bold hover:bg-white border border-icon-hover"
            >線上訂位</a
          >
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeHeroSection {}
