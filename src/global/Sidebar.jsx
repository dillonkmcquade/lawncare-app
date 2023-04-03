import Drawer from "@mui/material/Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

function Sidebar() {
  const drawerWidth = 240;
  return (
    <Drawer
      variant="permanent"
      position="relative"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <GridViewRoundedIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Application-History">
              <ListItemIcon>
                <HistoryRoundedIcon />
              </ListItemIcon>
              <ListItemText>Application History</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="Fertilizer-Calculator">
              <ListItemIcon>
                <CalculateRoundedIcon />
              </ListItemIcon>
              <ListItemText>Fertilizer Calculator</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="GDD-tracker">
              <ListItemIcon>
                <QueryStatsRoundedIcon />
              </ListItemIcon>
              <ListItemText>GDD Tracker</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <ListItem>
          <ListItemButton component={Link} to="sign-in">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
}
export default Sidebar;
