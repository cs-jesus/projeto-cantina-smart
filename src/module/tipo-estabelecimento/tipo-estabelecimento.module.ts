import { Module } from '@nestjs/common';
import { TipoEstabelecimentoService } from './tipo-estabelecimento.service';
import { TipoEstabelecimentoController } from './tipo-estabelecimento.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TipoEstabelecimentoController],
  providers: [TipoEstabelecimentoService, PrismaService],
})
export class TipoEstabelecimentoModule {}
