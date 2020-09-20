import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{Rutina} from 'src/app/clase/Rutina';
@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    rutinas: Rutina;
    registro: any;
    rutinaForm= this.fb.group({});
  ngOnInit(): void {
    this.registro = this.rutaActiva.snapshot.params;
    if(Object.keys(this.registro).length){
      this.rutinas= this.registro;
    }
      this.initForm(this.rutinas);
 }

  initForm(editarRutina: Rutina) {
    this.rutinaForm = this.fb.group({
      peso: [editarRutina ? editarRutina.peso : ''],
      repeticiones: [editarRutina ? editarRutina.repeticiones : ''],
      rutina: [editarRutina ? editarRutina.rutina : ''],
      
    });
  }
  submit(){
    this.rutinaForm.value;
    this.rutinas = this.rutinaForm.value;
    this.router.navigate(['/tabla-clientes-component', this.rutinas]);   
  }

}
