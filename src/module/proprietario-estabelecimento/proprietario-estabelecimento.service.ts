import { Injectable } from '@nestjs/common';
import { CreateProprietarioEstabelecimentoDto } from './dto/create-proprietario-estabelecimento.dto';
import { UpdateProprietarioEstabelecimentoDto } from './dto/update-proprietario-estabelecimento.dto';

@Injectable()
export class ProprietarioEstabelecimentoService {
  create(createProprietarioEstabelecimentoDto: CreateProprietarioEstabelecimentoDto) {
    return 'This action adds a new proprietarioEstabelecimento';
  }

  findAll() {
    return `This action returns all proprietarioEstabelecimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proprietarioEstabelecimento`;
  }

  update(id: number, updateProprietarioEstabelecimentoDto: UpdateProprietarioEstabelecimentoDto) {
    return `This action updates a #${id} proprietarioEstabelecimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} proprietarioEstabelecimento`;
  }
}
