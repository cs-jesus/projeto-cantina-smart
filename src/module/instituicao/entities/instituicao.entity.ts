import { Prisma } from "@prisma/client";

export class Instituicao {
    fk_tipo: number;
    nome: string;
    sigla?: string;
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput;
}
