import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe],
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly marqueeItems = [
    'hero.marquee.remote',
    'hero.marquee.role',
    'hero.marquee.location',
    'hero.marquee.open',
  ];
}
