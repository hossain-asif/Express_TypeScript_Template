import { Request, Response } from "express";


export function pingHandler(req: Request, res: Response){
    res.send("PONG");
}