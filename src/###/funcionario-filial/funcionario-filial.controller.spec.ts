import { Test, TestingModule } from '@nestjs/testing';
import { FuncionarioFilialController } from './funcionario-filial.controller';
import { FuncionarioFilialService } from './funcionario-filial.service';

describe('FuncionarioFilialController', () => {
  let controller: FuncionarioFilialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncionarioFilialController],
      providers: [FuncionarioFilialService],
    }).compile();

    controller = module.get<FuncionarioFilialController>(FuncionarioFilialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
