import { createContext,useContext } from "react";

//Ye thoda diff approach hai,in this case we are going some default values in createContext in such a way ki wo pehle se hi present ho.

export const ThemeContext =  createContext({
  themeMode : "light",
  darkTheme : () => {},
  lightTheme : () => {},
});



export const ThemeProvider = ThemeContext.Provider


//Creating a custom hook for using ThemeContext.

export default function useTheme(){

  return(
    useContext(ThemeContext)
  )
}

