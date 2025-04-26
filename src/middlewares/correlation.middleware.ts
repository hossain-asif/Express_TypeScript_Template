import { NextFunction, Request, Response } from "express"
import { v4 as uuidv4 } from 'uuid';
import { asyncLocalStorage } from "../utils/helpers/request.helpers";
// import logger from "../config/logger.config";

export const attachedCorrelationIdMiddleware = (req: Request, res: Response, next: NextFunction)=>{

    const correlationId = uuidv4();

    // logger.info("correlationId created", {correlationId: correlationId});

    req.headers['x-correlation-Id'] = correlationId;

    asyncLocalStorage.run({correlationId: correlationId}, ()=>{
        next();
    });



}

