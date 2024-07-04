import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoInstituicaoDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;
}
