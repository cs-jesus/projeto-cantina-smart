import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEstadoDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
}
