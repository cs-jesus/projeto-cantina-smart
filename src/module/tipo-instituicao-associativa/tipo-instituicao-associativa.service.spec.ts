import { Test, TestingModule } from '@nestjs/testing';
import { TipoInstituicaoAssociativaService } from './tipo-instituicao-associativa.service';

describe('TipoInstituicaoAssociativaService', () => {
  let service: TipoInstituicaoAssociativaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoInstituicaoAssociativaService],
    }).compile();

    service = module.get<TipoInstituicaoAssociativaService>(TipoInstituicaoAssociativaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
