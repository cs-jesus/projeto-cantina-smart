import { Test, TestingModule } from '@nestjs/testing';
import { TipoInstituicaoService } from './tipo-instituicao.service';

describe('TipoInstituicaoService', () => {
  let service: TipoInstituicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoInstituicaoService],
    }).compile();

    service = module.get<TipoInstituicaoService>(TipoInstituicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
