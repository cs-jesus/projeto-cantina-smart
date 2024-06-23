import { Test, TestingModule } from '@nestjs/testing';
import { UnidadeMedidaController } from './unidade-medida.controller';
import { UnidadeMedidaService } from './unidade-medida.service';

describe('UnidadeMedidaController', () => {
  let controller: UnidadeMedidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadeMedidaController],
      providers: [UnidadeMedidaService],
    }).compile();

    controller = module.get<UnidadeMedidaController>(UnidadeMedidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
