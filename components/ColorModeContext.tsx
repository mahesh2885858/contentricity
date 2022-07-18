import { createTheme, ThemeProvider } from "@mui/material"
import React, { useContext, createContext, useState } from "react"

interface TcolorContext {
    switchTheme: () => void;
    mode: "light" | "dark"
}

export const ColorModeContext = createContext<TcolorContext>({
    switchTheme: () => { },
    mode: "light"
})
const ColorModeContextProvider = ({ children }: { children: any }) => {
    const [mode, setMode] = useState<"light" | "dark">("light")
    const switchTheme = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"))
    }
    const lightTheme = createTheme({
        palette: {
            secondary:
            {
                main: "#ffffff"
            },
            background: {
                default: "#F5F6F8"
            }
        }
    })
    const themeDark = createTheme({
        palette: {
            secondary: {
                main: "#30334E"
            },
            background: {
                default: "#30334E"
            },
            text: {
                primary: "#fff"
            }
        },

    })
    return (
        <ColorModeContext.Provider value={{ switchTheme, mode: mode }}>
            <ThemeProvider theme={mode === "light" ? lightTheme : themeDark}>

                {children}
            </ThemeProvider>
        </ColorModeContext.Provider >
    )

}
export default ColorModeContextProvider