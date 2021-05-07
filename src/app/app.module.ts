import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './paginas/login/login.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoRolComponent } from './componente/listado-rol/listado-rol.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { PipeMinusculasPipe } from './pipes/pipeMinusculas/pipe-minusculas.pipe';
import { AumentarDirective } from './directives/aumentar/aumentar.directive';
import {MatTableModule} from '@angular/material/table';
import { IconoRolPipe } from './pipes/icono-rol.pipe';
import {MatSortModule} from '@angular/material/sort';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    ListadoRolComponent,
    AdminComponent,
    ListadoAlumnosComponent,
    JornadasComponent,
    BienvenidaComponent,
    PipeMinusculasPipe,
    AumentarDirective,
    IconoRolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    MatCardModule, BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
