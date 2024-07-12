import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateInstituicaoDto {
    @IsNotEmpty()
    @IsString()
    nome: string;
  
    @IsString()
    sigla?: string;
  
    @IsNotEmpty()
    @IsNumber()
    tipoInstituicaoId: number; // Certifique-se de que este campo esteja corretamente nomeado
  }