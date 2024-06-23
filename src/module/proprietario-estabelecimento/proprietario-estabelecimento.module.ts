import { Module } from '@nestjs/common';
import { ProprietarioEstabelecimentoService } from './proprietario-estabelecimento.service';
import { ProprietarioEstabelecimentoController } from './proprietario-estabelecimento.controller';

@Module({
  controllers: [ProprietarioEstabelecimentoController],
  providers: [ProprietarioEstabelecimentoService],
})
export class ProprietarioEstabelecimentoModule {}
