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
                throw new CustomError(`${key} field is required`, 400, SEVERITY_LEVEL.INFO);
            }
        }
        next();
    };
};