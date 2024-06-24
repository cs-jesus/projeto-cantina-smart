import {IsInt, IsNotEmpty, IsString } from "class-validator";
import { TipoJuridico } from "../entities/tipo-juridico.entity";

export class CreateTipoJuridicoDto extends TipoJuridico{
    @IsNotEmpty({message: "O campo não pode estar vazio"})
    @IsString({message: "O tipo de dado dever ser uma string"})
    descricao: string;
}
