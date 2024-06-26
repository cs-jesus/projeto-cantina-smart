import { IsNotEmpty, IsString } from "class-validator";
import { Estado } from "../entities/estado.entity";

export class CreateEstadoDto extends Estado {

    @IsString()
    @IsNotEmpty({ message: "O campo nao pode estar vazio" })
    uf: string
}
