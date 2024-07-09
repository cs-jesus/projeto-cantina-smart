import { Module } from '@nestjs/common';
import { EstabelecimentoService } from './estabelecimento.service';
import { EstabelecimentoController } from './estabelecimento.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EstabelecimentoController],
  providers: [EstabelecimentoService, PrismaService],
})
export class EstabelecimentoModule {}
