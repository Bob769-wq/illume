import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
interface NavItem {
  id: number;
  title: string;
  link: string;
  img?: string;
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, RouterLinkActive],
  template: `
    <header class="shadow-md bg-white fixed top-0 left-0 right-0 z-40">
      <div class="px-2.5 bg-upper-bg hidden lg:block">
        <div class="max-w-[95%] mx-auto flex items-center justify-between">
          <div class="flex items-center gap-8 py-2.5 leading-7">
            <a class="flex items-center gap-2">
              <span><i class="fa-solid fa-phone-volume" style="color: #1f2f4d;"></i></span>
              <span class="text-base">+886 2-2719-8399</span>
            </a>
            <a class="flex items-center gap-2">
              <span><i class="fa-solid fa-envelope" style="color: #1f2f4d;"></i></span>
              <span class="text-base">gsm@theillumehotel.com</span>
            </a>
            <a class="flex items-center gap-2">
              <span><i class="fa-solid fa-location-dot" style="color: #1f2f4d;"></i></span>
              <span class="text-base">105020 台北市松山區敦化北路 100 號</span>
            </a>
            <a class="flex items-center gap-2">
              <span><i class="fa-solid fa-circle-question" style="color: #1f2f4d;"></i></span>
              <span class="text-base">聯絡我們</span>
            </a>
          </div>
          <div class="flex items-center gap-6">
            <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-facebook-f fa-2xl" style="color: currentColor;"></i></a>
            <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-instagram fa-2xl" style="color: currentColor;"></i></a>
            <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-linkedin-in fa-2xl" style="color: currentColor;"></i></a>
            <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-youtube fa-2xl" style="color: currentColor;"></i></a>
          </div>
        </div>
      </div>
      <div class="px-3 py-2 flex items-center justify-between">
        <a routerLink="/">
            <img src="/logo.png" alt="logo" class="media-screen-800:h-28 media-screen-800:w-36 w-24 h-16  object-contain">
        </a>
        <div class="lg:hidden">
          <i class="fa-solid fa-bars fa-2xl"
             (click)="toggleMenu()"
             style="color: currentColor;"></i>
        </div>
        <div class="lg:flex flex-col gap-1 hidden">
          <div class="flex justify-end gap-4 p-2.5">
              <button [matMenuTriggerFor]="menu">繁體中文</button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item>English</button>
                <button mat-menu-item>日本語</button>
              </mat-menu>
            <a routerLink="/room"
              class="flex items-center gap-2 py-1 px-5 bg-button-bg rounded-md shadow-xl hover:scale-110 transition-all duration-500">
              <span><i class="fa-solid fa-calendar" style="color: currentColor;"></i></span>
              <span class="font-bold text-base">前往訂房</span>
            </a>
            <a routerLink="/room"
              class="flex items-center gap-2 py-1 px-5 bg-button-bg rounded-md shadow-xl hover:scale-110 transition-all duration-500">
              <span><i class="fa-solid fa-calendar" style="color: currentColor;"></i></span>
              <span class="font-bold text-base">預約用餐</span>
            </a>
          </div>
              <ul class="flex">
                @for (item of navItem; track item.id) {
                  <li class="text-base font-medium group relative"
                  (mouseenter)="showDropdown(item.title)" (mouseleave)="hideDropdown()"
                  >
                    <a [routerLink]="item.link" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="text-icon-hover font-bold" class="px-4 py-2 flex items-center gap-2">
                      <span>{{item.title}}</span>
                      <span><i class="fa-solid fa-caret-down fa-xs" style="color: #1f3151;"></i></span>
                    </a>
                    <div class="absolute top-full h-1 w-full hidden bg-upper-bg group-hover:block"></div>
                  </li>
                }
              </ul>
        </div>
      </div>

      @if (activeDropdown()!==null) {
        <div class="absolute top-full left-0 right-0 bg-white shadow-md"
        (mouseenter)="showDropdown(activeDropdown()!)" (mouseleave)="hideDropdown()">
          <div class="w-full">
            @switch (activeDropdown()){
              @case ('探索台北'){
                <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                  <div class="flex gap-8 px-2">
                    <div class="w-1/3">
                      <h4 class="font-bold text-xl">熱門推薦</h4>
                      <a class="cursor-pointer inline-block mt-6"><img src="/menu01/left01.webp" alt="left"></a>
                    </div>
                    <div class="w-2/3">
                      <div class="grid grid-cols-3 gap-2">
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu01/right01.webp" alt="right" /></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu01/right02.webp" alt="right" /></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu01/right03.jpg" alt="right" /></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu01/right04.webp" alt="right" /></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu01/right05.webp" alt="right" /></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu01/right06.webp" alt="right" /></a>
                      </div>
                      <a routerLink="/more" class="flex items-center gap-2 justify-end pt-6 hover:text-hover-text">
                        <span>
                        <i class="fa-solid fa-book fa-2xl" style="color: currentColor;"></i>
                        </span>
                        <h4 class="text-xl">查看所有旅遊指南</h4>
                      </a>
                    </div>
                  </div>

                </div>
              }
              @case ('優惠專案'){
                <div class="py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                  <div class="grid grid-cols-3 px-6">
                    <div class="flex flex-col gap-6 pr-6">
                      <h4 class="font-bold text-xl">住宿優惠</h4>
                      <div class="grid grid-cols-2 gap-2">
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/1-1.webp" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/1-2.jpg" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/1-3.webp" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/1-4.webp" alt="menu02"></a>
                      </div>
                    </div>
                    <div class="flex flex-col gap-6 border-x px-2 h-full">
                      <h4 class="font-bold text-xl">餐飲優惠</h4>
                      <div class="grid grid-cols-2 gap-2">
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/2-1.jpg" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/2-2.webp" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/2-3.webp" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/2-4.webp" alt="menu02"></a>
                      </div>
                    </div>
                    <div class="flex flex-col gap-6 pl-6">
                      <h4 class="font-bold text-xl">宴會專案</h4>
                      <div class="grid grid-cols-2 gap-2">
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/3-1.webp" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/3-2.webp" alt="menu02"></a>
                        <a class="cursor-pointer hover:opacity-80"><img src="/menu02/3-3.webp" alt="menu02"></a>
                      </div>
                      <a routerLink="/more" class="flex items-center gap-2 justify-end pt-6 hover:text-hover-text">
                        <span>
                        <i class="fa-solid fa-gift fa-2xl" style="color:currentColor;"></i>
                        </span>
                        <h4 class="text-xl">探索所有專屬優惠</h4>
                      </a>
                    </div>
                  </div>
                </div>
              }
              @case ('酒店公告'){
                 <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                   <div class="grid grid-cols-4 gap-2 w-4/5 mx-auto">
                     <a class="cursor-pointer hover:opacity-80"><img src="/menu03/01.webp" alt="menu3"></a>
                     <a class="cursor-pointer hover:opacity-80"><img src="/menu03/02.webp" alt="menu3"></a>
                     <a class="cursor-pointer hover:opacity-80"><img src="/menu03/03.webp" alt="menu3"></a>
                     <a class="cursor-pointer hover:opacity-80"><img src="/menu03/04.webp" alt="menu3"></a>
                     <a class="cursor-pointer hover:opacity-80"><img src="/menu03/05.webp" alt="menu3"></a>
                     <a class="cursor-pointer hover:opacity-80"><img src="/menu03/06.webp" alt="menu3"></a>
                   </div>
                   <a routerLink="/more" class="flex items-center gap-2 justify-end pt-6 w-4/5 mx-auto hover:text-hover-text">
                        <span>
                        <i class="fa-solid fa-book fa-2xl" style="color:currentColor;"></i>
                        </span>
                     <h4 class="text-xl">瀏覽全部最新公告</h4>
                   </a>
                </div>
              }
              @case ('客房與套房'){
                 <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                   <div class="grid grid-cols-4 gap-2 w-4/5 mx-auto">
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/01.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl text-center hover:text-hover-text">尊爵客房</h4>
                     </div>
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/02.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl text-center hover:text-hover-text">尊爵三人房</h4>
                     </div>
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/03.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl text-center hover:text-hover-text">尊爵家庭房</h4>
                     </div>
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/04.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl text-center hover:text-hover-text">尊爵套房</h4>
                     </div>
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/05.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl text-center hover:text-hover-text">公寓式套房</h4>
                     </div>
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/06.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl text-center hover:text-hover-text">行政套房</h4>
                     </div>
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/07.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl hover:text-hover-text">標準客房（2017年裝修）</h4>
                     </div>
                     <div class="flex flex-col cursor-pointer group"><a class="group-hover:opacity-80"><img src="/menu04/08.webp" class="rounded-md" alt="menu04" /></a>
                     <h4 class="text-xl text-center hover:text-hover-text">尊爵套房</h4>
                     </div>
                   </div>
                   <a routerLink="/more" class="flex items-center justify-center gap-2 pt-6 w-4/5 mx-auto hover:text-hover-text">
                        <span>
                        <i class="fa-solid fa-bed fa-2xl" style="color:currentColor;"></i>
                        </span>
                     <h4 class="text-xl">查看所有客房</h4>
                   </a>
                </div>
              }
              @case ('餐飲饗宴'){
                 <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480 flex items-center">
                    <div class="w-4/5 mx-auto">
                      <div class="flex gap-8">
                        <div class="w-2/5">
                        <h4 class="text-xl">館內餐廳</h4>
                        <a class="inline-block mt-4 cursor-pointer relative group">
                          <img src="/menu05/01.webp" class="rounded-md" alt="menu05"/>
                          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 flex justify-center">
                          </div>
                          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                            <h4 class="text-xl text-white">Sunny Buffet 自助餐廳</h4>
                          </div>
                        </a>
                        </div>
                        <div class="w-3/5 flex flex-col">
                          <h4 class="text-xl">館內獨立經營餐廳</h4>
                          <div class="flex gap-4 mt-4">
                            <a class="cursor-pointer relative group">
                             <img src="/menu05/02.webp" class="rounded-md" alt="menu05">
                              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 flex justify-center">
                              </div>
                              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                              <h4 class="text-xl text-white">Opera 雞尾酒吧</h4>
                              </div>
                            </a>
                            <a class="cursor-pointer relative group">
                              <img src="/menu05/03.webp" class="rounded-md" alt="menu05">
                              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 flex justify-center">
                              </div>
                              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                              <h4 class="text-xl text-white">八和和牛燒肉專賣店</h4>
                              </div>
                            </a>
                          </div>
                          <a routerLink="/more" class="flex items-center gap-2 justify-end py-2 mt-12 hover:text-hover-text">
                            <span>
                              <i class="fa-solid fa-utensils fa-2xl" style="color:currentColor;"></i>
                             </span>
                            <h4 class="text-xl">查看所有餐廳</h4>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              }
              @case ('會議與活動'){
                 <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480 flex items-center gap-6">
                     <div class="flex flex-col group">
                       <a class="cursor-pointer group-hover:opacity-80"><img src="/menu06/01.webp" class="rounded-md" alt="menu06"></a>
                     <h4 class="text-center text-lg py-2 hover:text-hover-text cursor-pointer">「神助攻！超頂6選1」婚宴專案</h4>
                     </div>
                     <div class="flex flex-col group">
                       <a class="cursor-pointer group-hover:opacity-80"><img src="/menu06/02.webp" class="rounded-md" alt="menu06"></a>
                     <h4 class="text-center text-lg py-2 hover:text-hover-text cursor-pointer">茹曦婚禮</h4>
                     </div>
                     <div class="flex flex-col group">
                       <a class="cursor-pointer group-hover:opacity-80"><img src="/menu06/03.webp" class="rounded-md" alt="menu06"></a>
                     <h4 class="text-center text-lg py-2 hover:text-hover-text cursor-pointer">瀏覽全部宴會空間</h4>
                     </div>
                     <div class="flex flex-col group">
                       <a class="cursor-pointer group-hover:opacity-80"><img src="/menu06/04.webp" class="rounded-md" alt="menu06"></a>
                     <h4 class="text-center text-lg py-2 hover:text-hover-text cursor-pointer">活動需求表單</h4>
                     </div>
                   </div>
              }
              @case ('設施與服務'){
                 <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480 flex items-center">
                   <div class="grid grid-cols-[4fr_1.2fr] w-3/4 mx-auto items-center gap-6">
                     <div class="grid grid-cols-4 gap-4">
                       <a><img src="/menu07/01.webp" alt="menu07"/></a>
                       <a><img src="/menu07/02.webp" alt="menu07"/></a>
                       <a><img src="/menu07/03.webp" alt="menu07"/></a>
                       <a><img src="/menu07/04.webp" alt="menu07"/></a>
                       <a><img src="/menu07/05.webp" alt="menu07"/></a>
                       <a><img src="/menu07/06.webp" alt="menu07"/></a>
                       <a><img src="/menu07/07.webp" alt="menu07"/></a>
                       <a><img src="/menu07/08.webp" alt="menu07"/></a>
                     </div>

                       <div class="flex flex-col cursor-pointer shadow-md group overflow-hidden">
                         <img src="/menu07/09.webp" class="group-hover:scale-105 transition-all duration-500" alt="menu07"/>
                         <div class="flex flex-col gap-3 items-center justify-center px-5 py-8 min-h-40">
                         <span><i class="fa-solid fa-bell fa-2xl" style="color: #1f3251;"></i></span>
                         <h4 class="font-bold text-xl">瀏覽全部設施</h4>
                         </div>
                       </div>
                   </div>
                </div>
              }
              @case ('關於茹曦'){
                 <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480">
                   <div class="flex justify-center gap-4 py-4">
                     <a><img src="/menu08/01.webp" class="w-[37.5rem] object-cover" alt="menu08"/></a>
                     <ul>
                       <li class="text-xl border-b py-5 flex items-center gap-3 hover:text-hover-text cursor-pointer">
                         <span><i class="fa-solid fa-sun fa-xl" style="color: currentColor;"></i></span>
                         <span>我們的故事</span>
                       </li>
                       <li class="text-xl border-b py-5 flex items-center gap-3 hover:text-hover-text cursor-pointer">
                         <span><i class="fa-solid fa-envelope fa-xl" style="color: currentColor;"></i></span>
                         <span>聯絡我們</span>
                       </li>
                       <li class="text-xl border-b py-5 flex items-center gap-3 hover:text-hover-text cursor-pointer">
                         <span><i class="fa-solid fa-circle-question fa-xl" style="color: currentColor;"></i></span>
                         <span>常見問題</span>
                       </li>
                       <li class="text-xl border-b py-5 flex items-center gap-3 hover:text-hover-text cursor-pointer">
                         <span><i class="fa-solid fa-camera fa-xl" style="color: currentColor;"></i></span>
                         <span>茹曦光影集</span>
                       </li>
                       <li class="text-xl border-b py-5 flex items-center gap-3 hover:text-hover-text cursor-pointer">
                         <span><i class="fa-solid fa-handshake fa-xl" style="color: currentColor;"></i></span>
                         <span>加入我們</span>
                       </li>
                       <li class="text-xl py-5 flex items-center gap-3 hover:text-hover-text cursor-pointer">
                         <span><i class="fa-solid fa-lock fa-xl" style="color: currentColor;"></i></span>
                         <span>隱私權政策</span>
                       </li>
                     </ul>
                   </div>
                </div>
              }
            }
          </div>
        </div>
      }
    </header>

    <div
      class="fixed inset-0 bg-black bg-opacity-80 z-50"
      [class]="isMenuOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      (click)="toggleMenu()"
    ></div>
    <div class="fixed top-0 right-0 bg-[url(/menu-bg-image.webp)] overflow-y-auto z-50 h-full w-500 transition-transform duration-500 ease-in-out"
    [class]="isMenuOpen()?'translate-x-0':'translate-x-full'"
    >
      <div class="px-4 py-6">
        <div class="flex justify-between px-4">
          <button [matMenuTriggerFor]="menu">繁體中文</button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item>English</button>
            <button mat-menu-item>日本語</button>
          </mat-menu>
          <div (click)="toggleMenu()">
            <i class="fa-solid fa-x fa-xl" style="color:currentColor;"></i>
          </div>
        </div>
        <div class="flex justify-center gap-8 pt-6 pb-4">
          <a routerLink="/room"
             class="flex items-center gap-2 py-1 px-5 bg-button-bg rounded-md shadow-xl hover:scale-110 transition-all duration-500">
            <span><i class="fa-solid fa-calendar" style="color: currentColor;"></i></span>
            <span class="font-bold text-base">前往訂房</span>
          </a>
          <a routerLink="/room"
             class="flex items-center gap-2 py-1 px-5 bg-button-bg rounded-md shadow-xl hover:scale-110 transition-all duration-500">
            <span><i class="fa-solid fa-calendar" style="color: currentColor;"></i></span>
            <span class="font-bold text-base">預約用餐</span>
          </a>
        </div>
        <ul>
          <li class="border-b p-2 text-xl flex justify-between"
              [class]="is1Expanded()?'bg-icon-hover':'bg-none'"
          (click)="toggleExpanded(is1Expanded)"
          >
            <span>探索台北</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <ul [class]="is1Expanded()?'max-h-96':'max-h-0'" class="px-2 border overflow-hidden transition-all duration-500">
            @for (item of menuSub1; track item.id) {
              <li class="border-b border-black py-2"><a [routerLink]="item.link">{{item.title}}</a></li>
            }
            <a class="flex justify-end py-2">查看所有旅遊指南</a>
          </ul>
          <li class="border-b p-2 text-xl flex justify-between" [class]="is2Expanded()?'bg-icon-hover':'bg-none'"
          (click)="toggleExpanded(is2Expanded)"
          >
            <span>優惠專案</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <ul [class]="is2Expanded()?'max-h-1000':'max-h-0'" class="flex flex-col gap-4 px-2 border overflow-hidden transition-all duration-500">
            <div>
            <h3 class="font-bold text-xl py-1">住宿優惠</h3>
            @for (item of menuSub2; track item.id) {
              <li class="border-b border-black py-2"><a [routerLink]="item.link">{{item.title}}</a></li>
            }
            </div>
            <div>
            <h3 class="font-bold text-xl pt-2 pb-1">餐飲優惠</h3>
            @for (item of menuSub22; track item.id) {
              <li class="border-b border-black py-2"><a [routerLink]="item.link">{{item.title}}</a></li>
            }
            </div>
            <div>
            <h3 class="font-bold text-xl pt-2 pb-1">宴會專案</h3>
            @for (item of menuSub33; track item.id) {
              <li class="border-b border-black py-2"><a [routerLink]="item.link">{{item.title}}</a></li>
            }
            </div>
            <a class="flex justify-end py-2">探索所有專屬優惠</a>
          </ul>
          <li class="border-b p-2 text-xl flex justify-between" [class]="is3Expanded()?'bg-icon-hover':'bg-none'"
          (click)="toggleExpanded(is3Expanded)"
          >
            <span>酒店公告</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <ul [class]="is3Expanded()?'max-h-96':'max-h-0'" class="px-2 border overflow-hidden transition-all duration-500">
            @for (item of menuSub3; track item.id) {
              <li class="border-b border-black py-2"><a [routerLink]="item.link">{{item.title}}</a></li>
            }
            <a class="flex justify-end pt-4 pb-2">瀏覽全部最新公告</a>
          </ul>
          <li class="border-b p-2 text-xl flex justify-between"
          (click)="toggleExpanded(is4Expanded)"
              [class]="is4Expanded()?'bg-icon-hover':'bg-none'"
          >
            <span>全新客房與套房</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <div [class]="is4Expanded()?'max-h-1000':'max-h-0'" class="px-2 border overflow-hidden transition-all duration-500">
            <div class="grid grid-cols-2 gap-2">
              @for (item of menuSub4; track item.id) {
                <div class="flex flex-col">
                  <a [routerLink]="item.link"><img [src]="item.img" [alt]="item.title"></a>
                  <p class="hover:text-hover-text">{{item.title}}</p>
                </div>
              }
            </div>
            <a class="flex justify-end pt-4 pb-2">查看所有客房</a>
          </div>
          <li class="border-b p-2 text-xl flex justify-between"
          (click)="toggleExpanded(is5Expanded)"
              [class]="is5Expanded()?'bg-icon-hover':'bg-none'"
          >
            <span>餐飲饗宴</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <ul [class]="is5Expanded()?'max-h-96':'max-h-0'" class="px-2 border overflow-hidden transition-all duration-500">
            <h4 class="font-bold text-lg py-1">館內餐廳</h4>
            <li class="border-b border-black py-2"><a routerLink="/dinner">Sunny Buffet 自助餐廳</a></li>
            <h4 class="font-bold text-lg py-1">館內獨立經營餐廳</h4>
            <li class="border-b border-black py-2"><a routerLink="/dinner">Opera 雞尾酒吧</a></li>
            <li class="border-b border-black py-2"><a routerLink="/dinner">八和和牛燒肉專門店</a></li>
            <a class="flex justify-end  invisible">瀏覽全部最新公告</a>
          </ul>
          <li class="border-b p-2 text-xl flex justify-between"
          (click)="toggleExpanded(is6Expanded)"
              [class]="is6Expanded()?'bg-icon-hover':'bg-none'"
          >
            <span>會議與活動</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <ul [class]="is6Expanded()?'max-h-96':'max-h-0'" class="px-2 border overflow-hidden transition-all duration-500">
            @for (item of menuSub6; track item.id) {
              <li class="border-b border-black py-2"><a [routerLink]="item.link">{{item.title}}</a></li>
            }
            <a class="flex justify-end  invisible">瀏覽全部最新公告</a>
          </ul>
          <li class="border-b p-2 text-xl flex justify-between"
          (click)="toggleExpanded(is7Expanded)"
              [class]="is7Expanded()?'bg-icon-hover':'bg-none'"
          >
            <span>設施與服務</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <div [class]="is7Expanded()?'max-h-96':'max-h-0'" class="px-2 border overflow-hidden transition-all duration-500">
            <div class="grid grid-cols-3 gap-2">
              @for (item of menuSub7;track item.id){
                <img [src]="item.img" [alt]="item.title"/>
              }
            </div>
            <a class="flex justify-end pt-4 pb-2">瀏覽全部設施</a>
          </div>
          <li class="border-b p-2 text-xl flex justify-between"
          (click)="toggleExpanded(is8Expanded)"
              [class]="is8Expanded()?'bg-icon-hover':'bg-none'"
          >
            <span>關於茹曦</span>
            <span><i class="fa-solid fa-plus" style="color: currentColor;"></i></span>
          </li>
          <ul [class]="is8Expanded()?'max-h-96':'max-h-0'" class="px-2 border overflow-hidden transition-all duration-500">
            @for (item of menuSub8; track item.id) {
              <li class="border-b border-black py-2"><a [routerLink]="item.link">{{item.title}}</a></li>
            }
            <a class="flex justify-end  invisible">瀏覽全部最新公告</a>
          </ul>
        </ul>
        <a class="cursor-pointer"><img src="/menu-pic.jpg" alt="menu-pic"></a>
      </div>
      <ul class="flex gap-3 justify-end px-4">
        <li class="cursor-pointer w-9 h-9 border border-black  rounded-full flex justify-center items-center"><span><i class="fa-solid fa-location fa-lg" style="color: #fcbb76;"></i></span></li>
        <li class="cursor-pointer w-9 h-9 border border-black  rounded-full flex justify-center items-center"><span><i class="fa-brands fa-facebook-f fa-lg" style="color: #fcbb76;"></i></span></li>
        <li class="cursor-pointer w-9 h-9 border border-black  rounded-full flex justify-center items-center"><span><i class="fa-brands fa-instagram fa-lg" style="color: #fcbb76;"></i></span></li>
        <li class="cursor-pointer w-9 h-9 border border-black  rounded-full flex justify-center items-center"><span><i class="fa-brands fa-linkedin-in fa-lg" style="color: #fcbb76;"></i></span></li>
        <li class="cursor-pointer w-9 h-9 border border-black  rounded-full flex justify-center items-center"><span><i class="fa-brands fa-youtube fa-lg" style="color: #fcbb76;"></i></span></li>
      </ul>
    </div>

  `,
  styles: ``,
})
export class Header {
  is1Expanded = signal(false);
  is2Expanded = signal(false);
  is3Expanded = signal(false);
  is4Expanded = signal(false);
  is5Expanded = signal(false);
  is6Expanded = signal(false);
  is7Expanded = signal(false);
  is8Expanded = signal(false);

