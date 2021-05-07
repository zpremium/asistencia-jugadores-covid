import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.css']
})
export class JornadasComponent implements OnInit {

  selectedItem;
  jorList = [];
  cuantasJornadasHay;
  jornadaActual;
  subscripcionAJornadas: Subscription;
  @Output() jornada = new EventEmitter();

  constructor( private db: AngularFirestore) {

    /*
    //PROMESA 1
    this.db.collection('jornadas').doc('jornadas').get().toPromise()
    .then((res)=>{
        this.cuantasJornadasHay = res.data();
    })
    .catch((e)=>{
      console.log(e);
    });
    //PROMESA 2
    this.db.collection('jornadas').doc('jornadaActual').get().toPromise().then((res)=>{
      this.jornadaActual = res.data();
    })
    .catch((e)=>{
      console.log(e);
    });
    */


  }


  ngOnInit(): void {

    this.subscripcionAJornadas = this.db.collection('jornadas').valueChanges().subscribe((res)=>{ //Con el subscribe, "eschuchamos" al canal abierto.

        console.log('coleccion jornads',res);

        this.cuantasJornadasHay = res.find((item)=>{
          return item['jornadas']
        });

        this.crearArrayJornadas(this.cuantasJornadasHay.jornadas);

        this.jornadaActual = res.find((item)=>{
          return item['jornadaActual']
        });

        this.selectedItem = this.jornadaActual.jornadaActual;
        //Emitimos que por defecto la seleccion es Jugador
        this.jornada.emit(this.selectedItem);

      });

  }

  onChange(event){
    console.log('event',event);
    this.jornada.emit(event);
  }

  crearArrayJornadas(jornadas:number){
    this.jorList = [];
    for (let i = 0; i < jornadas; i++) {
      this.jorList.push(i+1);
    }

  }

  ngOnDestroy(){
    if(this.subscripcionAJornadas){
      this.subscripcionAJornadas.unsubscribe();
    }
  }

}
