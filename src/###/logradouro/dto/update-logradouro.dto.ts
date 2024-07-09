import { PartialType } from '@nestjs/mapped-types';
import { CreateLogradouroDto } from './create-logradouro.dto';

export class UpdateLogradouroDto extends PartialType(CreateLogradouroDto) {}
