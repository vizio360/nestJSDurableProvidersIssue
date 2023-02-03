# Default Durable Provider issue

With nest 9.3.1 there is a new issue with durable providers where if you do not explicitly set durability to `false` it considers the provider as durable.

## the issue

In this branch there is an `AppController` that gets injected with `NonDurableProviderBService`. `NonDurableProviderBService` has a scope of `REQUEST` but no explicit setting for durability. This should considered it non durable (e.g `durable: false`).
But it seems that the default of `false` is not considered.

Changing the condition in the `instance-wrapper:isDependencyTreeDurable` from
`this.isTreeDurable = !isTreeNonDurable && this.durable !== false`
to
`this.isTreeDurable = !isTreeNonDurable && this.durable;`

seems to fix the issue.

## how to run the app

Set the env variable `NEST_DEBUG=true`, this will output some extra useful info in the terminal.

from the root of the repo run:
`npm install`
`npm run start:dev`

Notice that `NonDurableProviderBService` is initialised as durable:

`[Nest] 43338 - 03/02/2023, 08:56:02 LOG [InstanceWrapper] NonDurableProviderBService introspected as durable`

Then open you browser at `http://localhost:3000/hello`.

The first time you hit it, in the console, you'll get:

```
AnotherDurableProviderCService created
NonDurableProviderBService created
```

So `NonDurableProviderBService` has been create as a new request came in.

Then if you `http://localhost:3000/hello` again, nothing is spit out on the console, even though we should have had another:

```
NonDurableProviderBService created
```

Now if you go into `node_modules/@nestjs/core/injector/instance-wrapper.js` and in the method `isDependencyTreeDurable`, you change tihs:
`this.isTreeDurable = !isTreeNonDurable && this.durable !== false;`
to
`this.isTreeDurable = !isTreeNonDurable && this.durable;`

and then follow the procedure above, you will see that `NonDurableProviderBService` is create for each request.
