import { afterNextRender, Component, ElementRef, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  protected readonly highlights = [
    { icon: 'icon-location.svg', key: 'about.location' },
    { icon: 'icon-cognition.svg', key: 'about.learning' },
    { icon: 'icon-quality.svg', key: 'about.approach' },
  ];

  private photoWrapper = viewChild.required<ElementRef<HTMLElement>>('photoWrapper');
  protected isPatternVisible = signal(false);

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          this.isPatternVisible.set(true);
          observer.disconnect();
        },
        { threshold: 0.6 },
      );
      observer.observe(this.photoWrapper().nativeElement);
    });
  }
}
