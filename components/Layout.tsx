import React from 'react'
import SideBar from './SideBar'
// import AppBar from './AppBar'
import { Container, Drawer } from '@mui/material'
const Layout = ({ children }: { children: any }) => {
    return (
        <Container>

            <SideBar >


                <div>
                    {children}
                </div>
            </SideBar>
        </Container>
    )
}

export default Layout