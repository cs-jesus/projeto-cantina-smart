import { Injectable } from '@nestjs/common';
import { CreateEndrecoDto } from './dto/create-endreco.dto';
import { UpdateEndrecoDto } from './dto/update-endreco.dto';

@Injectable()
export class EndrecoService {
  create(createEndrecoDto: CreateEndrecoDto) {
    return 'This action adds a new endreco';
  }

  getAll() {
    return `This action returns all endreco`;
  }

  getById(id: number) {
    return `This action returns a #${id} endreco`;
  }

  update(id: number, updateEndrecoDto: UpdateEndrecoDto) {
    return `This action updates a #${id} endreco`;
  }

  remove(id: number) {
    return `This action removes a #${id} endreco`;
  }
}
