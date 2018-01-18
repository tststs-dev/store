import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//custom components
import { ProductCardComponent } from './product-card/product-card.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { InfoCardComponent } from './info-card/info-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    OfferCardComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
