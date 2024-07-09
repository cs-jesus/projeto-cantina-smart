import { Module } from '@nestjs/common';
import { FilialService } from './filial.service';
import { FilialController } from './filial.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FilialController],
  providers: [FilialService, PrismaService],
})
export class FilialModule {}
