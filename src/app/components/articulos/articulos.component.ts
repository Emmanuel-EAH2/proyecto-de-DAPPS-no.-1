import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  articulos = null;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost/conexion.php").subscribe( result => {
        this.articulos = result;
        // console.log(result);
      },
      error => {
        console.log('problemas');  
      }
    );  
  }
 
}
