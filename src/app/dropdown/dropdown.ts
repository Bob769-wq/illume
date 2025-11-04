import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  imports: [RouterLink],
  template: `
    @if (activeDropdown() !== null) {
      <div
        class="absolute top-full left-0 right-0 bg-white shadow-md"
        (mouseenter)="showDropdown(activeDropdown()!)"
        (mouseleave)="hideDropdown()"
      >
        <div class="w-full">
          @switch (activeDropdown()) {
            @case ('探索台北') {
              <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                <div class="flex gap-8 px-2">
                  <div class="w-1/3">
                    <h4 class="font-bold text-xl">熱門推薦</h4>
                    <a class="cursor-pointer inline-block mt-6"
                      ><img src="/menu01/left01.webp" alt="left"
                    /></a>
                  </div>
                  <div class="w-2/3">
                    <div class="grid grid-cols-3 gap-2">
                      <a class="cursor-pointer"><img src="/menu01/right01.webp" alt="right" /></a>
                      <a class="cursor-pointer"><img src="/menu01/right02.webp" alt="right" /></a>
                      <a class="cursor-pointer"><img src="/menu01/right03.jpg" alt="right" /></a>
                      <a class="cursor-pointer"><img src="/menu01/right04.webp" alt="right" /></a>
                      <a class="cursor-pointer"><img src="/menu01/right05.webp" alt="right" /></a>
                      <a class="cursor-pointer"><img src="/menu01/right06.webp" alt="right" /></a>
                    </div>
                    <a routerLink="/more" class="flex items-center gap-2 justify-end py-2">
                      <span>
                        <i class="fa-solid fa-book fa-2xl" style="color: currentColor;"></i>
                      </span>
                      <h4 class="text-xl">查看所有旅遊指南</h4>
                    </a>
                  </div>
                </div>
              </div>
            }
            @case ('優惠專案') {
              <div class="py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                <div class="grid grid-cols-3 px-6">
                  <div class="flex flex-col gap-6 pr-6">
                    <h4 class="font-bold text-xl">住宿優惠</h4>
                    <div class="grid grid-cols-2 gap-2">
                      <a><img src="/menu02/1-1.webp" alt="menu02" /></a>
                      <a><img src="/menu02/1-2.jpg" alt="menu02" /></a>
                      <a><img src="/menu02/1-3.webp" alt="menu02" /></a>
                      <a><img src="/menu02/1-4.webp" alt="menu02" /></a>
                    </div>
                  </div>
                  <div class="flex flex-col gap-6 border-x px-2 h-full">
                    <h4 class="font-bold text-xl">餐飲優惠</h4>
                    <div class="grid grid-cols-2 gap-2">
                      <a><img src="/menu02/2-1.jpg" alt="menu02" /></a>
                      <a><img src="/menu02/2-2.webp" alt="menu02" /></a>
                      <a><img src="/menu02/2-3.webp" alt="menu02" /></a>
                      <a><img src="/menu02/2-4.webp" alt="menu02" /></a>
                    </div>
                  </div>
                  <div class="flex flex-col gap-6 pl-6">
                    <h4 class="font-bold text-xl">宴會專案</h4>
                    <div class="grid grid-cols-2 gap-2">
                      <a><img src="/menu02/3-1.webp" alt="menu02" /></a>
                      <a><img src="/menu02/3-2.webp" alt="menu02" /></a>
                      <a><img src="/menu02/3-3.webp" alt="menu02" /></a>
                    </div>
                    <a routerLink="/more" class="flex items-center gap-2 justify-end py-2">
                      <span>
                        <i class="fa-solid fa-book fa-2xl" style="color:currentColor;"></i>
                      </span>
                      <h4 class="text-xl">探索所有專屬優惠</h4>
                    </a>
                  </div>
                </div>
              </div>
            }
            @case ('酒店公告') {
              <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                <div class="grid grid-cols-4 gap-2 w-4/5 mx-auto">
                  <a><img src="/menu03/01.webp" alt="menu3" /></a>
                  <a><img src="/menu03/02.webp" alt="menu3" /></a>
                  <a><img src="/menu03/03.webp" alt="menu3" /></a>
                  <a><img src="/menu03/04.webp" alt="menu3" /></a>
                  <a><img src="/menu03/05.webp" alt="menu3" /></a>
                  <a><img src="/menu03/06.webp" alt="menu3" /></a>
                </div>
                <a
                  routerLink="/more"
                  class="flex items-center gap-2 justify-end py-2 w-4/5 mx-auto"
                >
                  <span>
                    <i class="fa-solid fa-book fa-2xl" style="color:currentColor;"></i>
                  </span>
                  <h4 class="text-xl">探索所有專屬優惠</h4>
                </a>
              </div>
            }
            @case ('客房與套房') {
              <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                <div class="grid grid-cols-4 gap-2 w-4/5 mx-auto">
                  <div class="flex flex-col">
                    <a><img src="/menu04/01.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl text-center">尊爵客房</h4>
                  </div>
                  <div class="flex flex-col">
                    <a><img src="/menu04/02.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl text-center">尊爵三人房</h4>
                  </div>
                  <div class="flex flex-col">
                    <a><img src="/menu04/03.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl text-center">尊爵家庭房</h4>
                  </div>
                  <div class="flex flex-col">
                    <a><img src="/menu04/04.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl text-center">尊爵套房</h4>
                  </div>
                  <div class="flex flex-col">
                    <a><img src="/menu04/05.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl text-center">公寓式套房</h4>
                  </div>
                  <div class="flex flex-col">
                    <a><img src="/menu04/06.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl text-center">行政套房</h4>
                  </div>
                  <div class="flex flex-col">
                    <a><img src="/menu04/07.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl">標準客房（2017年裝修）</h4>
                  </div>
                  <div class="flex flex-col">
                    <a><img src="/menu04/08.webp" class="rounded-md" alt="menu04" /></a>
                    <h4 class="text-xl text-center">尊爵套房</h4>
                  </div>
                </div>
                <a
                  routerLink="/more"
                  class="flex items-center justify-center gap-2 py-2 w-4/5 mx-auto"
                >
                  <span>
                    <i class="fa-solid fa-book fa-2xl" style="color:currentColor;"></i>
                  </span>
                  <h4 class="text-xl">探索所有專屬優惠</h4>
                </a>
              </div>
            }
            @case ('餐飲饗宴') {
              <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480 flex items-center">
                <div class="w-4/5 mx-auto">
                  <div class="flex gap-8">
                    <div class="w-2/5">
                      <h4 class="text-xl">館內餐廳</h4>
                      <a class="inline-block mt-4">
                        <img src="/menu05/01.webp" class="rounded-md" alt="menu05" />
                      </a>
                    </div>
                    <div class="w-3/5 flex flex-col">
                      <h4 class="text-xl">館內獨立經營餐廳</h4>
                      <div class="flex gap-4 mt-4">
                        <a>
                          <img src="/menu05/02.webp" class="rounded-md" alt="menu05" />
                        </a>
                        <a>
                          <img src="/menu05/03.webp" class="rounded-md" alt="menu05" />
                        </a>
                      </div>
                      <a routerLink="/more" class="flex items-center gap-2 justify-end py-2 mt-12">
                        <span>
                          <i class="fa-solid fa-book fa-2xl" style="color:currentColor;"></i>
                        </span>
                        <h4 class="text-xl">探索所有專屬優惠</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
            @case ('會議與活動') {
              <div
                class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480 flex items-center gap-6"
              >
                <div class="flex flex-col">
                  <a><img src="/menu06/01.webp" class="rounded-md" alt="menu06" /></a>
                  <h4 class="text-center text-lg py-2">「神助攻！超頂6選1」婚宴專案</h4>
                </div>
                <div class="flex flex-col">
                  <a><img src="/menu06/02.webp" class="rounded-md" alt="menu06" /></a>
                  <h4 class="text-center text-lg py-2">茹曦婚禮</h4>
                </div>
                <div class="flex flex-col">
                  <a><img src="/menu06/03.webp" class="rounded-md" alt="menu06" /></a>
                  <h4 class="text-center text-lg py-2">瀏覽全部宴會空間</h4>
                </div>
                <div class="flex flex-col">
                  <a><img src="/menu06/04.webp" class="rounded-md" alt="menu06" /></a>
                  <h4 class="text-center text-lg py-2">活動需求表單</h4>
                </div>
              </div>
            }
            @case ('設施與服務') {
              <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480 flex items-center">
                <div class="grid grid-cols-[4fr_1.2fr] w-3/4 mx-auto items-center gap-6">
                  <div class="grid grid-cols-4 gap-4">
                    <a><img src="/menu07/01.webp" alt="menu07" /></a>
                    <a><img src="/menu07/02.webp" alt="menu07" /></a>
                    <a><img src="/menu07/03.webp" alt="menu07" /></a>
                    <a><img src="/menu07/04.webp" alt="menu07" /></a>
                    <a><img src="/menu07/05.webp" alt="menu07" /></a>
                    <a><img src="/menu07/06.webp" alt="menu07" /></a>
                    <a><img src="/menu07/07.webp" alt="menu07" /></a>
                    <a><img src="/menu07/08.webp" alt="menu07" /></a>
                  </div>

                  <div class="flex flex-col shadow-md">
                    <img src="/menu07/09.webp" class="" alt="menu07" />
                    <div class="flex flex-col items-center justify-center px-5 py-8 min-h-40">
                      <span><i class="fa-solid fa-bell fa-2xl" style="color: #1f3251;"></i></span>
                      <h4 class="font-bold text-xl">瀏覽全部設施</h4>
                    </div>
                  </div>
                </div>
              </div>
            }
            @case ('關於茹曦') {
              <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                <div class="flex justify-center gap-4 py-4">
                  <a><img src="/menu08/01.webp" class="w-[600px] object-cover" alt="menu08" /></a>
                  <ul>
                    <li class="text-xl border-b py-5">我們的故事</li>
                    <li class="text-xl border-b py-5">聯絡我們</li>
                    <li class="text-xl border-b py-5">常見問題</li>
                    <li class="text-xl border-b py-5">茹曦光影集</li>
                    <li class="text-xl border-b py-5">加入我們</li>
                    <li class="text-xl py-5">隱私權政策</li>
                  </ul>
                </div>
              </div>
            }
          }
        </div>
      </div>
    }
  `,
  styles: ``,
})
export class Dropdown {
  closeTimeout: any = null;
  activeDropdown = signal<string | null>(null);
  showDropdown(itemName: string) {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.activeDropdown.set(itemName);
  }
  hideDropdown() {
    this.closeTimeout = setTimeout(() => {
      this.activeDropdown.set(null);
    }, 200);
  }
}
