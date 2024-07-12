import { Test, TestingModule } from '@nestjs/testing';
import { PoloController } from './polo.controller';
import { PoloService } from './polo.service';

describe('PoloController', () => {
  let controller: PoloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoloController],
      providers: [PoloService],
    }).compile();

    controller = module.get<PoloController>(PoloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
