import { Prisma } from "@prisma/client";

export class Instituicao implements Prisma.InstituicaoCreateInput {

    //Definição de atributo básico
    nome: string;
    sigla?: string;

    //Definição de chave estrangeira
    tipoInstituicao: Prisma.TipoInstituicaoCreateNestedOneWithoutInstituicoesInput;

    //Declara que a entidade será refereciada como chave estrangeira
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput;
}
