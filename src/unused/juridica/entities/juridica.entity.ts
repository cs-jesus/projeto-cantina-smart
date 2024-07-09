import { Prisma } from "@prisma/client";

export class Juridica implements Prisma.JuridicaCreateInput {

    //Definição de atributo básico
    cnpj: string;
    social: string;
    fantasia: string;
    email: string;

    //Declara que a entidade será refereciada como chave estrangeira  
    estabelecimentos?: Prisma.EstabelecimentoUncheckedCreateNestedManyWithoutJuridicaInput;
}
