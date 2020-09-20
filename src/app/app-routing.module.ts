import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ClienteComponent} from 'src/app/cliente/cliente.component';
import{RutinaComponent} from 'src/app/rutina/rutina.component';
import{TablaclienteComponent} from 'src/app/tablacliente/tablacliente.component';
const routes: Routes = [
  {path: 'clientes-component', component: ClienteComponent},
  {path:'rutina-component',component: RutinaComponent},
  {path:'tabla', component: TablaclienteComponent},
  {path: '',redirectTo: 'tabla',pathMatch: 'full'},
  {path: '**',component:TablaclienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
