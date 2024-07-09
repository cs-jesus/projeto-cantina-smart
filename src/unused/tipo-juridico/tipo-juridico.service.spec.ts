import { Test, TestingModule } from '@nestjs/testing';
import { TipoJuridicoService } from './tipo-juridico.service';

describe('TipoJuridicoService', () => {
  let service: TipoJuridicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoJuridicoService],
    }).compile();

    service = module.get<TipoJuridicoService>(TipoJuridicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
