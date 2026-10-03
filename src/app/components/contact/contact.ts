import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    console.log(this.contactData);
    form.resetForm();
  }

  onEnter(event: Event): void {
    event.preventDefault();
    (event.target as HTMLElement).blur();
  }

  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
