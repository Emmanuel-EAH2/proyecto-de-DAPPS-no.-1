import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticulosService} from './service/articulos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  // dia='';
  // mes='';
  // anio='';
  articulos = null;
  art = {
    id_articulo:null,
    Nombre:null,
    Departamento:null,
    Cantidad_Existencias:null,
    Costo:null,
    Precio_Venta:null,
    Descuento:null,
    Min_en_Inventario:null
  }
  cliente = null;

  constructor(private http: HttpClient, private articulosServicio:ArticulosService) {  }

  ngOnInit(){
  this.recuperarTodos();
  }
  recuperarTodos(){
  this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);


this.http.get("http://localhost/conexion/conexionCI.php")
.subscribe(
  result  => {
    this.cliente = result;
   },
   error => {
    console.log('problemas');
   }
  );

    this.http.get("http://localhost/conexion/conexion.php")
    .subscribe(
      result => {
        this.articulos = result;
        // console.log(result);
      },
      error => {
        console.log('problemas');  
      }
    );
  
  }

  alta(Nombre){
return this.http.post(`http://localhost/conexion/alta.php`, JSON.stringify(Nombre));
 }

baja(id_articulo){
  this.articulosServicio.baja(id_articulo).subscribe(datos => {
if(datos ['resultado']=='OK'){
alert(datos['mensaje']);
this.recuperarTodos();
  }
 });
}

modificacion(Nombre){
  this.articulosServicio.modificacion(this.art).subscribe(datos =>{
    if(datos['resultado']=='OK'){
      alert(datos['mensaje']);
       this.recuperarTodos();
    }
  })
}

seleccionar(id_articulo){
  this.articulosServicio.seleccionar(id_articulo).subscribe(result => this.art = result[0]);
}

hayRegistros(id_articulo){
  return true;
}


//     heyRegistros(){
//       return this.articulos.length>0;
//     }

//     seleccionar(art){
//    this.art.id_articulo=art.id_articulo;
//    this.art.Nombre=art.Nombre;
//    this.art.Departamento=art.Departamento;
//    this.art.Cantidad_Existencias=art.Cantidad_Existencias;
//    this.art.Costo=art.Costo;
//    this.art.Precio_Venta=art.Precio_Venta;
//    this.art.Descuento=art.Descuento;
//    this.art.Min_en_Inventario=art.Min_en_Inventario;
//     }

//     borrar(art){
//       for(let x=0;x<this.articulos.length;x++)
//       if(this.articulos[x].id_articulo==art.id_articulo){
//         this.articulos.splice(x,1);
//         return;
//       }
//     }

//     agregar(){
//     for(let x=0; x<this.articulos.length;x++)
//     if(this.articulos[x].id_articulo == this.art.id_articulo){
//       alert('ya existe un articulo de este tipo')
//     return;
//     }
// this.articulos.push ({
//   id_articulo: this.art.id_articulo,
//   Nombre: this.art.Nombre,
//   Departamento: this.art.Departamento,
//   Cantidad_Existencias: this.art.Cantidad_Existencias,
//   Costo: this.art.Costo,
//   Precio_Venta: this.art.Precio_Venta,
//   Descuento: this.art.Descuento,
//   Min_en_Inventario: this.art.Min_en_Inventario,
//    });
//    this.art.id_articulo=null;
//    this.art.Nombre=null;
//    this.art.Departamento=null;
//    this.art.Cantidad_Existencias=null;
//    this.art.Costo=null;
//    this.art.Precio_Venta=null;
//    this.art.Descuento=null;
//    this.art.Min_en_Inventario=null;
//   }
}