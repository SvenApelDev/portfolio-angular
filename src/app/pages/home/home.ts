import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { AboutMe } from '../../components/about-me/about-me';
import { Skills } from '../../components/skills/skills';
import { Projects } from '../../components/projects/projects';
import { References } from '../../components/references/references';
import { Contact } from '../../components/contact/contact';

@Component({
  imports: [Hero, AboutMe, Skills, Projects, References, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
