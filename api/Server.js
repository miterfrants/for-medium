import fastifyModule  from "fastify";
import cookie from '@fastify/cookie';
import formBody from "@fastify/formbody";

import { TestController } from './Controller/TestController.js';
import { ArticlesController } from './Controller/ArticlesController.js';
import { UserController } from './Controller/UserController.js';

const fastify = fastifyModule();

fastify.register(cookie, {
  secret: '',
  hook: 'onRequest',
  parseOptions: {}
})

fastify.register(formBody);

fastify.post(
    "/test",
    TestController
);

fastify.get(
  "/articles",
  ArticlesController
);

fastify.get(
  "/users/:userId",
  UserController
);

fastify.listen(
  { port: 3000, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.log(err);
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
    fastify.log.info(`server listening on ${address}`);
  }
);
