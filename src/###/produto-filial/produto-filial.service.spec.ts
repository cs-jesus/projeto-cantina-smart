import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoFilialService } from './produto-filial.service';

describe('ProdutoFilialService', () => {
  let service: ProdutoFilialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutoFilialService],
    }).compile();

    service = module.get<ProdutoFilialService>(ProdutoFilialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
