import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";

const styles = {
  style: {
    color: "rgba(76, 78, 100, 0.87)",
  },
};

type ComponentProps = {
  notifications: number;
};

function NotificationComp(props: ComponentProps) {
  return (
    <Badge
      overlap="circular"
      badgeContent={props.notifications > 0 ? props.notifications : undefined}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      //variant="dot"
      color={props.notifications > 0 ? "error" : undefined}
    >
      <NotificationsNoneOutlined
        sx={{ color: styles.style.color, height: "30px", width: "30px" }}
      />
    </Badge>
  );
}

export default NotificationComp;
