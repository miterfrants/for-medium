export const VALIDATOR = {
    REQUIRED: 'REQUIRED'
};

export function ValidationMiddleware (dto) {
    return (request, reply, next) => {
        for (const key in dto) {
            if (!request.body[key] 
                && dto[key] 
                && dto[key] === VALIDATOR.REQUIRED) 
            {
                reply.status(400).send({
                    message: `${key} field is required`
                });
            }
        }
        next();
    };
};