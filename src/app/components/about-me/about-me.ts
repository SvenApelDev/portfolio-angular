import { Component } from '@angular/core';
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
}
