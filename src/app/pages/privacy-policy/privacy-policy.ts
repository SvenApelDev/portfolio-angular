import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './privacy-policy.html',
  // Reuses the legal notice layout, adds only the extra styles for this page
  styleUrls: ['../legal-notice/legal-notice.scss', './privacy-policy.scss'],
})
export class PrivacyPolicy {}
