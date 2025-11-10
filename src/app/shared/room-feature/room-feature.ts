import { Component, input } from '@angular/core';
import { SpecialContent } from './special-content/special-content';
interface SpecialList {
  id: number;
  title: string;
  children?: SpecialList[];
}
@Component({
  selector: 'app-room-feature',
  imports: [SpecialContent],
  template: `
    <h2 class="text-4xl font-bold pt-8 pb-6 px-6">客房特色</h2>
    <div class="grid media-screen-800:grid-cols-3 px-6">
      @for (item of items(); track item.id; let i = $index) {
        <div class="p-2.5" [class.bg-special-grid]="i % 2 !== 0">
          <app-special-content [label]="item" />
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class RoomFeature {
  items = input.required<SpecialList[]>();
}
