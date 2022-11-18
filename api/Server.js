import fastifyModule  from "fastify";
import cookie from '@fastify/cookie';
import formBody from "@fastify/formbody";

import { ValidationMiddleware } from './Middleware/ValidationMiddleware.js';
import { isSigned } from './Middleware/Rbac.js';

import { TestController } from './Controller/TestController.js';
import { ArticlesController } from './Controller/ArticlesController.js';
import { UserController } from './Controller/UserController.js';
import { TestDto } from "./Models/DTO/TestDto.js";
import { CustomError, SEVERITY_LEVEL } from "./Models/CustomError.js";

const fastify = fastifyModule();

fastify.addHook('preHandler', (req, res, done) => {
  res.header("Access-Control-Allow-Origin", "*");
  done();
});

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

fastify.setErrorHandler(function (error, request, reply) {
  if(error instanceof CustomError) {
    reply.status(error.httpStatus);
  }

  if (error instanceof CustomError && error.level === SEVERITY_LEVEL.INOF) {
    // expected error
  } else if (error instanceof CustomError && error.level === SEVERITY_LEVEL.FATAL) {
    // slack to engineer
  } else if (error instanceof CustomError && error.level === SEVERITY_LEVEL.ERROR) {
    // sent to error trakcing system
  }
  
  reply.send({stauts: 'failed', message: error.message});
})

fastify.listen(
  { port: 5000, host: "0.0.0.0" },
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
