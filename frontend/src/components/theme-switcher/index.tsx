import { useState } from "react";
import { PiCloudSunBold, PiMoonBold } from "react-icons/pi";


export const ThemeSwitcher = () => {
    let [isDark, setIsDark] = useState(false)

    const handleChangeTheme = () => {
        document.documentElement.classList.toggle("dark")
        setIsDark(!isDark);

    }


    return <button onClick={handleChangeTheme} className="border dark:text-stone-300 dark:hover:bg-stone-700 border-stone-400 text-stone-600 p-2 rounded-full hover:bg-stone-50">
        {
            isDark ? <PiMoonBold /> :  <PiCloudSunBold />
        }
    </button>
}