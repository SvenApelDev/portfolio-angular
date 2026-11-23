import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class Header {
  private document = inject(DOCUMENT);
  isMenuOpen = false;
  private translate = inject(TranslateService);
  currentLang = 'en';

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

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    this.document.documentElement.lang = lang;
  }
}
