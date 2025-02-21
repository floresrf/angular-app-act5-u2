import { Component } from '@angular/core';

@Component({
  selector: 'app-component-child',
  imports: [],
  templateUrl: './component-child.component.html',
  styleUrl: './component-child.component.css'
})
export class ComponentChildComponent {
  child1 = {
    country: 'Italy'
  };

  child2 = {
    country: "Japan"
  }

  child3 = {
    country: "United Kingdom"
  }
}
