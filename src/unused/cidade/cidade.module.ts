import { Module } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CidadeController } from './cidade.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CidadeController],
  providers: [CidadeService, PrismaService],
})
export class CidadeModule {}
