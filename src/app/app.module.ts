import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './cliente/cliente.component';
import { RutinaComponent } from './rutina/rutina.component';
import { TablaclienteComponent } from './tablacliente/tablacliente.component';
import { TablarutinaComponent } from './tablarutina/tablarutina.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    RutinaComponent,
    TablaclienteComponent,
    TablarutinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
