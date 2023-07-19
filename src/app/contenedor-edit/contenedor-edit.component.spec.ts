import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorEditComponent } from './contenedor-edit.component';

describe('ContenedorEditComponent', () => {
  let component: ContenedorEditComponent;
  let fixture: ComponentFixture<ContenedorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorEditComponent]
    });
    fixture = TestBed.createComponent(ContenedorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
