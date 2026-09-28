import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skills = [
    { name: 'HTML', icon: 'icon-html.svg' },
    { name: 'CSS', icon: 'icon-css.svg' },
    { name: 'JavaScript', icon: 'icon-javascript.svg' },
    { name: 'Material Design', icon: 'icon-material-design.svg' },
    { name: 'TypeScript', icon: 'icon-typescript.svg' },
    { name: 'Angular', icon: 'icon-angular.svg' },
    { name: 'Supabas', icon: 'icon-supabase.svg' },
    { name: 'Git', icon: 'icon-git.svg' },
    { name: 'REST-API', icon: 'icon-rest-api.svg' },
    { name: 'Scrum', icon: 'icon-scrum.svg' },
  ];
}
