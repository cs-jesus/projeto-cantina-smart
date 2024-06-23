import { Injectable } from '@nestjs/common';
import { CreateProdutoFilialDto } from './dto/create-produto-filial.dto';
import { UpdateProdutoFilialDto } from './dto/update-produto-filial.dto';

@Injectable()
export class ProdutoFilialService {
  create(createProdutoFilialDto: CreateProdutoFilialDto) {
    return 'This action adds a new produtoFilial';
  }

  findAll() {
    return `This action returns all produtoFilial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtoFilial`;
  }

  update(id: number, updateProdutoFilialDto: UpdateProdutoFilialDto) {
    return `This action updates a #${id} produtoFilial`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtoFilial`;
  }
}
