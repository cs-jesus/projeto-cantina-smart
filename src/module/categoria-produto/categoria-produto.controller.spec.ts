import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaProdutoController } from './categoria-produto.controller';
import { CategoriaProdutoService } from './categoria-produto.service';

describe('CategoriaProdutoController', () => {
  let controller: CategoriaProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaProdutoController],
      providers: [CategoriaProdutoService],
    }).compile();

    controller = module.get<CategoriaProdutoController>(CategoriaProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
