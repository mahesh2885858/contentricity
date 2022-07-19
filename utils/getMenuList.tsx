import React, { useContext } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from "@mui/material/Tooltip";
import { ColorModeContext } from "../components/ColorModeContext"
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
interface PropsType {
    navigateToMenuItemSecion: (id: string, name: string) => void;
    item: {
        name: string;
        icon: JSX.Element;
        isActive: boolean;
        id: string;
        type: string;
    };
    open: boolean,
    isAdmin: boolean;
    showAdminPanel: boolean;
    toggleTheSettingsList: () => void;
    expandAdminSettings: boolean;
    menu: {
        name: string;
        icon: JSX.Element;
        isActive: boolean;
        id: string;
        type: string;
    }[];


}
const GetMenuList = (props: PropsType) => {
    const themeContext = useContext(ColorModeContext)
    const { navigateToMenuItemSecion, item, open, isAdmin, menu, showAdminPanel, toggleTheSettingsList, expandAdminSettings } = props
    if (item.type === "sub") return null
    else {
        if (!isAdmin || !showAdminPanel) {
            if (item.type === "main") {
                return (
                    <ListItem onClick={() => navigateToMenuItemSecion(item.id, item.name)} key={item.id} disablePadding sx={{ display: 'flex', flexDirection: "column" }}>
                        <Tooltip title={item.name} placement="right" >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: themeContext.mode === "light" && item.isActive ? "#EBF0FE" : (themeContext.mode === "dark" ? "#30334E" : "#fff"),
                                    borderRadius: "8px",
                                    width: open ? "213px" : "46px",
                                    height: "42px",

                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: themeContext.mode === "light" ? "unset" : "#FFFFFF87"
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>

                    </ListItem>)
            } else return null
        } else {
            if (item.name === 'Settings') {
                return (
                    <ListItem onClick={toggleTheSettingsList} key={item.id} disablePadding sx={{ display: 'flex', flexDirection: "column" }}>
                        <Tooltip title={item.name} placement="right" >

                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: themeContext.mode === "light" && item.isActive ? "#EBF0FE" : (themeContext.mode === "dark" ? "#30334E" : "#fff"),
                                    borderRadius: "8px",
                                    width: open ? "213px" : "46px",
                                    height: "42px",

                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: themeContext.mode === "light" ? "unset" : "#FFFFFF87"
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                {
                                    open && !expandAdminSettings ? (<NavigateNextOutlinedIcon />) : (
                                        open && expandAdminSettings ? <KeyboardArrowDownOutlinedIcon /> : undefined
                                    )

                                }
                            </ListItemButton>
                        </Tooltip>

                        <Collapse in={expandAdminSettings} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {menu.map((item,) => {
                                    if (!(item.type === "sub")) return undefined
                                    return (

                                        <ListItemButton


                                            onClick={() => navigateToMenuItemSecion(item.id, item.name)}
                                            key={item.id} sx={{
                                                pl: open ? 4 : 0,
                                                backgroundColor: themeContext.mode === "light" && item.isActive ? "#EBF0FE" : (themeContext.mode === "dark" ? "#30334E" : "#fff"),
                                            }}>
                                            <ListItemIcon
                                                sx={{

                                                    color: themeContext.mode === "light" ? "unset" : "#FFFFFF87"
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        </Collapse>
                    </ListItem>
                )
            } else {
                return (
                    <ListItem onClick={() => navigateToMenuItemSecion(item.id, item.name)} key={item.id} disablePadding sx={{ display: 'flex', flexDirection: "column" }}>
                        <Tooltip title={item.name} placement="right" >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: themeContext.mode === "light" && item.isActive ? "#EBF0FE" : (themeContext.mode === "dark" ? "#30334E" : "#fff"),
                                    borderRadius: "8px",
                                    width: open ? "213px" : "46px",
                                    height: "42px",

                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: themeContext.mode === "light" ? "unset" : "#FFFFFF87"
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>

                    </ListItem>)
            }
        }
    }

}

export default GetMenuList