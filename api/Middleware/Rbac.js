import { CustomError, SEVERITY_LEVEL } from "../Models/CustomError.js";

export const isSigned = (request, reply, next) => {
    if (!request.cookies.token) {
        throw new CustomError('sign in required', 403, SEVERITY_LEVEL.INFO);
    }
    next();
}