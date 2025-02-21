import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";
import { ComponentParentComponent } from './component-parent/component-parent.component';

@Component({
  selector: 'app-root',
  imports: [ComponentParentComponent, RouterOutlet, TarjetaProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
