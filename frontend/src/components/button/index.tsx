import { IButton } from "./types"


export const Button = ({ content, icon, submitHanlder,isLoading = false,loadingText, disabled, style_type = "def_style" }: IButton) => {
    let generic_style = "rounded text-sm  border w-full p-2.5 flex items-center justify-center gap-2"
    let def_style = `${generic_style} bg-indigo-600 text-stone-50  hover:bg-indigo-800 transition-all  border-indigo-200 dark:border-indigo-400 dark:text-stone-200 `
    let bare_style = `${generic_style} dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800 hover:bg-stone-50`

    return <button onClick={submitHanlder} disabled={disabled} className={style_type == "bare" ? bare_style : def_style}>  
        {icon}
        {isLoading ? loadingText : content}
     </button>
}