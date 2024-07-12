import { Injectable } from "@nestjs/common";
import { Logradouro } from "src/domain/entities/logradouro.entity";
import { LogradouroService } from "src/domain/service/logradouro.service";

@Injectable()
export class FindLogradouroByIdUseCase {
    constructor(private readonly logradouroService: LogradouroService) { }

    async execute(id: number): Promise<Logradouro | null> {
        return this.logradouroService.findLogradouroById(+id);
    }
}
