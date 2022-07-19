import * as React from 'react';
import { styled, useTheme, Theme, CSSObject, alpha } from '@mui/material/styles';
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
import Button from "@mui/material/Button"
import { ColorModeContext } from "./ColorModeContext"
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ButtonAppBar from './appbar comp/Appbar';
import { MenuItems } from './data/MenuSettings';

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
        backgroundColor: themeContext.mode === "light" ? "#ffffff" : "#30334E"

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
        height: "70px",
        boxShadow: "none",
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
    const navigateToMenuItemSecion = (id: string) => {

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


                        <Box sx={{ flexGrow: 0, display: "flex" }}>
                            <Avatar sx={{
                                height: "40px",
                                width: "40px"
                            }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <ArrowDropDownOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{
                                    mt: '55px',
                                    height: "100%",

                                }}
                                PaperProps={
                                    {
                                        sx: {
                                            width: "162px",
                                            height: "212px",
                                            border: "1px solid #E9E9EC",
                                            borderRadius: "4px",
                                            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.05), 0px 3px 10px rgba(0, 0, 0, 0.11)"

                                        }
                                    }
                                }
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Box sx={{ width: "100%", height: "69px", display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                                    <Box sx={{ width: "40px", height: "40px" }}>
                                        <Image src="/Group1.png" alt='some' width={"100%"} height="100%" style={{ borderRadius: "50%" }} />
                                    </Box>
                                    <Box>
                                        <Typography fontSize={13} >
                                            Jhon Doe
                                        </Typography>
                                        <Typography fontSize={10}>
                                            Administrator
                                        </Typography>
                                    </Box>
                                </Box>

                                {userSettings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}  >
                                        <Typography fontSize={13} textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>


                        {/* accoutn settings sectin End */}
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider color="#ffffff" />
            <Drawer variant="permanent"
                open={open}>
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
                <List sx={{ display: "flex", gap: "5px", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", height: "100vh" }}>
                    {isAdmin && showAdminPanel && open ? (
                        <Box height={"53px"} sx={{ display: "flex", backgroundColor: themeContext.mode === "light" ? "#F5F8FF" : "#30334E", justifyContent: "center", alignItems: "center" }} >
                            <Typography fontSize={16} fontWeight={"500"} display={"inline"} >

                                ADMINISTRATION
                            </Typography>
                            <CloseOutlinedIcon onClick={toogleAdminPanel} sx={{ marginLeft: '63px', cursor: "pointer" }} />
                        </Box>) : undefined}
                    {menu.map((item, index) => {
                        if (item.type === "sub") return undefined
                        if (!isAdmin || !showAdminPanel) {

                        }
                        else if (item.name === "Settings") {
                            return (
                                <>
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

                                        {/* {expandAdminSettings ? <ExpandLess /> : <ExpandMore />} */}

                                        <Collapse in={expandAdminSettings} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {menu.map((item,) => {
                                                    if (!(item.type === "sub")) return undefined
                                                    return (

                                                        <ListItemButton key={item.id} sx={{ pl: 4 }}>
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
                                </>
                            )

                        }
                        else return (


                            <ListItem onClick={() => navigateToMenuItemSecion(item.id)} key={item.id} disablePadding sx={{ display: 'flex', flexDirection: "column" }}>
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



                    })}

                    {
                        isAdmin ?

                            (<ListItem disablePadding sx={{ display: 'flex', flexDirection: "column", }}>
                                <Tooltip title={"admin"} placement="right" >

                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                            // backgroundColor: themeContext.mode === "light" && item.isActive ? "#EBF0FE" : (themeContext.mode === "dark" ? "#30334E" : "#fff"),
                                            borderRadius: "8px",
                                            width: open ? "213px" : "46px",
                                            height: "42px",

                                        }}
                                    >

                                        <ListItemIcon
                                            onClick={toogleAdminPanel}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                                color: themeContext.mode === "light" ? "unset" : "#FFFFFF87",
                                                height: "38px",
                                                width: "46px",
                                                backgroundColor: "#3366FF",
                                                boxShadow: "0px 6px 18px -8px rgba(76, 78, 100, 0.56)",
                                                borderRadius: "4px"

                                            }}
                                        >
                                            {/* <Box sx={{
                                                height: "38px",
                                                width: "46px",


                                            }}
                                            // > */}
                                            {/* // <Image src={"/RectangleAdmin.png"} width={"100%"} height={"100%"} /> */}
                                            <AdminPanelSettingsOutlinedIcon sx={{ color: "#ffffff" }} />

                                            {/* </Box> */}
                                        </ListItemIcon>

                                        {/* {open && isAdmin ?
                                    (<Button
                                        onClick={toogleAdminPanel}
                                        style={{ backgroundColor: "#3366FF", color: "#ffffff", height: "38px", width: "218px" }}
                                        sx={{
                                            opacity: open ? 1 : 0,
                                            
                                        }} >Administration</Button>
                                    ) : undefined} */}
                                        <ListItemText primary={"Administration"} sx={{ opacity: open ? 1 : 0 }} />

                                    </ListItemButton>
                                </Tooltip>

                            </ListItem>
                            ) : undefined
                    }
                </List>
                {/* <Divider /> */}
                {/* <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <Tooltip title={text}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, gap: "20px", display: "flex", height: `calc(100vh - 70px)`, marginTop: "70px", width: "100%" }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
