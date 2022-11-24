# Durable Provider issue

Small app to reproduce a strange behaviour I've noticed while playing around with Durable Providers in NestJS v9+

## the issue

WORKAROUND: You just need to make the resolver non durable as well e.g. add this `@Injectable({ scope: Scope.REQUEST, durable: false })` in the resolver declaration.
I've reported the issue on the nestJS repo.

If in a resolver I inject a REQUEST Scoped NON durable provider, and this is the only injected provider, then it behaves as expected so, for every request, a new instance of that provider is created.

```
@Resolver()
export class MyResolverResolver {
  constructor(
    private nonDurable: NonDurableProviderBService,
  ) {}

  @Query((returns) => String)
  recipe(): string {
    return 'hello';
  }
}
```

As soon as I inject another provider to that same resolver, and the provider IS durable, suddenly also the other provider behaves like it was durable.

```
@Resolver()
export class MyResolverResolver {
  constructor(
    //now this one is created only once per tenant, 
    //but instead I would like to still have it created 
    //once per request
    private nonDurable: NonDurableProviderBService,
    private durable: DurableProviderAService,
  ) {}

  @Query((returns) => String)
  recipe(): string {
    return 'hello';
  }
}
```

## how to run the app

from the root of the repo run:
`npm install`
`npm run start:dev`

Then open you browser at `http://localhost:3000/graphql`.

In the graphql playground paste this query:

```
# Write your query or mutation here
query {
   recipe
}
```

and also in the HTTP HEADERS add :

```
{
   "x-tenant-id": "tenantB"
}
```

now run the query and look at the console output of the app.

On first run you will notice all the providers that have been created.
```
AnotherDurableProviderCService created
DurableProviderAService created
NonDurableProviderBService created
```

If you run this query again you should see a log in the console output for NonDurableProviderBService to be recreated as it is set as `durable:false`
but instead no output is sent meaning that the provider has not been re-created.


Now if you comment out the injection of the `DurableProviderAService` in `MyResolverResolver` and do the same as above, you will notice that the `NonDurableProviderBService` provider is re-created per request.


One last observation is that if you also set  `DurableProviderAService` as non durable, then both `DurableProviderAService` and `NonDurableProviderBService` are recreated per request. 
It seems that as soon as there is one provider that is durable, all the other providers durability settings are ignored.


