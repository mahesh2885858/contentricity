import React from 'react'
import SideBar from './SideBar'
// import AppBar from './AppBar'
import { Container, Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const theme = createTheme({
    palette: { secondary: { main: "#ffffff" } }
})
const Layout = ({ children }: { children: any }) => {
    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ background: "#F5F6F8", height: "100vh" }}>
                <SideBar >
                    <div>
                        {children}
                    </div>
                </SideBar>
            </Box>
        </ThemeProvider>
    )
}

export default Layout