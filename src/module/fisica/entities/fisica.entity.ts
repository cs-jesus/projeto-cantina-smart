import { Prisma } from "@prisma/client";

export class Fisica implements Prisma.FisicaCreateInput {
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    estabelecimentos?: Prisma.EstabelecimentoUncheckedCreateNestedManyWithoutFisicaInput;
    colaboradores?: Prisma.ColaboradorUncheckedCreateNestedManyWithoutFisicaInput;
}
