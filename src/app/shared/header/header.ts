import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { Menu01Explore } from '../dropdown-menu/menu01-explore/menu01-explore';
import { Menu02Discount } from '../dropdown-menu/menu02-discount/menu02-discount';
import { Menu03HotelNotice } from '../dropdown-menu/menu03-hotel-notice/menu03-hotel-notice';
import { Menu04Room } from '../dropdown-menu/menu04-room/menu04-room';
import { Menu05Cuisine } from '../dropdown-menu/menu05-cuisine/menu05-cuisine';
import { Menu06Conference } from '../dropdown-menu/menu06-conference/menu06-conference';
import { Menu07Service } from '../dropdown-menu/menu07-service/menu07-service';
import { Menu08 } from '../dropdown-menu/menu08/menu08';
import { Button } from '../button/button';
import { HeaderService } from '../../header-service';
interface NavItem {
  id: number;
  title: string;
  link: string;
  img?: string;
  key: string;
}
interface MenuSection {
  id: number;
  key: string;
  title: string;
  type: 'simple' | 'multi-category' | 'grid-2' | 'grid-3' | 'special-dining';
  viewAllText?: string;
  items?: MenuNavItem[];
  categories?: {
    title: string;
    items: MenuNavItem[];
  }[];
}

interface MenuNavItem {
  id: number;
  title: string;
  link: string;
  img?: string;
}

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    RouterLinkActive,
    Menu01Explore,
    Menu02Discount,
    Menu03HotelNotice,
    Menu04Room,
    Menu05Cuisine,
    Menu06Conference,
    Menu07Service,
    Menu08,
    Button,
  ],
  template: `
      <header class="shadow-md bg-white fixed top-0 left-0 right-0 z-40">
          <div class="px-2.5 bg-upper-bg hidden lg:block">
              <div class="max-w-[95%] mx-auto flex items-center justify-between">
                  <div class="flex items-center gap-8 py-2.5 leading-7">
                      <a class="flex items-center gap-2 cursor-pointer hover:text-hover-text">
                          <span><i class="fa-solid fa-phone-volume" style="color: #1f2f4d;"></i></span>
                          <span class="text-base">+886 2-2719-8399</span>
                      </a>
                      <a class="flex items-center gap-2 cursor-pointer hover:text-hover-text">
                          <span><i class="fa-solid fa-envelope" style="color: #1f2f4d;"></i></span>
                          <span class="text-base">gsm@theillumehotel.com</span>
                      </a>
                      <a class="flex items-center gap-2 cursor-pointer hover:text-hover-text">
                          <span><i class="fa-solid fa-location-dot" style="color: #1f2f4d;"></i></span>
                          <span class="text-base">105020 台北市松山區敦化北路 100 號</span>
                      </a>
                      <a class="flex items-center gap-2 cursor-pointer hover:text-hover-text">
                          <span><i class="fa-solid fa-circle-question" style="color: #1f2f4d;"></i></span>
                          <span class="text-base">聯絡我們</span>
                      </a>
                  </div>
                  <div class="flex items-center gap-6">
                      <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-facebook-f fa-2xl"
                                                                         style="color: currentColor;"></i></a>
                      <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-instagram fa-2xl"
                                                                         style="color: currentColor;"></i></a>
                      <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-linkedin-in fa-2xl"
                                                                         style="color: currentColor;"></i></a>
                      <a class="cursor-pointer hover:text-icon-hover"><i class="fa-brands fa-youtube fa-2xl"
                                                                         style="color: currentColor;"></i></a>
                  </div>
              </div>
          </div>
          <div class="px-3 py-2 flex items-center justify-between">
              <a routerLink="/">
                  <img src="/logo.png" alt="logo"
                       class="media-screen-800:h-28 media-screen-800:w-36 w-24 h-16 object-contain">
              </a>
              <div class="lg:hidden cursor-pointer">
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
                     <app-button label="前往訂房"/>
                     <app-button label="預約用餐"/>
                  </div>
                  <ul class="flex">
                      @for (item of navItem; track item.id) {
                          <li class="text-base font-medium group relative"
                              (mouseenter)="showDropDown(item.key)" (mouseleave)="hideDropDown()"
                          >
                              <a [routerLink]="item.link" routerLinkActive="text-icon-hover font-bold"
                                 class="px-4 py-2 flex items-center gap-2">
                                  <span>{{ item.title }}</span>
                                  <span><i class="fa-solid fa-caret-down fa-xs" style="color: #1f3151;"></i></span>
                              </a>
                              <div class="absolute top-full h-1 w-full hidden bg-upper-bg group-hover:block"></div>
                          </li>
                      }
                  </ul>
              </div>
          </div>

          @if (activeDropdown() !== null) {
              <div class="absolute top-full left-0 right-0 bg-white shadow-md"
                   (mouseenter)="showDropDown(activeDropdown()!)" (mouseleave)="hideDropDown()">
                  <div class="px-4 py-4 bg-[url(/menu-bg-image.webp)] min-h-480 flex items-center justify-center">
                      @switch (activeDropdown()) {
                          @case ('explore') {
                             <app-menu01-explore/>
                          }
                          @case ('discount') {
                             <app-menu02-discount/>
                          }
                          @case ('notice') {
                             <app-menu03-hotel-notice/>
                          }
                          @case ('rooms') {
                            <app-menu04-room (linkClicked)="closeMenu()"/>
                          }
                          @case ('cuisine') {
                            <app-menu05-cuisine/>
                          }
                          @case ('conference') {
                            <app-menu06-conference/>
                          }
                          @case ('service') {
                              <app-menu07-service/>
                          }
                          @case ('about') {
                              <app-menu08/>
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
      <div class="fixed top-0 right-0 bg-[url(/menu-bg-image.webp)] overflow-y-auto z-50 h-full max-w-500 transition-transform duration-500 ease-in-out"
           [class]="isMenuOpen()?'translate-x-0':'translate-x-full'"
      >
          <div class="px-4 py-6">
              <div class="flex justify-between px-4">
                  <button [matMenuTriggerFor]="menu">繁體中文</button>
                  <mat-menu #menu="matMenu">
                      <button mat-menu-item>English</button>
                      <button mat-menu-item>日本語</button>
                  </mat-menu>
                  <div class="cursor-pointer" (click)="toggleMenu()">
                      <i class="fa-solid fa-x fa-xl" style="color:currentColor;"></i>
                  </div>
              </div>
              <div class="flex justify-center gap-8 pt-6 pb-4">
                 <app-button label="前往訂房"/>
                 <app-button label="預約用餐"/>
              </div>
              <ul>
                @for (section of menuSections; track section.id) {
                  <li class="border-b p-2 text-xl flex justify-between"
                      [class]="isExpanded(section.key)?'bg-icon-hover':'bg-none'"
                      (click)="toggleSection(section.key)">
                    <span>{{section.title}}</span>
                    <span><i class="fa-solid fa-plus" style="color:currentColor"></i></span>
                  </li>

                  <div class="px-2 border overflow-hidden transition-all duration-500"
                  [class]="isExpanded(section.key)?'max-h-1000':'max-h-0'"
                  >
                    @switch (section.type){
                      @case ('simple'){
                        <ul>
                          @for (item of section.items; track item.id) {
                            <li class="border-b border-black py-2">
                              <a [routerLink]="item.link">{{item.title}}</a>
                            </li>
                          }
                        </ul>
                      }
                      @case ('multi-category'){
                        <div class="flex flex-col gap-4">
                          @for (category of section.categories;track category.title){
                            <div>
                              <h3 class="font-bold text-xl py-1">{{category.title}}</h3>
                              @for (item of category.items;track item.id){
                                <li class="border-b border-black py-2">
                                  <a [routerLink]="item.link">{{item.title}}</a>
                                </li>
                              }
                            </div>
                          }
                        </div>
                      }
                      @case ('grid-2'){
                        <div class="grid grid-cols-2 gap-2">
                          @for (item of section.items;track item.id){
                            <div class="flex flex-col">
                              <a [routerLink]="item.link" (click)="toggleMenu()">
                                <img [src]="item.img" [alt]="item.title"/>
                              </a>
                              <p class="hover:text-hover-text">{{item.title}}</p>
                            </div>
                          }
                        </div>
                      }
                      @case('grid-3'){
                        <div class="grid grid-cols-3 gap-2">
                          @for (item of section.items;track item.id){
                            <img [src]="item.img" [alt]="item.title"/>
                          }
                        </div>
                      }
                      @case ('special-dining'){
                      <ul>
                        <h4 class="font-bold text-lg py-1">館內餐廳</h4>
                        <li class="border-b border-black py-2">
                          <a routerLink="/dinner">Sunny Buffet 自助餐廳</a>
                        </li>
                        <h4 class="font-bold text-lg py-1">館內獨立經營餐廳</h4>
                        <li class="border-b border-black py-2">
                          <a routerLink="/dinner">Opera 雞尾酒吧</a>
                        </li>
                        <li class="border-b border-black py-2">
                          <a routerLink="/dinner">八和和牛燒肉專門店</a>
                        </li>
                      </ul>
                      }
                    }
                    @if(section.viewAllText) {
                      <a class="flex justify-end py-2">{{section.viewAllText}}</a>
                    } @else {
                      <div class="invisible py-2"></div>
                    }
                  </div>
                }
              </ul>
              <a class="cursor-pointer"><img src="/menu-pic.jpg" alt="menu-pic"></a>
          </div>
          <ul class="flex gap-3 justify-end px-4 py-2">
            @for (item of menuIcon; track item.id){
              <li class="cursor-pointer w-9 h-9 border border-black  rounded-full flex justify-center items-center">
                <a [routerLink]="item.link"><i [class]="item.img" style="color: #fcbb76;"></i></a>
              </li>
            }
          </ul>
      </div>

  `,
  styles: ``,
})
export class Header {
  headerService = inject(HeaderService);
  activeDropdown = this.headerService.activeDropdown;

