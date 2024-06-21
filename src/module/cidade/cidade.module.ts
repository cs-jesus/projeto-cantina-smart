import { Module } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CidadeController } from './cidade.controller';

@Module({
  controllers: [CidadeController],
  providers: [CidadeService],
})
export class CidadeModule {}
