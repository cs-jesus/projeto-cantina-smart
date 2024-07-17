import { Injectable } from "@nestjs/common";
import { Logradouro } from "src/domain/entities/logradouro.entity";
import { LogradouroService } from "src/domain/services/logradouro.service";

@Injectable()
export class CreateLogradouroUseCase {
    constructor(private readonly logradouroService: LogradouroService) { }

    async execute(nome: string): Promise<Logradouro> {
        return this.logradouroService.validateOrCreateLogradouro(nome);
        
    }
}
