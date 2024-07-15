import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { NOMEM } from "dns";
import { CreateUnidadeMedidaUseCase } from "src/application/use-cases/unidade-medida/create-unidade-medida.use-case";
import { DeleteUnidadeMedidaUseCase } from "src/application/use-cases/unidade-medida/delete-unidade-medida.use-case";
import { FindAllUnidadeMedida } from "src/application/use-cases/unidade-medida/find-all-unidade-medida.use-case";
import { FindUnidadeMedidaByIdUseCase } from "src/application/use-cases/unidade-medida/find-unidade-medida-by-id.use-case";
import { FindUnidadeMedidaByNameUseCase } from "src/application/use-cases/unidade-medida/find-unidade-medida-by-name.use-case";
import { UpdateUnidadeMedidaUseCase } from "src/application/use-cases/unidade-medida/update-unidade-medida.use-case";
import { CreateUnidadeMedidaDto } from "src/unused/unidade-medida/dto/create-unidade-medida.dto";
import { UpdateUnidadeMedidaDto } from "src/unused/unidade-medida/dto/update-unidade-medida.dto";


@Controller('unidadeMedida')
export class UnidadeMedidaController {
    
    constructor(
        private readonly createUnidadeMedidaUseCase: CreateUnidadeMedidaUseCase,
        private readonly updateUnidadeMedidaUseCase: UpdateUnidadeMedidaUseCase,
        private readonly deleteUnidadeMedidaUseCase: DeleteUnidadeMedidaUseCase,
        private readonly findAllUnidadeMedidaUseCase: FindAllUnidadeMedida,
        private readonly findUnidadeMedidaByIdUseCase: FindUnidadeMedidaByIdUseCase,
        private readonly findUnidadeMedidaByNameUseCase: FindUnidadeMedidaByNameUseCase,

    ) { }

    @Post()
    async create(@Body() createUnidadeMedidaDto: CreateUnidadeMedidaDto) {
        //OPÇÃO QUE PARA QUE FOSSE EXECUTADO OS ARGUMENTOS DO MODULO.
        const { sigla, nome } = createUnidadeMedidaDto;
        return this.createUnidadeMedidaUseCase.execute(createUnidadeMedidaDto.sigla,nome);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateUnidadeMedidaDto: UpdateUnidadeMedidaDto) {
        //OPÇÃO QUE PARA QUE FOSSE EXECUTADO OS ARGUMENTOS DO MODULO.
        const { sigla, nome } = updateUnidadeMedidaDto;
        return this.updateUnidadeMedidaUseCase.execute(+id, updateUnidadeMedidaDto.nome,sigla);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteUnidadeMedidaUseCase.execute(id);
    }

    @Get()
    async findAll() {
        return this.findAllUnidadeMedidaUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findUnidadeMedidaByIdUseCase.execute(id);
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string,sigla:string) {
        //OPÇÃO QUE PARA QUE FOSSE EXECUTADO OS ARGUMENTOS DO MODULO.
        
        return this.findUnidadeMedidaByNameUseCase.execute(name,sigla);
    }
}
