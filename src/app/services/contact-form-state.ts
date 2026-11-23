import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactFormState {
  data = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };
}
