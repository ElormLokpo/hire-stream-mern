import { ReactElement } from "react";

export interface IButton {
    content: string,
    icon?: ReactElement,
    submitHanlder: () => void,
    isLoading?:boolean, 
    loadingText?:string,
    style_type?:string,
    disabled?:boolean,
}