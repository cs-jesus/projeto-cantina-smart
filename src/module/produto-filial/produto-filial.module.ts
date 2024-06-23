import { Module } from '@nestjs/common';
import { ProdutoFilialService } from './produto-filial.service';
import { ProdutoFilialController } from './produto-filial.controller';

@Module({
  controllers: [ProdutoFilialController],
  providers: [ProdutoFilialService],
})
export class ProdutoFilialModule {}
