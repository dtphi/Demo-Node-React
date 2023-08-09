/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerModule } from './logger/logger.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'landmark',
      password: 'Vietnam1',
      database: 'landmark',
      entities: [],
      synchronize: true
    }),
    LoggerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
