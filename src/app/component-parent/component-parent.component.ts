import { Component, ViewChild  } from '@angular/core';
import { ComponentChildComponent } from './component-child/component-child.component';

@Component({
  selector: 'app-component-parent',
  imports: [ComponentChildComponent],
  templateUrl: './component-parent.component.html',
  styleUrl: './component-parent.component.css'
})
export class ComponentParentComponent {
  
  @ViewChild(ComponentChildComponent) childComponent!: ComponentChildComponent;

  parent = {
    defaultmsg: "Country:"
  }
}
