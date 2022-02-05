import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoDetallesComponent } from './info-detalles/info-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    GaleriaComponent,
    MapaComponent,
    ContactoComponent,
    InfoDetallesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
