import { Test, TestingModule } from '@nestjs/testing';
import { TipoJuridicoController } from './tipo-juridico.controller';
import { TipoJuridicoService } from './tipo-juridico.service';

describe('TipoJuridicoController', () => {
  let controller: TipoJuridicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoJuridicoController],
      providers: [TipoJuridicoService],
    }).compile();

    controller = module.get<TipoJuridicoController>(TipoJuridicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
