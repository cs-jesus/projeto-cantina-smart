import { Prisma } from "@prisma/client";

export class TipoJuridico implements Prisma.TipoJuridicoCreateInput {
    descricao: string;
    associacoes?: Prisma.TipoJuridicoCreateNestedOneWithoutEstabelecimentosInput;
}
