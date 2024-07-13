import { Injectable } from "@nestjs/common";
import { LogradouroService } from "src/domain/services/logradouro.service";

@Injectable()
export class DeleteLogradouroUseCase {
    constructor(private readonly logradouroService: LogradouroService) { }

    async execute(id: number): Promise<void> {
        return this.logradouroService.deleteLogradouro(+id);
    }
}