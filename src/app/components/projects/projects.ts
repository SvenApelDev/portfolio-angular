import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from './projects.data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;

  selectedIndex = signal(0);
  selectedProject = computed(() => this.projects[this.selectedIndex()]);

  open(index: number, dialog: HTMLDialogElement): void {
    this.selectedIndex.set(index);
    dialog.showModal();
  }

  nextProject(): void {
    this.selectedIndex.update((i) => (i + 1) % this.projects.length);
  }

  onDialogClick(event: MouseEvent, dialog: HTMLDialogElement): void {
    if (event.target === dialog) {
      dialog.close();
    }
  }
}
