import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://shivakerur99:shivanand99805257@cluster0.usva3cf.mongodb.net/weather',
    ),
    UserModule,
    BotModule,
  ],
  // imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
