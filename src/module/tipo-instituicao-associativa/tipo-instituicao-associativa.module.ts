import { Module } from '@nestjs/common';
import { TipoInstituicaoAssociativaService } from './tipo-instituicao-associativa.service';
import { TipoInstituicaoAssociativaController } from './tipo-instituicao-associativa.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TipoInstituicaoAssociativaController],
  providers: [TipoInstituicaoAssociativaService, PrismaService],
})
export class TipoInstituicaoAssociativaModule {}
