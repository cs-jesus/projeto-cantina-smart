import { Test, TestingModule } from '@nestjs/testing';
import { FisicaController } from './fisica.controller';
import { FisicaService } from './fisica.service';

describe('FisicaController', () => {
  let controller: FisicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FisicaController],
      providers: [FisicaService],
    }).compile();

    controller = module.get<FisicaController>(FisicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
