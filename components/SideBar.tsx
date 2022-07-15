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
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Image from "next/image"
const drawerWidth = 260;
const menuId = 'primary-search-account-menu';
const userSettings = ["Profile", "Preferences", "Reset Password", "Logout"]
const menuItems = [
    { name: "Dashboard", icon: "", isActive: true, id: "123" },
    { name: "Articles", icon: "", isActive: false, id: "1234" },
    { name: "File manager", icon: "", isActive: false, id: "1234a" },
    { name: "Assignments", icon: "", isActive: false, id: "1233e4" },
]
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
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

export default function MiniDrawer({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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

    return (
        <Box sx={{ display: 'flex', background: "#F5F6F8" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="secondary">
                <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "0", paddingRight: "33.8px" }}>
                    <Box sx={{
                        display: "flex"
                    }}>

                        <IconButton

                            edge="start"
                            onClick={open ? handleDrawerClose : handleDrawerOpen}>
                            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
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

                            {/* <IconButton> */}
                            <DarkModeOutlinedIcon />
                            {/* </IconButton> */}
                            {/* <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            > */}

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
                            {/* </IconButton> */}
                        </Box>

                        {/* Account setting section start */}

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
            <Drawer variant="permanent" open={open}>
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
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: "#EBF0FE",
                                    borderRadius: "8px",
                                    width: "46px",
                                    height: "42px",
                                    // margin: "auto"
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {<HomeOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
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
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
