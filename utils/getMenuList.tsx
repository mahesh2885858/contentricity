import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
interface PropsType {
    OnClick: (id: string) => void;

}
const getMenuList = () => {
    return (
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
  )
}

export default getMenuList