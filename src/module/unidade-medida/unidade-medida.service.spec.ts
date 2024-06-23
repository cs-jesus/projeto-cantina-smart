import { Test, TestingModule } from '@nestjs/testing';
import { UnidadeMedidaService } from './unidade-medida.service';

describe('UnidadeMedidaService', () => {
  let service: UnidadeMedidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadeMedidaService],
    }).compile();

    service = module.get<UnidadeMedidaService>(UnidadeMedidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
