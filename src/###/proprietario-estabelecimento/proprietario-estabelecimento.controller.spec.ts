import { Test, TestingModule } from '@nestjs/testing';
import { ProprietarioEstabelecimentoController } from './proprietario-estabelecimento.controller';
import { ProprietarioEstabelecimentoService } from './proprietario-estabelecimento.service';

describe('ProprietarioEstabelecimentoController', () => {
  let controller: ProprietarioEstabelecimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProprietarioEstabelecimentoController],
      providers: [ProprietarioEstabelecimentoService],
    }).compile();

    controller = module.get<ProprietarioEstabelecimentoController>(ProprietarioEstabelecimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
