import jwt from "jsonwebtoken";

export const GenerateTokens = async (payload: any) => {
    return {
        access_token: await jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "10m" }),
        refresh_token: await jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "2d" })
    }
}

export const VerifyRefreshToken = async (refresh_token:string)=>{
    return await jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET)
}

export const VerifyAccessToken = async (access_token:string)=>{
    return await jwt.verify(access_token, process.env.TOKEN_SECRET)
}