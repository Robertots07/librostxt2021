import { TestBed } from '@angular/core/testing';

import { ContenidoService } from './contenido.service';

describe('ContenidoService', () => {
  let service: ContenidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
