import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

//custom components
import { ProductCardComponent } from './product-card/product-card.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { InfoCardComponent } from './info-card/info-card.component';

//services
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    OfferCardComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
