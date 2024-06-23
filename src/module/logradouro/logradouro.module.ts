import { Module } from '@nestjs/common';
import { LogradouroService } from './logradouro.service';
import { LogradouroController } from './logradouro.controller';

@Module({
  controllers: [LogradouroController],
  providers: [LogradouroService],
})
export class LogradouroModule {}
