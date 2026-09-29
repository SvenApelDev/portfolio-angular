import { Component } from '@angular/core';
import { REFERENCES } from './references.data';

@Component({
  imports: [],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  protected readonly references = REFERENCES;
  protected readonly activeIndex = 1;
}
