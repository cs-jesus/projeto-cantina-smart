import { Test, TestingModule } from '@nestjs/testing';
import { JuridicaController } from './juridica.controller';
import { JuridicaService } from './juridica.service';

describe('JuridicaController', () => {
  let controller: JuridicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuridicaController],
      providers: [JuridicaService],
    }).compile();

    controller = module.get<JuridicaController>(JuridicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
