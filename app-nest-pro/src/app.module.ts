import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiGatewayGateway } from './api-gateway/api-gateway.gateway';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PostModule],
  controllers: [AppController],
  providers: [AppService, ApiGatewayGateway],
})
export class AppModule { }
