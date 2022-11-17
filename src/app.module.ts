import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AnotherDurableProviderCService } from './another-durable-provider-c/another-durable-provider-c.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DurableProviderAService } from './durable-provider-a/durable-provider-a.service';
import { MyResolverResolver } from './my-resolver/my-resolver.resolver';
import { NonDurableProviderBService } from './non-durable-provider-b/non-durable-provider-b.service';
import { ProviderWithDependenciesService } from './provider-with-dependencies/provider-with-dependencies.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CacheModule.register(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DurableProviderAService,
    NonDurableProviderBService,
    ProviderWithDependenciesService,
    MyResolverResolver,
    AnotherDurableProviderCService,
  ],
})
export class AppModule {}
