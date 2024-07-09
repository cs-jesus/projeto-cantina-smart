import { Test, TestingModule } from '@nestjs/testing';
import { FisicaService } from './fisica.service';

describe('FisicaService', () => {
  let service: FisicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FisicaService],
    }).compile();

    service = module.get<FisicaService>(FisicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
