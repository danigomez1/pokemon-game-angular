import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioGomezComponent } from './iniciar-sessio-gomez.component';

describe('IniciarSessioGomezComponent', () => {
  let component: IniciarSessioGomezComponent;
  let fixture: ComponentFixture<IniciarSessioGomezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioGomezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioGomezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
