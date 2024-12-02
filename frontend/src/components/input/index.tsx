import { IInput } from "./types"
import { MdErrorOutline } from "react-icons/md";

export const Input = ({ name, register, errors,type = "text", placeholder, label, showLabel = true }: IInput) => {

    let error_style = "border-red-500 dark:border-red-500"
    let def_input_style = `w-full dark:bg-transparent dark:text-stone-300 ${errors[`${name}`] && error_style} dark:border-stone-600 py-2 text-xs px-1 border rounded`

    return (
        <div className="w-full mb-2">
            {showLabel && <label className={`mb-1 text-[0.75rem] ${errors[`${name}`] && "text-red-500 dark:text-red-500"} dark:text-stone-300`}>{label}</label>}
            <input type={type} {...register(`${name}`)} placeholder={placeholder} className={def_input_style} />
            {errors[`${name}`] && <p className="flex items-center  gap-1 text-red-500 text-[0.7rem] py-1">{errors[`${name}`]?.message as string}</p>}
        </div>
    )
}