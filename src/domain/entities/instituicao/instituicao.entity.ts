import { Prisma } from "@prisma/client";

export class Instituicao implements Prisma.InstituicaoCreateInput {

    //Definição de atributo básico
    fk_tipo: number;
    nome: string;
    sigla?: string;

    //Definição de chave estrangeira
    tipoInstituicao: Prisma.TipoInstituicaoCreateNestedOneWithoutInstituicoesInput;

    //Declara que a entidade será referenciada como chave estrangeira
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput;
}
