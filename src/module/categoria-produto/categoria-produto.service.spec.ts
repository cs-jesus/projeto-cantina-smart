import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaProdutoService } from './categoria-produto.service';

describe('CategoriaProdutoService', () => {
  let service: CategoriaProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaProdutoService],
    }).compile();

    service = module.get<CategoriaProdutoService>(CategoriaProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
