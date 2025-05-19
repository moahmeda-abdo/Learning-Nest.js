import { Module } from '@nestjs/common';
import { databaseProviders } from './db.provider';
import { DbController } from './db.controller';
import { DbService } from './db.service';

@Module({
  providers: [...databaseProviders, DbService],
  controllers: [DbController],
  exports: [...databaseProviders],
})
export class DbModule {}
