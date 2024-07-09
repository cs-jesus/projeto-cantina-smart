import { Module } from '@nestjs/common';
import { ProprietarioEstabelecimentoService } from './proprietario-estabelecimento.service';
import { ProprietarioEstabelecimentoController } from './proprietario-estabelecimento.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProprietarioEstabelecimentoController],
  providers: [ProprietarioEstabelecimentoService, PrismaService],
})
export class ProprietarioEstabelecimentoModule {}
