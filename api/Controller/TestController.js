export const TestController  = (request, reply) => {
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