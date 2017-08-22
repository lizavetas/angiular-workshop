import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';

// Define routes
export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full' // checks if full url matches path
    },
    {
        path: 'products',
        component: ProductListComponent
    }
];

// Create a new module with configured router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
