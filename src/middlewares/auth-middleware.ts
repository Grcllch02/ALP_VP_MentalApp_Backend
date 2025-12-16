import {NextFunction, Response} from "express";
import { LoginUserRequest } from "../models/user-model";
import { UserRequest } from "../models/user-request";
import { ResponseError } from "../error/response-error";
import { verifyToken } from "../utils/jwt-util";


export const authMiddleware = (req: UserRequest, res: Response, next: NextFunction)=>{
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]

        if(!token){
            next(new ResponseError(401, "Unauthorized User"))
        }

        const payload = verifyToken(token!)

        if(payload){
            req.user = payload
        }else {
            next(new ResponseError(401, "Unauthorized User"))
        }
        
        // biar bisa diteruskan ke endpoint fitur lain
        next()
    } catch (error) {
        next(error)
    }
}

