import { Injectable } from '@nestjs/common';
import { CreateTipoJuridicoDto } from './dto/create-tipo-juridico.dto';
import { UpdateTipoJuridicoDto } from './dto/update-tipo-juridico.dto';

@Injectable()
export class TipoJuridicoService {
  create(createTipoJuridicoDto: CreateTipoJuridicoDto) {
    return 'This action adds a new tipoJuridico';
  }

  getAll() {
    return `This action returns all tipoJuridico`;
  }

  getById(id: number) {
    return `This action returns a #${id} tipoJuridico`;
  }

  update(id: number, updateTipoJuridicoDto: UpdateTipoJuridicoDto) {
    return `This action updates a #${id} tipoJuridico`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoJuridico`;
  }
}
