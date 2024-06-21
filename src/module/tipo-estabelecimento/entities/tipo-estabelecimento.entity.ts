import { Prisma } from "@prisma/client";

export class TipoEstabelecimento implements Prisma.TipoEstabelecimentoCreateInput {

    descricao: string;
    estabelecimentos?: Prisma.EstabelecimentoUncheckedCreateNestedManyWithoutTipoEstabelecimentoInput;
  }
