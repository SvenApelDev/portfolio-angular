import { Component, computed, signal } from '@angular/core';
import { REFERENCES } from './references.data';

@Component({
  imports: [],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  readonly references = REFERENCES;
  readonly count = REFERENCES.length;
  readonly slides = [...REFERENCES, ...REFERENCES, ...REFERENCES];

  position = signal(this.count + 1);
  hasTransition = signal(true);
  activeIndex = computed(() => this.position() % this.count);

  private isMoving = false;
  private touchStartX = 0;
  private readonly swipeThreshold = 50;

  next(): void {
    this.move(1);
  }

  prev(): void {
    this.move(-1);
  }

  onTransitionEnd(event: TransitionEvent): void {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
    this.isMoving = false;
    this.jumpToMiddleCopy();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const distance = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(distance) < this.swipeThreshold) return;
    if (distance < 0) {
      this.next();
    } else {
      this.prev();
    }
  }

  private move(step: number): void {
    if (this.isMoving) return;
    this.isMoving = true;
    this.position.update((pos) => pos + step);
  }

  private jumpToMiddleCopy(): void {
    const pos = this.position();
    if (pos >= this.count && pos < this.count * 2) return;
    this.hasTransition.set(false);
    this.position.set((pos % this.count) + this.count);
    requestAnimationFrame(() => requestAnimationFrame(() => this.hasTransition.set(true)));
  }
}
