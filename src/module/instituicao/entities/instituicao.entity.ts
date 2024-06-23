import { Prisma } from "@prisma/client";

export class Instituicao implements Prisma.InstituicaoCreateInput {
    nome: string;
    sigla?: string;
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput;
    tipoInstituicao: Prisma.TipoInstituicaoCreateNestedOneWithoutInstituicoesInput;
}
