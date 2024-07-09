import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoFilialDto } from './create-produto-filial.dto';

export class UpdateProdutoFilialDto extends PartialType(CreateProdutoFilialDto) {}
