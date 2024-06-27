import { Prisma } from "@prisma/client";

export class TipoInstituicao implements Prisma.TipoInstituicaoCreateInput {

    //Definição de atributo básico
    descricao: string;

    //Declara que a entidade será refereciada como chave estrangeira    
    instituicoes?: Prisma.InstituicaoUncheckedCreateNestedManyWithoutTipoInstituicaoInput;
}
