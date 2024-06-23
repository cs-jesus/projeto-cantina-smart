import { Prisma } from "@prisma/client";

export class Instituicao implements Prisma.InstituicaoCreateInput {
    nome: string;
    sigla?: string;
    associacoes?: Prisma.InstituicaoTipoInstituicaoUncheckedCreateNestedManyWithoutInstituicaoInput;
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput;

}
