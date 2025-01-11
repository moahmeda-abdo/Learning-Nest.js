
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { UserMiddleware } from './modules/users/user.middleware';

@Module({
  imports: [UserModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .exclude({ path: 'users', method: RequestMethod.POST })
      .forRoutes({ method: RequestMethod.GET, path: 'users' });
  }

}
