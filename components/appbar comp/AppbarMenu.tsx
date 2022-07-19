import * as React from "react";
import { Box } from "@mui/system";
import { Badge, Menu, MenuItem, IconButton, Divider, Typography, Stack } from "@mui/material";
import Image from "next/image";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import AbcIcon from '@mui/icons-material/Abc';

const styles = {
  style: {
    color: "rgba(76, 78, 100, 0.87)",
  },
};

type ComponentProps = {
  isOnline: boolean,
  userName: string,
  userRole: string,
  userMenuList:string[]
}



function AppBarMenu(props:React.PropsWithChildren<ComponentProps>) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{display:'block', width:'60px'}}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        color={props.isOnline?'success':undefined}
      >
        <Image alt="Remy Sharp" src="/profile-pic.png" height={30} width={30} />
      </Badge>
      <IconButton
        id="user-menu"
        sx={{pr:0}}
        size="large"
        edge="start"
        color="inherit"
        aria-label="user-menu"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <ArrowDropDown
          sx={{
            color: styles.style.color,
            height: "20px",
            width: "20px",
          }}
        />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-menu",
        }}
        sx={{mt:2}}
      >
        <MenuItem onClick={handleClose}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            color="success"
          >
            <Image
              alt="Remy Sharp"
              src="/profile-pic.png"
              height={30}
              width={30}
            />
          </Badge>
          <Stack direction='column' ml={1}>
          <Typography variant="h4" fontSize={13} fontWeight={600} color='rgba(76, 78, 100, 0.87)' >{props.userName}</Typography>
          <Typography fontSize={10} fontWeight={400} color='rgba(76, 78, 100, 0.87)'>{props.userRole}</Typography>
          </Stack>
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Preferences</MenuItem>
        <MenuItem onClick={handleClose}>Reset Password</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        {props.userMenuList.map(item=><MenuItem key={item} onClick={handleClose}>
          <AbcIcon />
          <Typography fontSize={13} fontWeight={400} color='rgba(76, 78, 100, 0.87)'>
            {item}
          </Typography>
        </MenuItem>)}
      </Menu>
    </Box>
  );
}

export default AppBarMenu;
