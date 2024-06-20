import { Module } from '@nestjs/common';
import { TipoInstituicaoService } from './tipo-instituicao.service';
import { TipoInstituicaoController } from './tipo-instituicao.controller';

@Module({
  controllers: [TipoInstituicaoController],
  providers: [TipoInstituicaoService],
})
export class TipoInstituicaoModule {}
