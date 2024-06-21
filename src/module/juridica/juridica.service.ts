import { Injectable } from '@nestjs/common';
import { CreateJuridicaDto } from './dto/create-juridica.dto';
import { UpdateJuridicaDto } from './dto/update-juridica.dto';

@Injectable()
export class JuridicaService {
  create(createJuridicaDto: CreateJuridicaDto) {
    return 'This action adds a new juridica';
  }

  findAll() {
    return `This action returns all juridica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} juridica`;
  }

  update(id: number, updateJuridicaDto: UpdateJuridicaDto) {
    return `This action updates a #${id} juridica`;
  }

  remove(id: number) {
    return `This action removes a #${id} juridica`;
  }
}
