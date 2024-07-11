import { Injectable } from "@nestjs/common";
import { Logradouro } from "src/domain/entities/logradouro.entity";
import { LogradouroRepository } from "src/domain/repositories/logradouro.repository";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

@Injectable()
export class PrismaLogradouroRepository implements LogradouroRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(logradouro: Logradouro): Promise<Logradouro> {
        const criado = await this.prisma.logradouro.create({
            data: {
                nome: logradouro.nome,
            },
        });
        return new Logradouro(criado.nome);
    }
    
    update(id: number, logradouro: Logradouro): Promise<Logradouro> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Logradouro[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Logradouro | null> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<Logradouro | null> {
        throw new Error("Method not implemented.");
    }

}