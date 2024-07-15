import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateCategoriaProdutoUseCase } from "src/application/use-cases/categoria-produto/create-categoria-produto.use-case";
import { DeletecategoriaProdutoUseCase } from "src/application/use-cases/categoria-produto/delete-categoria-produto.use-case";
import { FindAllCategoriaProduto } from "src/application/use-cases/categoria-produto/find-all-categoria-produto.use-case";
import { FindCategoriaProdutoByIdUseCase } from "src/application/use-cases/categoria-produto/find-categoria-produto-by-id.use-case";
import { FindCategoriaProdutoByNameUseCase } from "src/application/use-cases/categoria-produto/find-categoria-produto-by-name.use-case";
import { UpdateCategoriaProdutoUseCase } from "src/application/use-cases/categoria-produto/update-categoria-produto.use-case";
import { CreateCategoriaProdutoDto } from "src/unused/categoria-produto/dto/create-categoria-produto.dto";
import { UpdateCategoriaProdutoDto } from "src/unused/categoria-produto/dto/update-categoria-produto.dto";


@Controller('categoriaProduto')
export class CategoriaProdutoController {
    constructor(
        private readonly createCategoriaProdutoUseCase: CreateCategoriaProdutoUseCase,
        private readonly updateCategoriaProdutoUseCase: UpdateCategoriaProdutoUseCase,
        private readonly deleteCategoriaProdutoUseCase: DeletecategoriaProdutoUseCase,
        private readonly findAllCategoriaProdutosUseCase: FindAllCategoriaProduto,
        private readonly findCategoriaProdutoByIdUseCase: FindCategoriaProdutoByIdUseCase,
        private readonly findCategoriaProdutoByNameUseCase: FindCategoriaProdutoByNameUseCase,

    ) { }

    @Post()
    async create(@Body() createCategoriaProdutoDto: CreateCategoriaProdutoDto) {
        return this.createCategoriaProdutoUseCase.execute(createCategoriaProdutoDto.descricao);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateCategoriaProdutoDto: UpdateCategoriaProdutoDto) {
        return this.updateCategoriaProdutoUseCase.execute(+id, updateCategoriaProdutoDto.descricao);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.deleteCategoriaProdutoUseCase.execute(id);
    }

    @Get()
    async findAll() {
        return this.findAllCategoriaProdutosUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.findCategoriaProdutoByIdUseCase.execute(id);
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string) {
        return this.findCategoriaProdutoByNameUseCase.execute(name);
    }
}
