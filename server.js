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
  (request, reply) => {
      if (!request.cookies.token) {
          reply.status(403).send({
              message: "sign in required"
          });
      }
      if (!request.body.xxx) {
          reply.status(400).send({
              message: "xxx field is required"
          });
      }
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
