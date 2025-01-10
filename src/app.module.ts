
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [UserModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
