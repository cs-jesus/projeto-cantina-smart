import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoInstituicaoModule } from './module/tipo-instituicao/tipo-instituicao.module';
import { InstituicaoModule } from './module/instituicao/instituicao.module';
import { TipoInstituicaoAssociativaModule } from './module/tipo-instituicao-associativa/tipo-instituicao-associativa.module';
import { TipoEstabelecimentoModule } from './module/tipo-estabelecimento/tipo-estabelecimento.module';
import { BairroModule } from './module/bairro/bairro.module';
import { CidadeModule } from './module/cidade/cidade.module';
import { EstadoModule } from './module/estado/estado.module';
import { EndrecoModule } from './module/endreco/endreco.module';
import { PoloModule } from './module/polo/polo.module';

@Module({
  imports: [TipoInstituicaoModule, InstituicaoModule, TipoInstituicaoAssociativaModule, TipoEstabelecimentoModule, BairroModule, CidadeModule, EstadoModule, EndrecoModule, PoloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
