import { Module } from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { FuncaoController } from './funcao.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FuncaoController],
  providers: [FuncaoService, PrismaService],
})
export class FuncaoModule {}
