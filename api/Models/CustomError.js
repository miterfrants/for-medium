export const SEVERITY_LEVEL = {
    FATAL: 'FATAL',
    ERROR: 'ERROR',
    WARN: 'WARN',
    INFO: 'INFO'
}


export class CustomError extends Error {
    constructor(message, httpStatus, level){
        super(message);
        this.httpStatus = httpStatus;
        this.level = level;
    }
};