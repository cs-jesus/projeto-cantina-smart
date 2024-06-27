import { Prisma } from "@prisma/client";

export class Instituicao implements Prisma.InstituicaoCreateInput {

    // Definição de atributo básico
    nome: string;
    sigla?: string;
    fk_tipo: number;
    // Definição de chave estrangeira
    tipoInstituicao: Prisma.TipoInstituicaoCreateNestedOneWithoutInstituicoesInput;

    // Declara que a entidade será referenciada como chave estrangeira
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutInstituicaoInput;
}
