import {UseFormRegister, FieldErrors, FieldValues} from "react-hook-form"
export interface IInput{
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors<FieldValues>,
    placeholder?:string, 
    label?:string
    showLabel?:boolean, 
    name:string,
    type?:string,
    disabled?:boolean,
    isError?:boolean

}