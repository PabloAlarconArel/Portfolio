import { createContext,useContext,useState } from "react"


const SetThemeContext = createContext();

export function SetTheme ({children}) {
    
    const [isDark, setIsDark]=useState(true);

    return(
        <SetThemeContext.Provider value={{isDark,setIsDark}}>
            {children}
        </SetThemeContext.Provider>
    )

}

export function useSetTheme (){
    return useContext(SetThemeContext);
}