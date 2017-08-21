import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ProductDescriptionBoxComponent } from './components/product-description-box/product-description-box.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductDescriptionBoxComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
