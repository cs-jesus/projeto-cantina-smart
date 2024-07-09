import { Module } from '@nestjs/common';
import { TipoInstituicaoService } from './tipo-instituicao.service';
import { TipoInstituicaoController } from './tipo-instituicao.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [TipoInstituicaoController],
  providers: [TipoInstituicaoService, PrismaService],
  exports: [TipoInstituicaoService]
})
export class TipoInstituicaoModule { }