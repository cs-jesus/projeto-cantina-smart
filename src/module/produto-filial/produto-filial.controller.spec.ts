import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoFilialController } from './produto-filial.controller';
import { ProdutoFilialService } from './produto-filial.service';

describe('ProdutoFilialController', () => {
  let controller: ProdutoFilialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoFilialController],
      providers: [ProdutoFilialService],
    }).compile();

    controller = module.get<ProdutoFilialController>(ProdutoFilialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
