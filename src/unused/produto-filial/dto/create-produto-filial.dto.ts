import { IsAlpha, IsBoolean, IsDate, IsInt, IsNotEmpty, IsNumber, IsString, Length, ValidateNested } from "class-validator";
import { Type } from "class-transformer";


const produtoFilialMinLenght = 3, produtoFilialMaxLenght = 255;


class FilialConnectInput {//Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um numero Inteiro" })
    id: number;
}

class ProdutoConnectInput {//Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um numero Inteiro" })
    id: number;
}

class CategoriaProdutoConnectInput {//Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um numero Inteiro" })
    id: number;
}

class UnidadeMedidaConnectInput {//Implementa uma classe com o objetivo de armazenar um valor inteiro e ser posteriormente altera para um Type
    @IsInt({ message: "O campo 'id' deve ser um numero Inteiro" })
    id: number;
}




export class CreateProdutoFilialDto {

    //Implementa as validações de atributos simples, note que não é realizado validação de fk nesse bloco.
    @IsNumber()
    @IsNotEmpty({ message: "O campo não pode estar vazio" })

    preco: any;
    @IsBoolean({ message: 'O valor deve ser um booleano' })
    @IsNotEmpty({ message: "O campo não pode estar vazio" })

    perecivel: any;
    @IsString()
    @Length(produtoFilialMinLenght, produtoFilialMaxLenght, { message: "O campo deve conter entre ${produtoFilialMinLenght} e ${produtoFilialMaxLenght} caracteres." })
    @IsNotEmpty({ message: "O campo não pode estar vazio" })
    @IsAlpha('pt-BR')

    descricao: any;
    @IsNumber()
    @IsNotEmpty({ message: "O campo não pode estar vazio" })

    quantidade_atual: any;
    @IsNumber()
    @IsNotEmpty({ message: "O campo não pode estar vazio" })

    quantidade_minima: any;
    @IsNumber()
    @IsNotEmpty({ message: "O campo não pode estar vazio" })

    quantidade_seguranca: any;

    @IsDate()
    data_vencimento: any;

    //Implementa validação e restrição dos atributos definidos como chave estrangeira

    @ValidateNested()
    @Type(() => FilialConnectInput)
    @IsNotEmpty({})
    filial: FilialConnectInput;
    @ValidateNested()
    @Type(() => ProdutoConnectInput)
    @IsNotEmpty({})
    produto: ProdutoConnectInput;

    @ValidateNested()
    @Type(() => CategoriaProdutoConnectInput)
    @IsNotEmpty({})
    categoriaProduto: CategoriaProdutoConnectInput;

    @ValidateNested()
    @Type(() => UnidadeMedidaConnectInput)
    @IsNotEmpty({})
    unidadeMedida: UnidadeMedidaConnectInput;
}