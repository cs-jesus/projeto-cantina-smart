import { Injectable } from "@nestjs/common";
import { Logradouro } from "src/domain/entities/logradouro.entity";
import { LogradouroService } from "src/domain/services/logradouro.service";

@Injectable()
export class FindAllLogradouros {
    constructor(private readonly logradouroService: LogradouroService) { }

    async execute(): Promise<Logradouro[]> {
        return this.logradouroService.findAllLogradouros();
    }
}
