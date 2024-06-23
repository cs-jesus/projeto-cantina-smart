import { Test, TestingModule } from '@nestjs/testing';
import { InstituicaoTipoInstituicaoService } from './instituicao-tipo-instituicao.service';

describe('InstituicaoTipoInstituicaoService', () => {
  let service: InstituicaoTipoInstituicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstituicaoTipoInstituicaoService],
    }).compile();

    service = module.get<InstituicaoTipoInstituicaoService>(InstituicaoTipoInstituicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
