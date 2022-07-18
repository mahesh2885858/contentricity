import React from 'react'
import SideBar from './SideBar'
// import AppBar from './AppBar'
import ColorModeContextProvider from './ColorModeContext'
import { Container, Box } from '@mui/material'
const Layout = ({ children }: { children: any }) => {
    return (
        <ColorModeContextProvider>
            <Box sx={{ height: "100vh" }}>
                <SideBar >
                    {/* <Box> */}
                    {children}
                    {/* </Box> */}
                </SideBar>
            </Box>
        </ColorModeContextProvider >
    )
}

export default Layout