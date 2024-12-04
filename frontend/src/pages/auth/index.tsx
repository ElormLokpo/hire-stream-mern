import { ThemeSwitcher } from "../../components"
import { AuthLoginForm } from "./components/form"

export const LoginPage = ()=>{
    return(
        <div className="h-screen w-screen dark:bg-stone-900 flex flex-col justify-between items-center p-20">
            <div>
                <ThemeSwitcher />
            </div>
            <div>
                <AuthLoginForm />
            </div>
            <div>
                <p className="text-[0.75rem] dark:text-stone-300 w-[25rem]  text-center">By continuing, you agree to HireStream's Terms of Service and Privacy Policy, 
                    and to receive periodic emails with updates.</p>
            </div>
        </div>
    )
}