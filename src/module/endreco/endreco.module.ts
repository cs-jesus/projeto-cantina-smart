import { Module } from '@nestjs/common';
import { EndrecoService } from './endreco.service';
import { EndrecoController } from './endreco.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EndrecoController],
  providers: [EndrecoService, PrismaService],
})
export class EndrecoModule {}
