import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoInstituicaoModule } from './module/tipo-instituicao/tipo-instituicao.module';

@Module({
  imports: [TipoInstituicaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
