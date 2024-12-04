import { z } from "zod";


export const RegisterRecruiterSchema = z.object({
    fullname:z.string().min(1, {message:"Fullname is required"}),
    email: z.string().min(1, {message:"Email is required"}).email({message:"Enter valid email"}),
    password: z.string().min(6, {message:"Password should be at least 6 characters"})
})

export const LoginSchema = z.object({
    email: z.string().min(1, {message:"Email is required"}).email({message:"Enter valid email"}),
    password: z.string().min(6, {message:"Password should be at least 6 characters"})
})