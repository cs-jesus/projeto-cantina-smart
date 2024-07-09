import { PartialType } from '@nestjs/mapped-types';
import { CreateInstituicaoDto } from './create-instituicao.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateInstituicaoDto extends PartialType(CreateInstituicaoDto) {
    @IsNotEmpty({ message: 'O campo \'fk_tipo\' não pode estar vazio' })
    fk_tipo: number;
}