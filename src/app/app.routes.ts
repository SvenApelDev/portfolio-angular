import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: Home, title: 'Sven Apel | Frontend Developer' },
  {
    path: 'legal-notice',
    component: LegalNotice,
    title: 'Legal Notice | Sven Apel | Frontend Developer',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
    title: 'Privacy Policy | Sven Apel | Frontend Developer',
  },
  { path: '**', redirectTo: '' },
];
