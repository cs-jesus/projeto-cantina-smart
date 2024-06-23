import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoInstituicaoModule } from './module/tipo-instituicao/tipo-instituicao.module';
import { InstituicaoModule } from './module/instituicao/instituicao.module';
import { BairroModule } from './module/bairro/bairro.module';
import { CidadeModule } from './module/cidade/cidade.module';
import { EstadoModule } from './module/estado/estado.module';
import { EndrecoModule } from './module/endreco/endreco.module';
import { PoloModule } from './module/polo/polo.module';
import { JuridicaModule } from './module/juridica/juridica.module';
import { FisicaModule } from './module/fisica/fisica.module';
import { EstabelecimentoModule } from './module/estabelecimento/estabelecimento.module';
import { TipoJuridicoModule } from './module/tipo-juridico/tipo-juridico.module';
import { LogradouroModule } from './module/logradouro/logradouro.module';
import { FilialModule } from './module/filial/filial.module';
import { FuncaoModule } from './module/funcao/funcao.module';
import { ColaboradorModule } from './module/colaborador/colaborador.module';
import { ProprietarioEstabelecimentoModule } from './module/proprietario-estabelecimento/proprietario-estabelecimento.module';
import { FuncionarioFilialModule } from './module/funcionario-filial/funcionario-filial.module';
import { ProdutoModule } from './module/produto/produto.module';
import { CategoriaProdutoModule } from './module/categoria-produto/categoria-produto.module';
import { UnidadeMedidaModule } from './module/unidade-medida/unidade-medida.module';
import { ProdutoFilialModule } from './module/produto-filial/produto-filial.module';
import { InstituicaoTipoInstituicaoModule } from './module/instituicao-tipo-instituicao/instituicao-tipo-instituicao.module';


@Module({
  imports: [
    TipoInstituicaoModule, InstituicaoTipoInstituicaoModule, InstituicaoModule, PoloModule,
    LogradouroModule, BairroModule, CidadeModule, EstadoModule, EndrecoModule,
    JuridicaModule, FisicaModule, TipoJuridicoModule, EstabelecimentoModule, FilialModule,
    FuncaoModule, ColaboradorModule, ProprietarioEstabelecimentoModule, FuncionarioFilialModule,
    ProdutoModule, CategoriaProdutoModule, UnidadeMedidaModule, ProdutoFilialModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
