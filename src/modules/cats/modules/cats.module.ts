import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/cats.controller';
import { catsProviders } from '../providers/cats.provider';
import { CatsService } from '../services/cats.service';
import { DbModule } from '../../db/db.module';

@Module({
  controllers: [CatsController],
  providers: [...catsProviders, CatsService],
  imports: [DbModule],

})
export class CatsModule { }
