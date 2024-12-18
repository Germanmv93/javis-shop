import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./home/pages/home-page/home-page.component').then(m => m.HomePageComponent) 
  },
  { 
    path: 'product/:id', 
    loadComponent: () => import('./product-detail/product-detail.component').then(m => m.ProductDetailComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'suggestions', 
    loadComponent: () => import('./pages/suggestions/suggestions.component').then(m => m.SuggestionsComponent) 
  },
];
