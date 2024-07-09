import { Test, TestingModule } from '@nestjs/testing';
import { FilialService } from './filial.service';

describe('FilialService', () => {
  let service: FilialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilialService],
    }).compile();

    service = module.get<FilialService>(FilialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
