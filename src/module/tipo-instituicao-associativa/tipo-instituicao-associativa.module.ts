import { Module } from '@nestjs/common';
import { TipoInstituicaoAssociativaService } from './tipo-instituicao-associativa.service';
import { TipoInstituicaoAssociativaController } from './tipo-instituicao-associativa.controller';

@Module({
  controllers: [TipoInstituicaoAssociativaController],
  providers: [TipoInstituicaoAssociativaService],
})
export class TipoInstituicaoAssociativaModule {}
