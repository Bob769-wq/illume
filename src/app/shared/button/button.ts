import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  template: `
    <a
      routerLink="/room"
      class="flex items-center gap-2 py-1 px-5 bg-button-bg rounded-md shadow-xl hover:scale-110 transition-all duration-500"
    >
      <span><i class="fa-solid fa-calendar" style="color: currentColor;"></i></span>
      <span class="font-bold text-base">{{ label() }}</span>
    </a>
  `,
  styles: ``,
})
export class Button {
  label = input.required<string>();
}
