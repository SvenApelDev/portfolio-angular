import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactFormState } from '../../services/contact-form-state';

@Component({
  imports: [FormsModule, RouterLink, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private formState = inject(ContactFormState);
  contactData = this.formState.data;

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
