import { Test, TestingModule } from '@nestjs/testing';
import { EndrecoController } from './endreco.controller';
import { EndrecoService } from './endreco.service';

describe('EndrecoController', () => {
  let controller: EndrecoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EndrecoController],
      providers: [EndrecoService],
    }).compile();

    controller = module.get<EndrecoController>(EndrecoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
