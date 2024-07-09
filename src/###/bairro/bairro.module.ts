import { Module } from '@nestjs/common';
import { BairroService } from './bairro.service';
import { BairroController } from './bairro.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BairroController],
  providers: [BairroService, PrismaService],
})
export class BairroModule {}
