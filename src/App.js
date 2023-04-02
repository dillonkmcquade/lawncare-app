/*
 * Database for storing temperature, gdd, fertility data
 *
 * local conditions widget
 * rainfall YTD numbers
 * fertility widget (data visualization library?)
 * fertilizer application logs that accumulate into fertility widget graph
 * GDD Tracker
 * fertilizer calculator (square ft, lb/1000, fertilizer analysis)
 * log-in capability to access personalized data (auth)
 * SCSS?
 *
 * */
import "./App.css";
import WeatherComponent from "./components/weatherComponent.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";

const App = () => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LawnCare App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
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
            {["Application Logs", "Fertilizer Calculator", "GDD Tracker"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} />
          </ListItem>
        </Box>
      </Drawer>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#e0e0dc",
          marginTop: "60px",
          height: "100vh",
          width: "100%",
        }}
      >
        <Grid>
          <WeatherComponent />
        </Grid>
        <Grid>
          <WeatherComponent />
        </Grid>
        <Grid>
          <WeatherComponent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
