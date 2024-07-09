import { Test, TestingModule } from '@nestjs/testing';
import { BairroController } from './bairro.controller';
import { BairroService } from './bairro.service';

describe('BairroController', () => {
  let controller: BairroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BairroController],
      providers: [BairroService],
    }).compile();

    controller = module.get<BairroController>(BairroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
