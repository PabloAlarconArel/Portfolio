import { useState, useEffect} from "react";
import '../styles/header.css';
import { useSetTheme } from "./SetTheme";

export const ButtonSetTheme = () => {

    const Moon = '../icons/8726101_moon_icon.svg'
    const Sun = '../icons/8726475_sun_icon.svg'
    const {isDark,setIsDark}= useSetTheme();
    const [icon,setIcon]=useState(Sun);

        useEffect(() => {
            document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
        }, [isDark]);
    
        const changeTheme = () => {
            if(isDark){
                setIcon(Moon);
            }else{
                setIcon(Sun)
            } 
            setIsDark(!isDark)            
        }
    
    return (
        <>
        <div className="theme-icon" tabIndex="0" role="button" onClick={()=>{changeTheme()} }>
                <img className="icon" src={icon} alt="theme-icon" />
        </div>
        </>
        
    );            
};




export default ButtonSetTheme

