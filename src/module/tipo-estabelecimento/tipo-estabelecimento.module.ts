import { Module } from '@nestjs/common';
import { TipoEstabelecimentoService } from './tipo-estabelecimento.service';
import { TipoEstabelecimentoController } from './tipo-estabelecimento.controller';

@Module({
  controllers: [TipoEstabelecimentoController],
  providers: [TipoEstabelecimentoService],
})
export class TipoEstabelecimentoModule {}
