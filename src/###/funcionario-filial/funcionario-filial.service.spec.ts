import { Test, TestingModule } from '@nestjs/testing';
import { FuncionarioFilialService } from './funcionario-filial.service';

describe('FuncionarioFilialService', () => {
  let service: FuncionarioFilialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuncionarioFilialService],
    }).compile();

    service = module.get<FuncionarioFilialService>(FuncionarioFilialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
