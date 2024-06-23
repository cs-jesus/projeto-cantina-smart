import { Module } from '@nestjs/common';
import { TipoJuridicoService } from './tipo-juridico.service';
import { TipoJuridicoController } from './tipo-juridico.controller';

@Module({
  controllers: [TipoJuridicoController],
  providers: [TipoJuridicoService],
})
export class TipoJuridicoModule {}
