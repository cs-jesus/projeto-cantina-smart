import { Test, TestingModule } from '@nestjs/testing';
import { ProprietarioEstabelecimentoService } from './proprietario-estabelecimento.service';

describe('ProprietarioEstabelecimentoService', () => {
  let service: ProprietarioEstabelecimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProprietarioEstabelecimentoService],
    }).compile();

    service = module.get<ProprietarioEstabelecimentoService>(ProprietarioEstabelecimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
