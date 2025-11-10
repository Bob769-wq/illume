import { Component, HostListener, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  template: `
    <app-header />
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer />

    <div
      class="bg-black text-white fixed right-8 bottom-8 w-10 h-10 cursor-pointer flex items-center justify-center"
      [class]="isScrolled() ? 'flex items-center justify-center' : 'hidden'"
      (click)="scrollToTop()"
    >
      <i class="fa-solid fa-chevron-up fa-xl" style="color:currentColor;"></i>
    </div>
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('illume');

  isScrolled = signal(false);
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
