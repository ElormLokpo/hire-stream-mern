
export enum RoleEnum {
    ADMIN = "ADMIN",
    RECRUITER = "RECRUITER"
}

export interface IAuthRegisterRequest {
    fullname: string,
    email: string,
    password: string,
    role?:string
}

export interface IAuthLoginRequest {
    email: string,
    password: string
}

export interface IRefreshTokenRequest {
    refresh_token: string
}

export interface IAuth {
    _id: string,
    fullname: string,
    email: string,
    password: string,
    role: string
}