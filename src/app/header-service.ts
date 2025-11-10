import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  closeTimeout: any = null;
  activeDropdown = signal<string | null>(null);
  showDropdown(itemKey: string) {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.activeDropdown.set(itemKey);
  }
  hideDropdown() {
    if (this.closeTimeout) return;
    this.closeTimeout = setTimeout(() => {
      this.activeDropdown.set(null);
    }, 200);
  }

  closeMenuImmediately() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.activeDropdown.set(null);
  }
}
