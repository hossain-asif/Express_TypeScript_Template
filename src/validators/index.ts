import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

/**
 * @param schema - Zod schema to validate the request body
 * @returns - Middleware function to validate the request body
 */

export const validateRequestBody = (schema: AnyZodObject)=>{

    return async (req: Request, res: Response, next: NextFunction)=>{
        try {
            
            await schema.parseAsync(req.body);
            console.log("request body is valid");
            next();

        } catch (error) {
            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            });
        }
    }
}


export const validateRequestquery = (schema: AnyZodObject)=>{

    return async (req: Request, res: Response, next: NextFunction)=>{
        try {
            
            await schema.parseAsync(req.query);
            console.log("request query is valid");
            next();

        } catch (error) {
            res.status(400).json({
                message: "Invalid request query",
                success: false,
                error: error
            });
        }
    }
}