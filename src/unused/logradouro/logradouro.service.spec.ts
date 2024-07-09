import { Test, TestingModule } from '@nestjs/testing';
import { LogradouroService } from './logradouro.service';

describe('LogradouroService', () => {
  let service: LogradouroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogradouroService],
    }).compile();

    service = module.get<LogradouroService>(LogradouroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
