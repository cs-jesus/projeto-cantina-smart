import { Module } from '@nestjs/common';
import { FisicaController } from './fisica.controller';
import { PrismaService } from 'src/infraestructure/prisma/prisma.service';
import { TipoFisicaService } from './fisica.service';

@Module({
  controllers: [FisicaController],
  providers: [TipoFisicaService, PrismaService],
})
export class FisicaModule { }
