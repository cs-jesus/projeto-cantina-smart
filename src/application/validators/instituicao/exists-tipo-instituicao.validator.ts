import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

@ValidatorConstraint({ name: 'existsTipoInstituicao', async: true })
@Injectable()
export class ExistsTipoInstituicaoValidator implements ValidatorConstraintInterface {
    constructor(private readonly prisma: PrismaService) { }

    async validate(tipoInstituicaoId: any, args: ValidationArguments) {
        // Verifica se tipoInstituicaoId é definido antes de acessar qualquer propriedade
        if (typeof tipoInstituicaoId !== 'number') {
            return false;
        }

        const tipoInstituicao = await this.prisma.tipoInstituicao.findUnique({
            where: { id: tipoInstituicaoId },
        });
        return !!tipoInstituicao;
    }

    defaultMessage(args: ValidationArguments) {
        return `TipoInstituicao com ID ${args.value} não existe`;
    }
}
