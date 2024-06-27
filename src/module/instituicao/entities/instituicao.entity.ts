import { Prisma } from "@prisma/client";

export class Instituicao implements Prisma.InstituicaoCreateInput {

    fk_tipo: number;
    nome: string;
    sigla?: string;

    tipoInstituicao: Prisma.TipoInstituicaoCreateNestedOneWithoutInstituicoesInput;

    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput;
}
