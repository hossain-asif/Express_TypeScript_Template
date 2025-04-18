import { NextFunction, Request, Response } from "express";


export function pingHandler(req: Request, res: Response, next: NextFunction){
    res.status(200).json({ message: "Pong!" });
}