import { Prisma } from "@prisma/client";

export class Endereco implements Prisma.EnderecoCreateInput {

    //Definição de atributo básico
    cep: string;
    numero: string;

    //Definição de chave estrangeira
    logradouro: Prisma.LogradouroCreateNestedOneWithoutEnderecosInput;
    bairro: Prisma.BairroCreateNestedOneWithoutEnderecosInput;
    cidade: Prisma.CidadeCreateNestedOneWithoutEnderecosInput;
    estado: Prisma.EstadoCreateNestedOneWithoutEnderecosInput;

    //Declara que a entidade será refereciada como chave estrangeira
    polos?: Prisma.PoloUncheckedCreateNestedManyWithoutEnderecoInput;
    filiais?: Prisma.FilialUncheckedCreateNestedManyWithoutEnderecoInput;
}
