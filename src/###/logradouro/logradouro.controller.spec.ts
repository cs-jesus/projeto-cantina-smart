import { Test, TestingModule } from '@nestjs/testing';
import { LogradouroController } from './logradouro.controller';
import { LogradouroService } from './logradouro.service';

describe('LogradouroController', () => {
  let controller: LogradouroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogradouroController],
      providers: [LogradouroService],
    }).compile();

    controller = module.get<LogradouroController>(LogradouroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
