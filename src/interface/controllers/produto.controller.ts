import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateProdutoUseCase } from "src/application/use-cases/produto/create-produto.use-case";
import { DeleteProdutoUseCase } from "src/application/use-cases/produto/delete-produto.use-case";
import { FindAllProduto } from "src/application/use-cases/produto/find-all-produto.use-case";
import { FindProdutoByIdUseCase } from "src/application/use-cases/produto/find-produto-by-id.use-case";
import { FindProdutoByNameUseCase } from "src/application/use-cases/produto/find-produto-by-name.use-case";
import { UpdateProdutoUseCase } from "src/application/use-cases/produto/update-produto.use-case";
import { CreateProdutoDto } from "src/unused/produto/dto/create-produto.dto";
import { UpdateProdutoDto } from "src/unused/produto/dto/update-produto.dto";


@Controller('produto')
export class ProdutoController {
    constructor(
        private readonly createProdutoUseCase: CreateProdutoUseCase,
        private readonly updateProdutoUseCase: UpdateProdutoUseCase,
        private readonly deleteProdutoUseCase: DeleteProdutoUseCase,
        private readonly findAllProdutoUseCase: FindAllProduto,
        private readonly findProdutoByIdUseCase: FindProdutoByIdUseCase,
        private readonly findProdutoByNameUseCase: FindProdutoByNameUseCase,

    ) { }

    @Post()
    async create(@Body() createProdutoDto: CreateProdutoDto) {
        return this.createProdutoUseCase.execute(createProdutoDto.nome);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateProdutoDto: UpdateProdutoDto) {
        return this.updateProdutoUseCase.execute(+id, updateProdutoDto.nome);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteProdutoUseCase.execute(id);
    }

    @Get()
    async findAll() {
        return this.findAllProdutoUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findProdutoByIdUseCase.execute(id);
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string) {
        return this.findProdutoByNameUseCase.execute(name);
    }
}
