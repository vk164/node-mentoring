import { NextFunction, Request, Response } from 'express';

import { loggerInstance } from '~common/logger';

import { AppError, ErrorCode } from '../models/errors/AppError';

const DEFAULT_MESSAGE = 'Something went wrong';

export function appErrorHandler(
    error: AppError,
    req: Request,
    res: Response,
    // eslint-disable-next-line no-unused-vars
    next: NextFunction
): void {
    loggerInstance.error(error.toString());

    const {
        httpCode = 500,
        message = DEFAULT_MESSAGE,
        code = ErrorCode.Unknown
    } = error;

    res.status(httpCode).json({
        httpCode,
        code,
        message
    });
}
