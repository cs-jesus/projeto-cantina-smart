import { Test, TestingModule } from '@nestjs/testing';
import { EndrecoService } from './endreco.service';

describe('EndrecoService', () => {
  let service: EndrecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndrecoService],
    }).compile();

    service = module.get<EndrecoService>(EndrecoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
