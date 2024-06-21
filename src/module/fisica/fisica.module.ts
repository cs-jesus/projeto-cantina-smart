import { Module } from '@nestjs/common';
import { FisicaService } from './fisica.service';
import { FisicaController } from './fisica.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FisicaController],
  providers: [FisicaService, PrismaService],
})
export class FisicaModule {}
