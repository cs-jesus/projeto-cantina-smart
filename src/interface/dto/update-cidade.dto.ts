import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCidadeDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
}
