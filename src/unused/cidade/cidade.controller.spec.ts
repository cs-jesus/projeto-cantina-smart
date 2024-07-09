import { Test, TestingModule } from '@nestjs/testing';
import { CidadeController } from './cidade.controller';
import { CidadeService } from './cidade.service';

describe('CidadeController', () => {
  let controller: CidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CidadeController],
      providers: [CidadeService],
    }).compile();

    controller = module.get<CidadeController>(CidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
