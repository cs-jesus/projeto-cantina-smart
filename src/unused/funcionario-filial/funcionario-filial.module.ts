import { Module } from '@nestjs/common';
import { FuncionarioFilialService } from './funcionario-filial.service';
import { FuncionarioFilialController } from './funcionario-filial.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FuncionarioFilialController],
  providers: [FuncionarioFilialService, PrismaService],
})
export class FuncionarioFilialModule {}
