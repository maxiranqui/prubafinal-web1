import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './cliente/cliente.component';
import { RutinaComponent } from './rutina/rutina.component';
import { TablaclienteComponent } from './tablacliente/tablacliente.component';
import { TablarutinaComponent } from './tablarutina/tablarutina.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import{ConsultarService} from 'src/app/Servicio/consultar-service';
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
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [ConsultarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
