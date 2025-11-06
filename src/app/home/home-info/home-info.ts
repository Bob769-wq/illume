import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  imports: [],
  template: `
    <div class="media-screen-800:w-2/3 mx-auto px-6 mt-6 text-lg">
      <p>Hotel Address: No 100 Dun Hua N Rd, Songshan District, Taipei, Taiwan</p>
      <p>飯店地址：台北市松山區敦化北路 100 號</p>
    </div>
    <div class="media-screen-800:w-2/3 mx-auto px-6 mt-4">
      <h1 class="font-bold text-3xl media-screen-800:text-5xl media-screen-800:leading-[3.5rem]">
        茹曦酒店 ILLUME TAIPEI –<br />
        您的台北理想住宿！
      </h1>
      <p class="mt-4 text-base">
        想在台北開啟精彩旅程？茹曦酒店 ILLUME TAIPEI
        位於市中心，無論您是商務出差、休閒度假，或是來場難忘的都市探索，我們都能提供現代舒適的客房、一流的設施與無與倫比的便捷體驗。
      </p>
    </div>
  `,
  styles: ``,
})
export class HomeInfo {}
