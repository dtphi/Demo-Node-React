import { Module, MiddlewareConsumer } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { AuthenticationMiddleware } from '../authentication/authentication.middleware'

@Module({
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('post');
  }
}
