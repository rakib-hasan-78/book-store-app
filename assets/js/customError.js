export class CustomError {
    constructor(message) {
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this,CustomError);
        }
    }
}
