import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PginicioComponent } from './pginicio/pginicio.component';
import { SeccioninicioComponent } from './seccioninicio/seccioninicio.component';
import { SeccionqsComponent } from './seccionqs/seccionqs.component';
import { PgqsComponent } from './pgqs/pgqs.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PginicioComponent,
    SeccioninicioComponent,
    SeccionqsComponent,
    PgqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
