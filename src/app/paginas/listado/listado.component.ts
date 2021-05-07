import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as dni from 'dni-js-validator';
import * as EmailValidator from 'email-validator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  nombre:string;
  // apellido1:string;
  // apellido2:string;
  rol:string;
  jornada:number;
  nombreWrong:string = null; //null, error o succes
  phoneWrong:string = null;
  dniWrong:string = null;
  emailWrong:string = null;
  alumnosRef;
  alumnosArray = [];


  constructor(private route: Router,
              private db: AngularFirestore,
              private snackbar:MatSnackBar) {

    //const alumnos = this.db.collection('alumnos').valueChanges();//Observable -> "Definimos en canal"
    const alumnos = this.db.collection('alumnos').snapshotChanges();//Observable -> Más complejo que solo el value, para obtener el id.
    alumnos.subscribe(console.log);

    this.alumnosRef = this.db.collection('alumnos'); //Guardamos el canal

    // alumnos.subscribe((res)=>{ //Nos subscribimos al canal "lo encendemos/escuchamos el canal"
    // this.alumnosArray = res;
    // });

    //Muestra solo nombre:
    /*alumnos.subscribe((res:any)=>{
      res.map((a)=>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log('DATA', data);
        console.log('id', id)
        this.alumnosArray.push(data);
      })
    });*/
    alumnos.subscribe((res:any)=>{
      const arrayMapped = res.map((a)=>{
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {data, id}
      })
      this.alumnosArray = arrayMapped;
      console.log('ARRAY MAPPED', arrayMapped);
    });



  }

  crearAlumno(nombre,telefono,dni,email){

    if(this.comprobacion()){
      this.alumnosRef.doc(dni).set({
        nombre,
        telefono,
        dni,
        email,
        rol: this.rol,
        date: new Date(),
        jornada: this.jornada
      })
      .then(()=>{
        this.snackbar.open('Datos recibidos correctamente', 'OK')
        this.route.navigateByUrl("bienvenida");
      })
      .catch((e)=>{
        this.snackbar.open('Error del servidor','OK', {
          panelClass: ['errorSnackbar']
          });
      })

    }else{

      (this.nombreWrong == null) ? this.nombreWrong = 'error' : null;
      (this.phoneWrong == null) ? this.phoneWrong = 'error' : null;
      (this.emailWrong == null) ? this.emailWrong = 'error' : null;
      (this.dniWrong == null) ? this.dniWrong = 'error' : null;
      this.snackbar.open('El formulario no es correcto, revísalo.','OK', {
        panelClass: ['errorSnackbar']
        });

    }
    this.alumnosRef.doc(dni).set({
      nombre,
      // apellido1,
      // apellido2,
      telefono,
      dni,
      email,
      rol: this.rol,
      date: new Date(),
      jornada: this.jornada
    })
  }


  rolDefinido(rolEv){
    console.log('rol',rolEv);
    this.rol = rolEv;

  }

  jornadaDefinida(jorEv){
    console.log('jornadaEmitida',jorEv);
    this.jornada = jorEv;
  }

  comprobarNombre(nombre:string){
    const length = nombre.length;
    (length > 30 || length < 1 ) ? this.nombreWrong = 'error' : this.nombreWrong = 'success';

  }

  comprobarTelefono(telef:string){

    (telef.length == 9) ? this.phoneWrong = 'success' : this.phoneWrong = 'error';

    /*var pattern = new RegExp("\\d{9}");
    if(telef.length == 9 && pattern.test(telef)){
      this.phoneWrong = 'success';
    }else{
      this.phoneWrong = 'error';
    }*/
      ​
  }

  ngOnInit(){
    console.log('DNI', dni.isValid('47732810J'));

  }

  comprobarDNI(dniParam:string){
    (dni.isValid(dniParam)) ? this.dniWrong = 'success' : this.dniWrong = 'error';

  }

  comprobarEmail(mail:string){
    (EmailValidator.validate(mail)) ? this.emailWrong = 'success' : this.emailWrong = 'error';

  }

  comprobacion(){
    const nombre:boolean = (this.nombreWrong === 'success'); //True o False
    const phone:boolean = (this.phoneWrong === 'success');
    const email:boolean = (this.emailWrong === 'success');
    const dni:boolean = (this.dniWrong === 'success');

    if( nombre && phone && email && dni ){
      return true;
    }else{
      return false;
    }

  }

}
