import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueadoService {

  estoyLogueado=false;

  constructor() { }

  getEstado(){
    //devolver el dato estoy logueado
    return this.estoyLogueado
  }

  setEstado(estado:boolean){
    this.estoyLogueado=estado
  }

}
