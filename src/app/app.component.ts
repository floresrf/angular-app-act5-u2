import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Orgullo UTS';
  usuario = {
    firstName: 'Rene',
    lastName: 'Flores',
    description: 'Soy un estudiante de la carrera TIC en Desarrollo de Software multiplataforma.',
    age: 19
  };

  saludar(){
    return `Hola, ${this.usuario.firstName}`;
  }
}
