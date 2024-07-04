import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateInstituicaoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  sigla?: string;

  @IsNotEmpty()
  @IsNumber()
  tipoInstituicaoId: number;
}
