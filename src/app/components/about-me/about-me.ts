import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {
  protected readonly highlights = [
    { icon: 'icon-location.svg', text: 'Where are you based? Would you be open to working remotely or potentially relocating?' },
    { icon: 'icon-cognition.svg', text: 'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?' },
    { icon: 'icon-quality.svg', text: 'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and  collaboration.' },
  ];
}
