import { Prisma } from "@prisma/client";

export class TipoInstituicao implements Prisma.TipoInstituicaoCreateInput {
    descricao: string;

    instituicoes?: Prisma.InstituicaoUncheckedCreateNestedManyWithoutTipoInstituicaoInput;
}
