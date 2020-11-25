import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms' 


const routes : Routes = 
[{path:'articulos', component: ArticulosComponent},
{path:'clientes', component: ClientesComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( routes)],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
