import { useForm } from "react-hook-form"
import { Button, Input } from "../../../../components";
import { FaGoogle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, RegisterRecruiterSchema } from "../../../../schema/auth.schema";
import { authService } from "../../../../services/api/auth";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { Link } from "react-router-dom";
import { genericRoutes } from "../../../../constants";

export const AuthLoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema)
    });

    const { mutate: loginUser, isSuccess, isPending, isError, error } = authService.loginUserMuation();

    const handleSubmitForm = (data: any) => {
        loginUser(data);
    }

   

    useEffect(() => {

        if (isSuccess) {
            toast.success("Login successfull");
        }
    }, [isSuccess])


    return <div className="p-2 w-[23rem]">
        <Toaster />
        <div className="mb-4 flex flex-col items-center justify-center">
            <p className="text-xl dark:text-stone-300 font-semibold">Hire<span className="text-indigo-500">Stream</span></p>
            <p className="font-light">Kindly fill form below to log into your account</p>
        </div>

        <div className="mb-2">
            <div><Button icon={<FaGoogle />} submitHanlder={() => { }} style_type="bare" content="Continue with google" /></div>
        </div>
        <div className="mb-2 flex items-center justify-center">
            <p>or</p>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>

            <Input disabled={isPending} register={register} name="email" isError={isError} errors={errors} placeholder="someone@somethin.com" type="email" label="Email:" />

            <div className="mb-2">
                <Input type="password" disabled={isPending} register={register} name="password" isError={isError} errors={errors} placeholder="***********" label="Password:" />

            </div>
            <p className="text-[0.7rem] mb-7">Forgot password?</p>


            <p className="text-red-500 text-[0.75rem] text-center mb-3">{isError && error.response.data.message}</p>

            <Button submitHanlder={() => { }} content="Login" isLoading={isPending} disabled={isPending} loadingText="Logging you in..." />
            <p className="text-center dark:text-white text-[0.7rem] mt-3">Don't have an account? <Link to={genericRoutes.AUTH_REGISTER} className="text-indigo-500 underline">Register here</Link></p>
        </form>
    </div>
}




export const AuthRegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegisterRecruiterSchema)
    });

    const { mutate: registerUser, isSuccess, isPending, isError, error } = authService.registerUserMutation();

    const handleSubmitForm = (data: any) => {
        registerUser(data);
    }

    if (isError) {
        console.log("ERROR FROM COMPONENT", error)
    }

    useEffect(() => {

        if (isSuccess) {
            toast.success("Account was created successfully");
        }
    }, [isSuccess])


    return <div className="p-2 w-[23rem]">
        <Toaster />
        <div className="mb-4 flex flex-col items-center justify-center">
            <p className="text-xl dark:text-stone-300 font-semibold">Hire<span className="text-indigo-500">Stream</span></p>
            <p className="font-light">Kindly fill form below to create an account</p>
        </div>

        <div className="mb-2">
            <div><Button icon={<FaGoogle />} submitHanlder={() => { }} style_type="bare" content="Continue with google" /></div>
        </div>
        <div className="mb-2 flex items-center justify-center">
            <p>or</p>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>

            <Input disabled={isPending} register={register} name="fullname" isError={isError} errors={errors} placeholder="Enter fullname" label="Fullname:" />
            <Input disabled={isPending} register={register} name="email" isError={isError} errors={errors} placeholder="someone@somethin.com" type="email" label="Email:" />

            <div className="mb-7">
                <Input type="password" disabled={isPending} register={register} name="password" isError={isError} errors={errors} placeholder="***********" label="Password:" />

            </div>

            <p className="text-red-500 text-[0.75rem] text-center mb-3">{isError && error.response.data.message}</p>

            <Button submitHanlder={() => { }} content="Create Account" isLoading={isPending} disabled={isPending} loadingText="Creating account..." />
            <p className="text-center dark:text-white text-[0.7rem] mt-3">Already have an account? <Link to={genericRoutes.AUTH_LOGIN} className="text-indigo-500 underline">Login here</Link></p>
        </form>
    </div>
}