import { Component, OnInit } from '@angular/core';

import {Cliente} from 'src/app/clase/Cliente';

import  { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    cliente: Cliente;
    registro: any;
    clienteForm= this.fb.group({});

  ngOnInit(): void {
    this.registro=this.rutaActiva.snapshot.params;
    if(Object.keys(this.registro).length){
      this.cliente = this.registro;
    }
    this.initForm(this.cliente);
  }

  initForm(editarCliente: Cliente) {
    this.clienteForm = this.fb.group({
      nombre: [editarCliente ? editarCliente.nombre : ''],
      apellido: [editarCliente ? editarCliente.apellido : ''],
      telefono: [editarCliente ? editarCliente.telefono : ''],
      direccion: [editarCliente ? editarCliente.direccion : ''],
      fechaDeNacimiento: [editarCliente ? editarCliente.fechaDeNacimiento : ''],
    });
  }
  submit(){
    this.clienteForm.value;
    this.cliente = this.clienteForm.value;
    this.router.navigate(['/tabla-viajes-component', this.cliente]);   
  }

}
