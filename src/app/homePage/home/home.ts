import { Component } from '@angular/core';
import { Discount } from '../../shared/discount/discount';
import { Info } from '../../shared/info/info';
import { Notice } from '../../shared/notice/notice';
import { Pic } from '../pic/pic';
import { Special } from '../special/special';
import { HeroSection } from '../hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [Discount, Info, Notice, Pic, Special, HeroSection],
  template: `
    <app-hero-section />
    <div class="max-w-1200 mx-auto">
      <app-special />
      <app-notice />
      <app-pic />
      <app-discount />
      <app-info />
    </div>
  `,
  styles: ``,
})
export class Home {}