  showDropDown(key: string) {
    this.headerService.showDropdown(key);
  }
  hideDropDown() {
    this.headerService.hideDropdown();
  }
  closeMenu() {
    this.headerService.closeMenuImmediately();
  }

  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
  navItem: NavItem[] = [
    { id: 1, title: '探索台北', link: '/nav1', key: 'explore' },
    { id: 2, title: '優惠專案', link: '/nav2', key: 'discount' },
    { id: 3, title: '酒店公告', link: '/nav3', key: 'notice' },
    { id: 4, title: '客房與套房', link: '/nav4', key: 'rooms' },
    { id: 5, title: '餐飲饗宴', link: '/nav5', key: 'cuisine' },
    { id: 6, title: '會議與活動', link: '/nav6', key: 'conference' },
    { id: 7, title: '設施與服務', link: '/nav7', key: 'service' },
    { id: 8, title: '關於茹曦', link: '/nav8', key: 'about' },
  ];

  menuIcon: MenuNavItem[] = [
    { id: 1, title: 'location', img: 'fa-solid fa-location fa-lg', link: '/location' },
    { id: 2, title: 'facebook', img: 'fa-brands fa-facebook-f fa-lg', link: '/facebook' },
    { id: 3, title: 'instagram', img: 'fa-brands fa-instagram fa-lg', link: '/instagram' },
    { id: 4, title: 'linkedin', img: 'fa-brands fa-linkedin-in fa-lg', link: '/linkedin' },
    { id: 5, title: 'youtube', img: 'fa-brands fa-youtube fa-lg', link: '/youtube' },
  ];

