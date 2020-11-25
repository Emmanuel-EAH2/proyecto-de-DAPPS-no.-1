import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = 
[{path:'articulos', component: ArticulosComponent}, 
{path:'clientes', component: ClientesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }