import { Test, TestingModule } from '@nestjs/testing';
import { CidadeService } from './cidade.service';

describe('CidadeService', () => {
  let service: CidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CidadeService],
    }).compile();

    service = module.get<CidadeService>(CidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
