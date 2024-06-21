import { Test, TestingModule } from '@nestjs/testing';
import { TipoEstabelecimentoController } from './tipo-estabelecimento.controller';
import { TipoEstabelecimentoService } from './tipo-estabelecimento.service';

describe('TipoEstabelecimentoController', () => {
  let controller: TipoEstabelecimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoEstabelecimentoController],
      providers: [TipoEstabelecimentoService],
    }).compile();

    controller = module.get<TipoEstabelecimentoController>(TipoEstabelecimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
