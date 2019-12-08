import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaObraSocialComponent } from './fila-obra-social.component';

describe('FilaObraSocialComponent', () => {
  let component: FilaObraSocialComponent;
  let fixture: ComponentFixture<FilaObraSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaObraSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaObraSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
