import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://telegram-weather-bot-roan.vercel.app',
      'https://telegram-frontend.vercel.app',
      'https://bot-client-rho.vercel.app',
    ],
  });

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
