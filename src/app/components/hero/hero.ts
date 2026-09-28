import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly marqueeItems = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Plauen',
    'Open to work',
  ];
}
