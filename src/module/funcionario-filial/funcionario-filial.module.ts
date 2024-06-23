import { Module } from '@nestjs/common';
import { FuncionarioFilialService } from './funcionario-filial.service';
import { FuncionarioFilialController } from './funcionario-filial.controller';

@Module({
  controllers: [FuncionarioFilialController],
  providers: [FuncionarioFilialService],
})
export class FuncionarioFilialModule {}
