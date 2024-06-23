import { Module } from '@nestjs/common';
import { LogradouroService } from './logradouro.service';
import { LogradouroController } from './logradouro.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LogradouroController],
  providers: [LogradouroService, PrismaService],
})
export class LogradouroModule {}
