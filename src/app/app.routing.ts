import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductNewComponent } from './components/product/product-new/product-new.component';

import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';

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
    },
    {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        canActivate: [ConfirmCandeactivateGuard]

    },
    {
        path: 'products/new',
        component: ProductNewComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent
    },
    // alles was danach kommt, wird ignoriert
    // {
    //     path: '**',
    //     redirectTo: '/products',
    //     pathMatch: 'full' // checks if full url matches path
    // }
];

// Create a new module with configured router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
