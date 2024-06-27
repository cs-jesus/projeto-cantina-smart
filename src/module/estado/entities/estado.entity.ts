import { Prisma } from "@prisma/client"

export class Estado implements Prisma.EstadoCreateInput {

    //Definição de atributo básico
    uf: string;

    //Declara que a entidade será refereciada como chave estrangeira    
    enderecos?: Prisma.EnderecoCreateNestedManyWithoutEstadoInput;
}