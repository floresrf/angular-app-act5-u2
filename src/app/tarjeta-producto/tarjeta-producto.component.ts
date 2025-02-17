import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {
  nombre = 'Laptop Gamer';
  precio = 25000;
  descripcion = 'Una laptop potente para gaming y desarrollo.';
}
