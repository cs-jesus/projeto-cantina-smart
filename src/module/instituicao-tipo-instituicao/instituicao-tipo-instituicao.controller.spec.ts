import { Test, TestingModule } from '@nestjs/testing';
import { InstituicaoTipoInstituicaoController } from './instituicao-tipo-instituicao.controller';
import { InstituicaoTipoInstituicaoService } from './instituicao-tipo-instituicao.service';

describe('InstituicaoTipoInstituicaoController', () => {
  let controller: InstituicaoTipoInstituicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstituicaoTipoInstituicaoController],
      providers: [InstituicaoTipoInstituicaoService],
    }).compile();

    controller = module.get<InstituicaoTipoInstituicaoController>(InstituicaoTipoInstituicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
