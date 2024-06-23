import { Module } from '@nestjs/common';
import { ProdutoFilialService } from './produto-filial.service';
import { ProdutoFilialController } from './produto-filial.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProdutoFilialController],
  providers: [ProdutoFilialService, PrismaService],
})
export class ProdutoFilialModule {}
