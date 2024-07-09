import { Module } from '@nestjs/common';
import { TipoJuridicoService } from './tipo-juridico.service';
import { TipoJuridicoController } from './tipo-juridico.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TipoJuridicoController],
  providers: [TipoJuridicoService, PrismaService],
})
export class TipoJuridicoModule {}
