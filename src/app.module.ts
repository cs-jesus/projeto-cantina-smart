import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoInstituicaoModule } from './module/tipo-instituicao/tipo-instituicao.module';
import { InstituicaoModule } from './module/instituicao/instituicao.module';
import { TipoInstituicaoAssociativaModule } from './module/tipo-instituicao-associativa/tipo-instituicao-associativa.module';

@Module({
  imports: [TipoInstituicaoModule, InstituicaoModule, TipoInstituicaoAssociativaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
