import { Component, OnInit } from '@angular/core';
import {Cliente} from 'src/app/clase/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import {ConsultarService} from 'src/app/Servicio/consultar-service';

@Component({
  selector: 'app-tablacliente',
  templateUrl: './tablacliente.component.html',
  styleUrls: ['./tablacliente.component.css']
})
export class TablaclienteComponent implements OnInit {

  constructor(private consultarService : ConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute) { }

    columnas: string[]=['nombre','apellido','telefono','direccion','fechaDeNacimiento','editar','asociar','listar'];
    dataSource: Cliente[]=[];
    clienteNuevo:any;


  ngOnInit(): void {
    this.getCliente();
  }
  getCliente(){
    this.consultarService.getCliente().subscribe((clientes) => {
      this.dataSource = clientes;
      this.agregarFila();

    });
  }
  agregarFila(){
    this.clienteNuevo=this.rutaA.snapshot.params;
    this.dataSource.push(this.clienteNuevo);
  }
  editar(element){
    this.router.navigate(['/clientes-component', element])
  }
  asociar(element){
    this.router.navigate(['/rutina-component', element])
  }
  listar(element){
    this.router.navigate(['/rutina-component', element])
  }
}
