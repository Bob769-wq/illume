import { Component } from '@angular/core';

@Component({
  selector: 'app-pic',
  imports: [],
  template: `
    <h2 class="text-4xl font-bold px-6 py-2.5">客房照片</h2>
    <div class="grid  media-screen-800:grid-cols-2 gap-4 px-6 py-8">
      <div class="cursor-pointer">
        <img src="/pic1.webp" alt="pic1" class="overflow-hidden rounded-xl" />
        <p class="text-center text-base py-1">中庭光照</p>
      </div>
      <div class="overflow-hidden rounded-xl cursor-pointer">
        <img src="/pic2.webp" alt="pic2" />
        <p class="text-center text-base py-1">公寓式套房｜客廳</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class Pic {}
