import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { InvoiceComponent } from './components/invoice/invoice.component';

@NgModule({
  declarations: [AppComponent, InvoiceComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [PDFGenerator, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
