import { Injectable } from '@nestjs/common';
import { CreateCategoriaProdutoDto } from './dto/create-categoria-produto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoria-produto.dto';

@Injectable()
export class CategoriaProdutoService {
  create(createCategoriaProdutoDto: CreateCategoriaProdutoDto) {
    return 'This action adds a new categoriaProduto';
  }

  getAll() {
    return `This action returns all categoriaProduto`;
  }

  getById(id: number) {
    return `This action returns a #${id} categoriaProduto`;
  }

  update(id: number, updateCategoriaProdutoDto: UpdateCategoriaProdutoDto) {
    return `This action updates a #${id} categoriaProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaProduto`;
  }
}
