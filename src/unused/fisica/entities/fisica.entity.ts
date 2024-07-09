import { Prisma } from "@prisma/client";

export class Fisica implements Prisma.FisicaCreateInput {

    //Definição de atributo básico
    cpf: string;
    nome: string;
    email: string;
    senha: string;

    //Declara que a entidade será refereciada como chave estrangeira    
    estabelecimentos?: Prisma.EstabelecimentoUncheckedCreateNestedManyWithoutFisicaInput;
    colaboradores?: Prisma.ColaboradorUncheckedCreateNestedManyWithoutFisicaInput;
}
