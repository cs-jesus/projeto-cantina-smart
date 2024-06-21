import { Test, TestingModule } from '@nestjs/testing';
import { TipoEstabelecimentoService } from './tipo-estabelecimento.service';

describe('TipoEstabelecimentoService', () => {
  let service: TipoEstabelecimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoEstabelecimentoService],
    }).compile();

    service = module.get<TipoEstabelecimentoService>(TipoEstabelecimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
