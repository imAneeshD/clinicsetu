import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    {
        path: 'landing',
        component: LandingPageComponent,
        pathMatch: 'full',
    }

];
