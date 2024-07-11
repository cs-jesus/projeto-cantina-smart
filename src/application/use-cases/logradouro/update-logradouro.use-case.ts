import { Injectable } from "@nestjs/common";
import { Logradouro } from "src/domain/entities/logradouro.entity";
import { LogradouroService } from "src/domain/service/logradouro.service";

@Injectable()
export class UpdateLogradouroUseCase {
    constructor(private readonly logradouroService: LogradouroService) { }

    async execute(id: number, nome: string): Promise<Logradouro> {
        return this.logradouroService.updateLogradouro(id, nome)
    }
}
