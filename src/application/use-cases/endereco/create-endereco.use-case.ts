import { Injectable } from "@nestjs/common";
import { Endereco } from "src/domain/entities/endereco.entity";
import { EnderecoService } from "src/domain/services/endereco.service";

@Injectable()
export class CreateEnderecoUseCase {
    constructor(private readonly enderecoService: EnderecoService) {}

    async execute(
        cep: string,
        numero: string,
        logradouroNome: string,
        bairroNome: string,
        cidadeNome: string,
        estadoUf: string,
    ): Promise<Endereco> {
        return this.enderecoService.createEndereco(
            cep,
            numero, 
            logradouroNome,
            bairroNome,
            cidadeNome,
            estadoUf
        );
    }
}