import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoInstituicaoModule } from './module/tipo-instituicao/tipo-instituicao.module';
import { InstituicaoModule } from './module/instituicao/instituicao.module';
import { TipoInstituicaoAssociativaModule } from './module/tipo-instituicao-associativa/tipo-instituicao-associativa.module';
import { TipoEstabelecimentoModule } from './module/tipo-estabelecimento/tipo-estabelecimento.module';

@Module({
  imports: [TipoInstituicaoModule, InstituicaoModule, TipoInstituicaoAssociativaModule, TipoEstabelecimentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
