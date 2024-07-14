import { Injectable } from "@nestjs/common";
import { BairroService } from "src/domain/services/bairro.service";

@Injectable()
export class DeleteBairroUseCase {
    constructor(private readonly bairroService: BairroService) { }

    async execute(id: number): Promise<void> {
        return this.bairroService.deleteBairro(+id);
    }
}