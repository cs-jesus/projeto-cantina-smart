import { Module } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria-produto.service';
import { CategoriaProdutoController } from './categoria-produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CategoriaProdutoController],
  providers: [CategoriaProdutoService, PrismaService],
})
export class CategoriaProdutoModule {}
