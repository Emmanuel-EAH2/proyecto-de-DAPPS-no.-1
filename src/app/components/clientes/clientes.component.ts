import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cliente = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost/conexionCI.php")
.subscribe(
  result  => {
    this.cliente = result;
   },
   error => {
    console.log('problemas');
   }
  );
 
  }

}
