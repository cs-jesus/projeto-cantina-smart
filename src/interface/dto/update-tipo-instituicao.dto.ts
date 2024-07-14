import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTipoInstituicaoDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;
}
