import { hash, compare, genSalt } from "bcrypt";

export const HashPassword = async (password: string, salt_rounds: number = 10): Promise<string> => {
    let rounds = await genSalt(salt_rounds);
    return await hash(password, rounds)
}

export const ComparePassword = async (hashed_password: string, plain_password: string): Promise<boolean> => {
    return await compare(plain_password, hashed_password)
}