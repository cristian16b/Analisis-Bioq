import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoObrasSocialesComponent } from './listado-obras-sociales.component';

describe('ListadoObrasSocialesComponent', () => {
  let component: ListadoObrasSocialesComponent;
  let fixture: ComponentFixture<ListadoObrasSocialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoObrasSocialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoObrasSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