  expandedSections = signal<Record<string, boolean>>({
    explore: false,
    discount: false,
    notice: false,
    rooms: false,
    cuisine: false,
    conference: false,
    service: false,
    about: false,
  });

  menuSections: MenuSection[] = [
    {
      id: 1,
      key: 'explore',
      title: '探索台北',
      type: 'simple',
      viewAllText: '查看所有旅遊指南',
      items: [
        { id: 1, title: '2026 台北跨年完美交通指南', link: '/sub1' },
        { id: 2, title: '台北跨年煙火最佳觀賞飯店：茹曦酒店', link: '/sub1' },
        {
          id: 3,
          title: '台北酒店藝術展覽推薦｜茹曦酒店 x Eric Hsueh 不鏽鋼雕塑特展',
          link: '/sub1',
        },
        { id: 4, title: '2025 台北馬拉松 - 茹曦酒店為跑者點亮晨曦之旅', link: '/sub1' },
      ],
    },
    {
      id: 2,
      key: 'discount',
      title: '優惠專案',
      type: 'multi-category',
      viewAllText: '探索所有專屬優惠',
      categories: [
        {
          title: '住宿優惠',
          items: [
            { id: 1, title: '2026 台北跨年完美交通指南', link: '/sub1' },
            { id: 2, title: '台北跨年煙火最佳觀賞飯店：茹曦酒店', link: '/sub1' },
          ],
        },
        {
          title: '餐飲優惠',
          items: [
            { id: 1, title: '農曆新年圍爐宴', link: '/sub1' },
            { id: 2, title: '異國燒烤饗宴', link: '/sub1' },
          ],
        },
        {
          title: '宴會專案',
          items: [
            { id: 1, title: '尾牙春酒饗宴', link: '/sub1' },
            { id: 2, title: '「神助攻！超頂6選1」婚宴專案', link: '/sub1' },
          ],
        },
      ],
    },
    {
      id: 3,
      key: 'notice',
      title: '酒店公告',
      type: 'simple',
      viewAllText: '瀏覽全部最新公告',
      items: [
        { id: 1, title: '茹曦酒店推行環保自助式飲水機計劃', link: '/sub1' },
        { id: 2, title: '9 項專屬穆斯林友善服務，重新定義貼心款待', link: '/sub1' },
        { id: 3, title: '無菸政策 - 享受清新環境', link: '/sub1' },
        { id: 4, title: '茹曦酒店攜手愛地球，健身房啟動環保新計畫！', link: '/sub1' },
      ],
    },
    {
      id: 4,
      key: 'rooms',
      title: '全新客房與套房',
      type: 'grid-2',
      viewAllText: '查看所有客房',
      items: [
        { id: 1, title: '尊爵客房', link: '/sub1', img: '/menu04/01.webp' },
        { id: 2, title: '尊爵三人房', link: '/nav4/triple-room', img: '/menu04/02.webp' },
        { id: 3, title: '尊爵家庭房', link: '/sub1', img: '/menu04/03.webp' },
        { id: 4, title: '豪華套房', link: '/sub1', img: '/menu04/04.webp' },
        { id: 5, title: '公寓式套房', link: '/nav4/apartment', img: '/menu04/05.webp' },
        { id: 6, title: '行政套房', link: '/sub1', img: '/menu04/06.webp' },
        { id: 7, title: '標準客房（2017年裝修）', link: '/sub1', img: '/menu04/07.webp' },
        { id: 8, title: '尊爵套房', link: '/sub1', img: '/menu04/08.webp' },
      ],
    },
    {
      id: 5,
      key: 'cuisine',
      title: '餐飲饗宴',
      type: 'special-dining',
    },
    {
      id: 6,
      key: 'conference',
      title: '會議與活動',
      type: 'simple',
      items: [
        { id: 1, title: '「神助攻！超頂6選1」婚宴專案', link: '/sub1' },
        { id: 2, title: '瀏覽全部宴會空間', link: '/sub1' },
        { id: 3, title: '茹曦婚禮', link: '/sub1' },
        { id: 4, title: '活動需求表單', link: '/sub1' },
      ],
    },
    {
      id: 7,
      key: 'service',
      title: '設施與服務',
      type: 'grid-3',
      viewAllText: '瀏覽全部設施',
      items: [
        { id: 1, title: '01', link: '/sub1', img: '/menu07/01.webp' },
        { id: 2, title: '02', link: '/sub1', img: '/menu07/02.webp' },
        { id: 3, title: '03', link: '/sub1', img: '/menu07/03.webp' },
        { id: 4, title: '04', link: '/sub1', img: '/menu07/04.webp' },
        { id: 5, title: '05', link: '/sub1', img: '/menu07/05.webp' },
        { id: 6, title: '06', link: '/sub1', img: '/menu07/06.webp' },
      ],
    },
    {
      id: 8,
      key: 'about',
      title: '關於茹曦',
      type: 'simple',
      items: [
        { id: 1, title: '我們的故事', link: '/sub1' },
        { id: 2, title: '聯絡我們', link: '/sub1' },
        { id: 3, title: '常見問題', link: '/sub1' },
        { id: 4, title: '茹曦光影集', link: '/sub1' },
        { id: 5, title: '加入我們', link: '/sub1' },
        { id: 6, title: '隱私權政策', link: '/sub1' },
      ],
    },
  ];

  toggleSection(sectionKey: string) {
    this.expandedSections.update((sections) => ({
      ...sections,
      [sectionKey]: !sections[sectionKey],
    }));
  }
  isExpanded(sectionKey: string): boolean {
    return this.expandedSections()[sectionKey] || false;
  }
}
