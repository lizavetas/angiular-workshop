import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ProductDescriptionBoxComponent } from './components/product-description-box/product-description-box.component';
import { ProductTitleComponent } from './components/product-title/product-title.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductDescriptionBoxComponent,
        ProductTitleComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
