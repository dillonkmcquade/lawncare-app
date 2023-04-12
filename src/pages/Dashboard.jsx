import { Box } from "@mui/system";
import WeatherComponent from "../components/weatherComponent.jsx";

function Dashboard() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      height="100%"
      minWidth="500px"
      marginTop="60px"
      p={2}
    >
      <WeatherComponent />
      <WeatherComponent />
      <WeatherComponent />
    </Box>
  );
}
export default Dashboard;
