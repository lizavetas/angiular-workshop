import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ProductDescriptionBoxComponent } from './components/product-description-box/product-description-box.component';
import { ProductTitleComponent } from './components/product-title/product-title.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductDataService } from './shared/product-data.service';

import {HttpClientModule} from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        ProductDescriptionBoxComponent,
        ProductTitleComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ProductDataService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
