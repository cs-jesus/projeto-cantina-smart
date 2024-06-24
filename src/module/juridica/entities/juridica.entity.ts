import { Prisma } from "@prisma/client";

export class Juridica implements Prisma.JuridicaCreateInput {
    cnpj: string;
    social: string;
    fantasia: string;
    email: string;
    estabelecimentos?: Prisma.EstabelecimentoCreateNestedManyWithoutJuridicaInput;
}
