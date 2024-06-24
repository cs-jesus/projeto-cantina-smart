import {IsInt, IsNotEmpty, IsString } from "class-validator";
import { Fisica } from "../entities/fisica.entity";

export class CreateFisicaDto extends Fisica{
    @IsNotEmpty({message: "O campo não pode estar vazio"})
    @IsString({message: "O tipo de dado dever ser uma string"})
    cpf: string;
    nome: string;
    email: string;
    senha: string;
}
