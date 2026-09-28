import { Component } from '@angular/core';
import { PROJECTS } from './projects.data';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
