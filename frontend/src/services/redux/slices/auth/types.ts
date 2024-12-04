

export interface IAuthInitialState {
    value: IAuthResponse
}

export interface IAuthResponse {
    userid: string | null,
    fullname: string | null,
    email: string | null,
    role: string | null,
    tokens: {
        access_token: string | null,
        refresh_token: string | null
    }
}