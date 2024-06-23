import { Module } from '@nestjs/common';
import { InstituicaoTipoInstituicaoService } from './instituicao-tipo-instituicao.service';
import { InstituicaoTipoInstituicaoController } from './instituicao-tipo-instituicao.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InstituicaoTipoInstituicaoController],
  providers: [InstituicaoTipoInstituicaoService, PrismaService],
})
export class InstituicaoTipoInstituicaoModule { }
