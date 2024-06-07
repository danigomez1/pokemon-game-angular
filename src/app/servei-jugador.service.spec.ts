import { TestBed } from '@angular/core/testing';

import { ServeiJugadorService } from './servei-jugador.service';

describe('ServeiJugadorService', () => {
  let service: ServeiJugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiJugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
