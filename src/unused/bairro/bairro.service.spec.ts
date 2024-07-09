import { Test, TestingModule } from '@nestjs/testing';
import { BairroService } from './bairro.service';

describe('BairroService', () => {
  let service: BairroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BairroService],
    }).compile();

    service = module.get<BairroService>(BairroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
