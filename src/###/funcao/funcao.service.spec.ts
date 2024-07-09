import { Test, TestingModule } from '@nestjs/testing';
import { FuncaoService } from './funcao.service';

describe('FuncaoService', () => {
  let service: FuncaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuncaoService],
    }).compile();

    service = module.get<FuncaoService>(FuncaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
