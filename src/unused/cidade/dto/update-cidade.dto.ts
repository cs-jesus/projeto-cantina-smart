import { PartialType } from '@nestjs/mapped-types';
import { CreateCidadeDto } from './create-cidade.dto';

export class UpdateCidadeDto extends PartialType(CreateCidadeDto) {}
