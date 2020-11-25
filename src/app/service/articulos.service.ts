import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  id_articulo: number;
  url='http://localhost/conexion/conexion.php';
  constructor(private http: HttpClient) { }
  
  recuperarTodos(){
    return this.http.get(`http://localhost/conexion/recuperartodos.php`);
  }
  alta(articulo){
    return this.http.post(`http://localhost/conexion/alta.php`, JSON.stringify(articulo));
  }
  baja(id:number){
    return this.http.get(`http://localhost/conexion/baja.php?id=${this.id_articulo}`)
  } 
  seleccionar(id:number){
    return this.http.get(`http://localhost/conexion/seleccionar.php?id=${this.id_articulo}`)
  }
  modificacion(articulo){
    return this.http.post(`http://localhost/conexion/modificacion.php`, JSON.stringify(articulo));
  }
}
