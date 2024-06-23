import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaProdutoDto } from './create-categoria-produto.dto';

export class UpdateCategoriaProdutoDto extends PartialType(CreateCategoriaProdutoDto) {}
