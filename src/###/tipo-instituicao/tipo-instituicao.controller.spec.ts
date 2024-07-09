import { Test, TestingModule } from '@nestjs/testing';
import { TipoInstituicaoController } from './tipo-instituicao.controller';
import { TipoInstituicaoService } from './tipo-instituicao.service';

describe('TipoInstituicaoController', () => {
  let controller: TipoInstituicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoInstituicaoController],
      providers: [TipoInstituicaoService],
    }).compile();

    controller = module.get<TipoInstituicaoController>(TipoInstituicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
