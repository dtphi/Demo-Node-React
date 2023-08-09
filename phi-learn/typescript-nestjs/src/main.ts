import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import CustomLogger from './logger/customLogger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  })
  app.useLogger(app.get(CustomLogger))
  await app.listen(3000)
}
bootstrap()
