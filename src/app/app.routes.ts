import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExternalComponent } from './views/external/external.component';

export const routes: Routes = [
  { path: '', component: ExternalComponent },
  { path: 'tarot', component: HomeComponent },
];
