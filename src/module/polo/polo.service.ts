import { Injectable } from '@nestjs/common';
import { CreatePoloDto } from './dto/create-polo.dto';
import { UpdatePoloDto } from './dto/update-polo.dto';

@Injectable()
export class PoloService {
  create(createPoloDto: CreatePoloDto) {
    return 'This action adds a new polo';
  }

  getAll() {
    return `This action returns all polo`;
  }

  getById(id: number) {
    return `This action returns a #${id} polo`;
  }

  update(id: number, updatePoloDto: UpdatePoloDto) {
    return `This action updates a #${id} polo`;
  }

  remove(id: number) {
    return `This action removes a #${id} polo`;
  }
}
