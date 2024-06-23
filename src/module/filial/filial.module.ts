import { Module } from '@nestjs/common';
import { FilialService } from './filial.service';
import { FilialController } from './filial.controller';

@Module({
  controllers: [FilialController],
  providers: [FilialService],
})
export class FilialModule {}
