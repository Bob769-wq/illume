import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
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
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('illume');
}
