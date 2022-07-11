import React from 'react'
import SideBar from './SideBar'
// import AppBar from './AppBar'
import { Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const theme = createTheme({
    palette: { secondary: { main: "#ffffff" } }
})
const Layout = ({ children }: { children: any }) => {
    return (
        <ThemeProvider theme={theme}>

            <Container>
                <SideBar >
                    <div>
                        {children}
                    </div>
                </SideBar>
            </Container>
        </ThemeProvider>
    )
}

export default Layout