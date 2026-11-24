import {
  afterNextRender,
  ApplicationRef,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

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
  private appRef = inject(ApplicationRef);
  private destroyRef = inject(DestroyRef);
  private readonly sectionIds = ['about-me', 'skills', 'projects'];
  activeSection = signal('');

  constructor() {
    afterNextRender(() => {
      const update = () => this.activeSection.set(this.findActiveSection());
      window.addEventListener('scroll', update, { passive: true });
      update();
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', update));
    });
  }

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
    if (lang === this.currentLang) return;

    const applyLanguage = async (): Promise<void> => {
      await firstValueFrom(this.translate.use(lang));
      this.currentLang = lang;
      this.document.documentElement.lang = lang;
      this.appRef.tick();
    };

    if (typeof this.document.startViewTransition !== 'function') {
      applyLanguage();
      return;
    }

    this.document.startViewTransition(applyLanguage);
  }

  private findActiveSection(): string {
    const line = window.innerHeight / 3;
    for (const id of this.sectionIds) {
      const rect = this.document.getElementById(id)?.getBoundingClientRect();
      if (rect && rect.top <= line && rect.bottom > line) return id;
    }
    return '';
  }
}
