import { Test, TestingModule } from '@nestjs/testing';
import { JuridicaService } from './juridica.service';

describe('JuridicaService', () => {
  let service: JuridicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuridicaService],
    }).compile();

    service = module.get<JuridicaService>(JuridicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
