import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildComponent } from './component-child.component';

describe('ComponentChildComponent', () => {
  let component: ComponentChildComponent;
  let fixture: ComponentFixture<ComponentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
