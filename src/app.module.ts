
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { UserMiddleware } from './modules/users/user.middleware';
import { DbService } from './modules/db/db.service';
import { CatsModule } from './modules/cats/modules/cats.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, CatsModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService, DbService],
}) 


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .exclude({ path: 'users', method: RequestMethod.POST })
      .forRoutes({ method: RequestMethod.GET, path: 'users' });
  }

}
