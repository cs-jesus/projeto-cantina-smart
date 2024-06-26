import { Prisma } from "@prisma/client";

export class Estabelecimento implements Prisma.EstabelecimentoCreateInput {
    registro: string | Date;
    telefone?: string;
    celular: string;
    limite?: number;
    filiais?: Prisma.FilialCreateNestedManyWithoutEstabelecimentoInput;
    assocProprietario?: Prisma.ProprietarioEstabelecimentoCreateNestedManyWithoutEstabelecimentoInput;
    fisica?: Prisma.FisicaCreateNestedOneWithoutEstabelecimentosInput;
    juridica?: Prisma.JuridicaCreateNestedOneWithoutEstabelecimentosInput;
    tipoJuridico: Prisma.TipoJuridicoCreateNestedOneWithoutEstabelecimentosInput;
}
