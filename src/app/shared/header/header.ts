import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {'(document:keydown.escape)': 'closeMenu()',},
})
export class Header {
  private document = inject(DOCUMENT);
  isMenuOpen = false;

  toggleMenu(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu(): void {
    this.isMenuOpen = true;
    this.document.body.classList.add('no-scroll');
  }
  closeMenu(): void {
    this.isMenuOpen = false;
    this.document.body.classList.remove('no-scroll');
  }
}
