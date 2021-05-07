import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './paginas/admin/admin.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { LoginComponent } from './paginas/login/login.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { IsLogueadoGuard } from './guard/isLogueado/is-logueado.guard';

const routes: Routes = [
   {
     path:'login',
     component:LoginComponent
   },
   {
     path:'formulario',
     component:ListadoComponent
   },
   {
     path:'admin',
     component:AdminComponent,
     canActivate:[IsLogueadoGuard]
   },
   {
    path:'bienvenida',
    component:BienvenidaComponent
  },
  {
    path:'',
    redirectTo:'formulario',
    pathMatch:'full'
  },
  {
    path:'**', ///todo lo demás que no encaje (**)
    redirectTo:'formulario',
    pathMatch:'full'
  }

  ///si alguien entra a la ruta '/' quiero que vaya al listado
  ///quiero que s alguien pone unas rutas que no estan aqui


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
