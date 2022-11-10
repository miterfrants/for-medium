export const isSigned = (request, reply, next) => {
    if (!request.cookies.token) {
        reply.status(403).send({
            message: "sign in required"
        });
    }
    next();
}