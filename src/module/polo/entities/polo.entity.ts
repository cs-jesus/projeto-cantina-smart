import { Prisma } from "@prisma/client";

export class Polo implements Prisma.PoloCreateInput {

    //Definição de atributo básico
    complemento?: string;
    nome: string;

    //Definição de chave estrangeira
    instituicao: Prisma.InstituicaoCreateNestedOneWithoutPolosInput;
    endereco: Prisma.EnderecoCreateNestedOneWithoutPolosInput;

    //Declara que a entidade será refereciada como chave estrangeira    
    filiais?: Prisma.FilialCreateNestedManyWithoutPoloInput;
}
