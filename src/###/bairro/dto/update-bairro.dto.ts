import { PartialType } from '@nestjs/mapped-types';
import { CreateBairroDto } from './create-bairro.dto';

export class UpdateBairroDto extends PartialType(CreateBairroDto) {}
