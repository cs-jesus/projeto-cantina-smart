import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioFilialDto } from './create-funcionario-filial.dto';

export class UpdateFuncionarioFilialDto extends PartialType(CreateFuncionarioFilialDto) {}
