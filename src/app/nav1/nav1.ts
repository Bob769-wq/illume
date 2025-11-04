import { Component } from '@angular/core';

import { NavHero } from './nav-hero/nav-hero';
import { NavPic } from './nav-pic/nav-pic';
import { NavSpecial } from './nav-special/nav-special';
import { Info } from '../shared/info/info';
import { Notice } from '../shared/notice/notice';
import { Discount } from '../shared/discount/discount';

@Component({
  selector: 'app-nav1',
  imports: [Info, Notice, Info, NavHero, Notice, NavPic, NavSpecial, Discount],
  template: `
    <app-nav-hero />
    <div class="max-w-1200 mx-auto">
      <app-nav-special />
      <app-notice />
      <app-nav-pic />
      <app-discount />
      <app-info />
    </div>
  `,
  styles: ``,
})
export class Nav1 {}
