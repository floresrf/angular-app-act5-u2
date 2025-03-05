import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  tareas: string[] = [
    'Aprender Angular',
    'Desarrollar una App',
    'Aprender TypeScript',
  ];

  agregarTarea(nuevaTarea: string): void {
    if (nuevaTarea) {
    this.tareas.push(nuevaTarea);
    }
  }
}