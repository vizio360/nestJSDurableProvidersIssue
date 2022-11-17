import { ContextIdFactory, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AggregateByTenantContextIdStrategy } from './durable-providers.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());
  await app.listen(3000);
}
bootstrap();
