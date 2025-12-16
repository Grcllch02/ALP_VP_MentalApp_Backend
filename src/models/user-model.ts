import { generatedToken } from "../utils/jwt-util"

export interface UserJWTPayload{
    id: number
    username: string
    email: string
}

export interface RegisterUserRequest{
    username: string
    password: string
    email: string 
}

export interface LoginUserRequest{
    email:string
    password:string
}

export interface UserResponse{
    token?: string
}

export function toUserResponse(
    id: number,
    username: string,
    email: string
): UserResponse {
    return{
        token: generatedToken({
            id: id,
            username: username, 
            email: email
        },
        "1h"
    )
    }
}
