import { Module } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria-produto.service';
import { CategoriaProdutoController } from './categoria-produto.controller';

@Module({
  controllers: [CategoriaProdutoController],
  providers: [CategoriaProdutoService],
})
export class CategoriaProdutoModule {}
