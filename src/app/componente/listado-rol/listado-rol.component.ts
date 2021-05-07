import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-listado-rol',
  templateUrl: './listado-rol.component.html',
  styleUrls: ['./listado-rol.component.css']
})
export class ListadoRolComponent implements OnInit {

  @Output() rol= new EventEmitter();

  selectedItem='jugador'

  rolesArray = [
    'jugador','arbitro','entrenador','otros'
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('THIS SELECTED ITEM', this.selectedItem);
    this.rol.emit(this.selectedItem);

  }

  onChange(ev:string){
    console.log('EV',ev);
    this.rol.emit(ev)

  }

  

}
