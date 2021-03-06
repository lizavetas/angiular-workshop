import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ProductDescriptionBoxComponent } from './components/product-description-box/product-description-box.component';
import { ProductTitleComponent } from './components/product-title/product-title.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductDataService } from './shared/product-data.service';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';

import './app.component.css';
import { ProductNewComponent } from './components/product/product-new/product-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        ProductDescriptionBoxComponent,
        ProductTitleComponent,
        ProductListComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductNewComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        routing,
        ReactiveFormsModule
    ],
    providers: [
        ProductDataService,
        ConfirmCandeactivateGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
