import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  private http = inject(HttpClient);
  private messageArea = viewChild<ElementRef<HTMLTextAreaElement>>('messageArea');
  private toastTimer?: ReturnType<typeof setTimeout>;

  isSending = signal(false);
  toast = signal<'success' | 'error' | null>(null);

  onSubmit(form: NgForm): void {
    if (form.invalid || this.isSending()) return;
    this.isSending.set(true);
    const { name, email, message } = this.contactData;

    this.http.post('send-mail.php', { name, email, message }).subscribe({
      next: () => {
        this.isSending.set(false);
        form.resetForm();
        this.resetMessageHeight();
        this.showToast('success');
      },
      error: () => {
        this.isSending.set(false);
        this.showToast('error');
      },
    });
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

  private showToast(type: 'success' | 'error'): void {
    clearTimeout(this.toastTimer);
    this.toast.set(type);
    this.toastTimer = setTimeout(() => this.toast.set(null), 4000);
  }

  private resetMessageHeight(): void {
    const textarea = this.messageArea()?.nativeElement;
    if (textarea) textarea.style.height = '';
  }
}
