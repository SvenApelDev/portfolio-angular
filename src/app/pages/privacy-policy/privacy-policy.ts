import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './privacy-policy.html',

  styleUrls: ['../legal-notice/legal-notice.scss', './privacy-policy.scss'],
})
export class PrivacyPolicy {
  private route = inject(ActivatedRoute);

  protected readonly fromContact = this.route.snapshot.queryParamMap.get('from') === 'contact';
}
