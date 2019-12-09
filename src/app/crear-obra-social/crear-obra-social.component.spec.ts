import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearObraSocialComponent } from './crear-obra-social.component';

describe('CrearObraSocialComponent', () => {
  let component: CrearObraSocialComponent;
  let fixture: ComponentFixture<CrearObraSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearObraSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearObraSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
