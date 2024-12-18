import { provideHttpClient } from '@angular/common/http';
import { Routes, provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'suggestions',
    loadComponent: () =>
      import('./pages/suggestions/suggestions.component').then(
        (m) => m.SuggestionsComponent
      ),
  },
];

export const appConfig = {
  providers: [provideHttpClient(), provideRouter(routes)],
};
