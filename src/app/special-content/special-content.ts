import { Component, input } from '@angular/core';
interface Special {
  id: number;
  title: string;
  children?: Special[];
}
@Component({
  selector: 'app-special-content',
  imports: [],
  template: `
    <ul>
      <li class="text-lg font-bold py-2">{{ label().title }}</li>
      <ul class="list-disc p-6 text-base">
        @for (child of label().children; track child.id) {
          <li>{{ child.title }}</li>
        }
      </ul>
    </ul>
  `,
  styles: ``,
})
export class SpecialContent {
  label = input.required<Special>();
}
