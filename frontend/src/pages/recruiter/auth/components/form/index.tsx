import { useForm } from "react-hook-form"
import { Button, Input } from "../../../../../components";
import { FaGoogle } from "react-icons/fa";
import {zodResolver} from "@hookform/resolvers/zod"
import { RegisterRecruiterSchema } from "../../../../../schema/auth.schema";

export const RecruiterRegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegisterRecruiterSchema)
    });

    const handleSubmitForm = (data:any) => {
        console.log(data)   
    }

    return <div className="p-2 w-[23rem]">

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

            <Input register={register} name="fullname" errors={errors} placeholder="Enter fullname" label="Fullname:" />
            <Input register={register} name="email" errors={errors} placeholder="someone@somethin.com" type="email" label="Email:" />

            <div className="mb-7">
                <Input register={register} name="password" errors={errors} placeholder="***********" label="Password:" />

            </div>

            <Button submitHanlder={() => { }} content="Create Account" />
            <p className="text-center text-[0.7rem] mt-3">Already have an account? <span className="text-indigo-500 underline">Login here</span></p>
        </form>
    </div>
}