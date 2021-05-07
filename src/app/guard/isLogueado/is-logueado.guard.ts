import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueadoService } from '../../servicios/logueado/logueado.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogueadoGuard implements CanActivate {

  constructor (private logueado: LogueadoService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      // if (this.logueado.getEstado()) {
      // ///este logueado
      //   return true
      // } else {
      // ///si no esta logueado
      //   return false
      // }

      return true;



    return false;
  }

}
