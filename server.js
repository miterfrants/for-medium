import { ValidationMiddleware } from './ValidationMiddleware.js';
import { TestDto } from './TestDto.js';
import { isSigned } from './Rbac.js';
import fastifyModule  from "fastify";
import cookie from '@fastify/cookie';
import formBody from "@fastify/formbody";

const fastify = fastifyModule();
fastify.register(cookie, {
  secret: '',
  hook: 'onRequest',
  parseOptions: {}
})

fastify.register(formBody);

fastify.post(
    "/test",
    {
        preHandler: [isSigned, ValidationMiddleware(TestDto)]
    },
    () => {
        // do something
        return { status: "OK" };
    }
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
