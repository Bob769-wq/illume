import { Component } from '@angular/core';
import { HomeHeroSection } from './home-hero-section/home-hero-section';
import { HomeInfo } from './home-info/home-info';
import { HomeReason } from './home-reason/home-reason';
import { RoomType } from './room-type/room-type';
import { HomeRelax } from './home-relax/home-relax';
import { HomeTransportation } from './home-transportation/home-transportation';
import { HomeExperience } from './home-experience/home-experience';
import { HomeDiscount } from './home-discount/home-discount';
import { HomeService } from './home-service/home-service';

@Component({
  selector: 'app-home',
  imports: [
    HomeHeroSection,
    HomeInfo,
    HomeReason,
    RoomType,
    HomeRelax,
    HomeTransportation,
    HomeExperience,
    HomeDiscount,
    HomeService,
  ],
  template: `
    <app-home-hero-section />
    <app-home-info />
    <app-home-reason />
    <app-room-type />
    <app-home-relax />
    <app-home-transportation />
    <app-home-experience />
    <app-home-discount />
    <app-home-service />
  `,
  styles: ``,
})
export class Home {}
