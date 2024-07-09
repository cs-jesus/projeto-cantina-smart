import { Module } from '@nestjs/common';
import { JuridicaService } from './juridica.service';
import { JuridicaController } from './juridica.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [JuridicaController],
  providers: [JuridicaService, PrismaService],
})
export class JuridicaModule {}
