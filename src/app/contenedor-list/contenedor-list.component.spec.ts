import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorListComponent } from './contenedor-list.component';

describe('ContenedorListComponent', () => {
  let component: ContenedorListComponent;
  let fixture: ComponentFixture<ContenedorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorListComponent]
    });
    fixture = TestBed.createComponent(ContenedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
