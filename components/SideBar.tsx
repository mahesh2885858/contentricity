import * as React from 'react';
import { styled, Theme, CSSObject, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import Image from "next/image"
import { ColorModeContext } from "./ColorModeContext"
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { MenuItems } from './data/MenuSettings';
import GetMenuList from '../utils/getMenuList';
import useRouter from "next/router"
export default function MiniDrawer({ children }: { children: React.ReactNode }) {
    const drawerWidth = 260;
    const userSettings = ["Profile", "Preferences", "Reset Password", "Logout"]
    const themeContext = React.useContext(ColorModeContext)
    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        backgroundColor: themeContext.mode === "light" ? "#ffffff" : "#30334E",
        borderRightColor: " #ffffff"
    });
    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(8)} + 6px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        backgroundColor: themeContext.mode === "light" ? "#ffffff" : "#30334E",
        borderRightColor: " #ffffff"



    });
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),


        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    interface AppBarProps extends MuiAppBarProps {
        open?: boolean;
    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - 65px)`,
        height: "71px",
        boxShadow: "none",
        borderBottom: "1px solid #ffffff ",
        borderBottomColor: "#ffffff !important",

        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',

            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );





    const [menu, setMenu] = React.useState(MenuItems)
    const { mode, switchTheme } = React.useContext(ColorModeContext)
    const [open, setOpen] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(true)
    const [showAdminPanel, setShowAdminPanel] = React.useState(false)
    const [showAdminSettings, setShowAdminSettings] = React.useState(false)
    const [expandAdminSettings, setExpandAdminSettings] = React.useState(false)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const router = useRouter
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // Just for the dev purpose
    const toogleAdmin = () => {
        setIsAdmin((prev) => !prev)
    }
    // when user click on amin logo at the bottom of the drawer
    const toogleAdminPanel = () => {
        setShowAdminPanel((pre) => !pre)
        setOpen(true)
    }
    // when user click on the settings icon in admin panel
    const toogleAdminSettings = () => {
        setShowAdminSettings((prev) => !prev)
    }

    // 
    const toggleTheSettingsList = () => {
        setExpandAdminSettings((prev) => !prev)
    }
    //    navigate to a screen related menu item clicked
    const navigateToMenuItemSecion = (id: string, name: string) => {
        setMenu((prev) => {
            return prev.map((item) => {
                if (item.id === id) return { ...item, isActive: true }
                else return { ...item, isActive: false }
            })
        })
        router.push(`/user/${name}`)

    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="secondary" sx={{ borderBottomColor: "black" }} >

                <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "0", paddingRight: "33.8px" }}>
                    <Box sx={{
                        display: "flex",
                        marginLeft: "-20px"
                    }}>

                        <IconButton
                            disableRipple={true}
                            edge="start"
                            onClick={open ? handleDrawerClose : handleDrawerOpen}>
                            {!open ? <KeyboardDoubleArrowRightOutlinedIcon /> : <KeyboardDoubleArrowLeftOutlinedIcon />}
                        </IconButton>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon fontSize='small' sx={{

                                    color: '#4C4E64'
                                }}
                                />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search articles"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", gap: "29px" }}>
                        <Box sx={{
                            display: 'flex',
                            gap: "14px"
                        }}>

                            {
                                mode === "light" ? (

                                    <DarkModeOutlinedIcon onClick={switchTheme} />
                                ) : (<LightModeOutlinedIcon onClick={switchTheme} />)
                            }

                            <Badge
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                badgeContent={3}
                                color="error"

                            >
                                <NotificationsOutlinedIcon />
                            </Badge>
                        </Box>





                        {/* accoutn settings sectin End */}
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider color="#ffffff" />
            <Drawer variant="permanent"
                open={open}
                sx={{ border: "blue solid 2px", position: "relative", }}

            >
                <DrawerHeader style={{
                    justifyContent: "space-between"
                }}>
                    <Box height={70} width={"100%"} sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "7px"

                    }} >
                        <Box width={36} height={36}>

                            <Image src={"/Group1.png"} width={"100%"} height={"100%"} />
                        </Box>
                        {
                            open ? (

                                <Typography sx={{ fontSize: "24px", lineHeight: "29px" }}>
                                    Contentricity
                                </Typography>
                            ) : undefined
                        }
                    </Box>

                </DrawerHeader>
                <Divider color="#fff" />
                <List sx={{ display: "flex", gap: "5px", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", minHeight: showAdminPanel ? "fit-content" : `calc(100vh - 147px)`, }}>
                    {isAdmin && showAdminPanel && open ? (
                        <Box height={"53px"} sx={{ display: "flex", backgroundColor: themeContext.mode === "light" ? "#F5F8FF" : "#30334E", justifyContent: "center", alignItems: "center" }} >
                            <Typography fontSize={16} fontWeight={"500"} display={"inline"} >

                                ADMINISTRATION
                            </Typography>
                            <CloseOutlinedIcon onClick={toogleAdminPanel} sx={{ marginLeft: '63px', cursor: "pointer" }} />
                        </Box>) : undefined}
                    {menu.map((item, index) => {
                        return (
                            <GetMenuList

                                expandAdminSettings={expandAdminSettings}
                                isAdmin={isAdmin}
                                item={item}
                                menu={menu}
                                navigateToMenuItemSecion={navigateToMenuItemSecion}
                                open={open}
                                showAdminPanel={showAdminPanel}
                                toggleTheSettingsList={toggleTheSettingsList}



                            />
                        )
                    })}

                </List>
                {
                    isAdmin ?

                        (<ListItem disablePadding sx={{ display: 'flex', flexDirection: "column", marginBottom: "27px", }}>
                            <Tooltip title={"admin"} placement="right" >

                                <ListItemButton
                                    sx={{
                                        display: "flex",
                                        minHeight: 48,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        px: 2.5,
                                        borderRadius: "8px",
                                        width: open ? "213px" : "46px",
                                        height: "42px",

                                    }}
                                >

                                    <ListItemIcon
                                        onClick={toogleAdminPanel}
                                        sx={{
                                            alignItems: "center",
                                            minWidth: 0,

                                            justifyContent: 'center',
                                            color: themeContext.mode === "light" ? "unset" : "#FFFFFF87",
                                            height: "38px",
                                            width: "46px",
                                            backgroundColor: "#3366FF",
                                            boxShadow: "0px 6px 18px -8px rgba(76, 78, 100, 0.56)",
                                            borderRadius: "4px",
                                            display: !open ? "flex" : "none",
                                            marginLeft: "7px"


                                        }}
                                    >

                                        <AdminPanelSettingsOutlinedIcon sx={{ color: "#ffffff", }} />

                                    </ListItemIcon>


                                    <ListItemText onClick={toogleAdminPanel} primary={"Administration"} sx={{ opacity: open ? 1 : 0, display: "flex", justifyContent: "center", backgroundColor: "rgb(51, 102, 255)", padding: "5px", color: "#ffffff" }} />

                                </ListItemButton>
                            </Tooltip>

                        </ListItem>
                        ) : undefined
                }

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, gap: "20px", display: "flex", height: `calc(100vh - 70px)`, marginTop: "70px", width: "100%" }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
