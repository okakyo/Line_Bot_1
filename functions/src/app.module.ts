import { Module } from '@nestjs/common'
import { BotModule } from './module/bot.module'
import { BotService } from './service'
import { BotController } from './controller'

@Module({
  imports: [BotModule],
  controllers: [BotController],
  providers: [BotService]
})
export class AppModule {}
