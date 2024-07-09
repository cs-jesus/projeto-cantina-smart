import { Test, TestingModule } from '@nestjs/testing';
import { PoloService } from './polo.service';

describe('PoloService', () => {
  let service: PoloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoloService],
    }).compile();

    service = module.get<PoloService>(PoloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
