import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaProdutoDto } from "./CreateCategoriaProdutoDto";

export class UpdateCategoriaProdutoDto extends PartialType(CreateCategoriaProdutoDto) { }
