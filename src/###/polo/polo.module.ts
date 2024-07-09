import { Module } from '@nestjs/common';
import { PoloService } from './polo.service';
import { PoloController } from './polo.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PoloController],
  providers: [PoloService, PrismaService],
})
export class PoloModule {}