  toggleExpanded(stateSignal: WritableSignal<boolean>) {
    stateSignal.update((value) => !value);
  }

  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
  navItem: NavItem[] = [
    { id: 1, title: '探索台北', link: '/nav1' },
    { id: 2, title: '優惠專案', link: '/nav2' },
    { id: 3, title: '酒店公告', link: '/nav3' },
    { id: 4, title: '客房與套房', link: '/triple-room' },
    { id: 5, title: '餐飲饗宴', link: '/nav5' },
    { id: 6, title: '會議與活動', link: '/nav6' },
    { id: 7, title: '設施與服務', link: '/nav7' },
    { id: 8, title: '關於茹曦', link: '/nav8' },
  ];

  menuSub1: NavItem[] = [
    { id: 1, title: '2026 台北跨年完美交通指南', link: '/sub1' },
    { id: 2, title: '台北跨年煙火最佳觀賞飯店：茹曦酒店', link: '/sub1' },
    { id: 3, title: '台北酒店藝術展覽推薦｜茹曦酒店 x Eric Hsueh 不鏽鋼雕塑特展', link: '/sub1' },
    { id: 4, title: '2025 台北馬拉松 - 茹曦酒店為跑者點亮晨曦之旅', link: '/sub1' },
  ];
  menuSub2: NavItem[] = [
    { id: 1, title: '2026 台北跨年完美交通指南', link: '/sub1' },
    { id: 2, title: '台北跨年煙火最佳觀賞飯店：茹曦酒店', link: '/sub1' },
  ];
  menuSub22: NavItem[] = [
    { id: 1, title: '農曆新年圍爐宴', link: '/sub1' },
    { id: 2, title: '異國燒烤饗宴', link: '/sub1' },
  ];
  menuSub33: NavItem[] = [
    { id: 1, title: '尾牙春酒饗宴', link: '/sub1' },
    { id: 2, title: '「神助攻！超頂6選1」婚宴專案', link: '/sub1' },
  ];
  menuSub3: NavItem[] = [
    { id: 1, title: '茹曦酒店推行環保自助式飲水機計劃', link: '/sub1' },
    { id: 2, title: '9 項專屬穆斯林友善服務，重新定義貼心款待', link: '/sub1' },
    { id: 3, title: '無菸政策 - 享受清新環境', link: '/sub1' },
    { id: 4, title: '茹曦酒店攜手愛地球，健身房啟動環保新計畫！', link: '/sub1' },
  ];
  menuSub4: NavItem[] = [
    { id: 1, title: '尊爵客房', link: '/sub1', img: '/menu04/01.webp' },
    { id: 2, title: '尊爵三人房', link: '/sub1', img: '/menu04/02.webp' },
    { id: 3, title: '尊爵家庭房', link: '/sub1', img: '/menu04/03.webp' },
    { id: 4, title: '豪華套房', link: '/sub1', img: '/menu04/04.webp' },
    { id: 5, title: '公寓式套房', link: '/sub1', img: '/menu04/05.webp' },
    { id: 6, title: '行政套房', link: '/sub1', img: '/menu04/06.webp' },
    { id: 7, title: '標準客房（2017年裝修）', link: '/sub1', img: '/menu04/07.webp' },
    { id: 8, title: '尊爵套房', link: '/sub1', img: '/menu04/08.webp' },
  ];
  menuSub6: NavItem[] = [
    { id: 1, title: '「神助攻！超頂6選1」婚宴專案', link: '/sub1' },
    { id: 2, title: '瀏覽全部宴會空間', link: '/sub1' },
    { id: 3, title: '茹曦婚禮', link: '/sub1' },
    { id: 4, title: '活動需求表單', link: '/sub1' },
  ];
  menuSub7: NavItem[] = [
    { id: 1, title: '尊爵客房', link: '/sub1', img: '/menu07/01.webp' },
    { id: 2, title: '尊爵三人房', link: '/sub1', img: '/menu07/02.webp' },
    { id: 3, title: '尊爵家庭房', link: '/sub1', img: '/menu07/03.webp' },
    { id: 4, title: '豪華套房', link: '/sub1', img: '/menu07/04.webp' },
    { id: 5, title: '公寓式套房', link: '/sub1', img: '/menu07/05.webp' },
    { id: 6, title: '行政套房', link: '/sub1', img: '/menu07/06.webp' },
  ];
  menuSub8: NavItem[] = [
    { id: 1, title: '我們的故事', link: '/sub1' },
    { id: 2, title: '聯絡我們', link: '/sub1' },
    { id: 3, title: '常見問題', link: '/sub1' },
    { id: 4, title: '茹曦光影集', link: '/sub1' },
    { id: 5, title: '加入我們', link: '/sub1' },
    { id: 6, title: '隱私權政策', link: '/sub1' },
  ];
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
