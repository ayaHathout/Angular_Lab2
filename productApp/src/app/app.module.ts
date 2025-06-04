import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { App } from './app';

// Import your pipes
import { ProductFilterPipe } from './pipes/product-filter-pipe';
import { Products } from './components/products/products.component';

@NgModule({
  declarations: [
    App,
    Products,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }