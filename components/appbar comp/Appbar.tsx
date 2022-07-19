import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
//import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import { TextField } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AppBarMenu from "./AppbarMenu";
import NotificationComp from "./NotificationComp";

const styles = {
  style: {
    color: "rgba(76, 78, 100, 0.87)",
  },
};

export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const drawerCalc = (isOpen: boolean): string => {
    if (isOpen) return "240px";
    else return "75px";
  };
  const drawerWidth = React.useMemo(() => drawerCalc(drawerOpen), [drawerOpen]);
  const handleDrawerOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDrawerOpen((prevState) => !prevState);
  };
  const handleDarkModeToggle = () => {
    console.log("theme toggle")
  }

  //data to be fetched for user session
  const isOnline = true; //shows a green dot for if the user is online
  const userName = "John Doe";
  const userRole = "Administrator";
  const menuArray = ["Profile", "Preferences", "Reset Password", "Logout"];
  const notifications = 0;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <AppBar
        elevation={0}
        position="static"
        sx={{
          width: `calc(100% - ${drawerWidth})`,
          bgcolor: "rgba(255, 255, 255, 1)",
          color: "rgba(76, 78, 100, 0.87)",
          height: "70px",
          border: "1px solid rgba(202, 193, 193, 0.44);",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            pr: 0,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="drawer-button"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            {drawerOpen ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </IconButton>
          <TextField
            sx={{ color: "rgba(76, 78, 100, 0.37)" }}
            variant="standard" // <== changed this
            margin="normal"
            required
            fullWidth
            autoFocus
            placeholder="Search articles"
            InputProps={{
              startAdornment: (
                <SearchOutlined sx={{ color: " rgba(76, 78, 100, 0.68)" }} />
              ), // <== adjusted this
              disableUnderline: true, // <== added this
            }}
          />

          <Box
            display="flex"
            width="180px"
            sx={{ gap: "15px" }}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <IconButton sx={{p:0}} aria-label='dark mode toggle' onClick={handleDarkModeToggle}>
            <DarkModeOutlined sx={{ color: styles.style.color }} />
            </IconButton>
            <NotificationComp notifications={notifications} />
            <AppBarMenu
              isOnline={isOnline}
              userName={userName}
              userRole={userRole}
              userMenuList={menuArray}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
