import { Prisma } from "@prisma/client";

export class Instituicao implements Prisma.InstituicaoCreateInput {
   
    nome: string;
    sigla?: string | null;
    associacoes?: Prisma.TipoInstituicaoAssociativaUncheckedCreateNestedManyWithoutInstituicaoInput
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput
}
