import { Test, TestingModule } from '@nestjs/testing';
import { TipoInstituicaoAssociativaController } from './tipo-instituicao-associativa.controller';
import { TipoInstituicaoAssociativaService } from './tipo-instituicao-associativa.service';

describe('TipoInstituicaoAssociativaController', () => {
  let controller: TipoInstituicaoAssociativaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoInstituicaoAssociativaController],
      providers: [TipoInstituicaoAssociativaService],
    }).compile();

    controller = module.get<TipoInstituicaoAssociativaController>(TipoInstituicaoAssociativaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
