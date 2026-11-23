import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, TranslatePipe],
  styleUrl: './legal-notice.scss',
  templateUrl: './legal-notice.html',
})
export class LegalNotice {}
