import { Prisma } from "@prisma/client";

export class TipoJuridico implements Prisma.TipoJuridicoCreateInput {

    //Definição de atributo básico
    descricao: string;

    //Declara que a entidade será refereciada como chave estrangeira    
    associacoes?: Prisma.EstabelecimentoUncheckedCreateNestedManyWithoutTipoJuridicoInput;
}
