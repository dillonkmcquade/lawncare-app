import { Box } from "@mui/system";
import WeatherComponent from "../components/weatherComponent.jsx";

function Dashboard() {
  return (
    <Box
      display="flex"
      height="100%"
      marginTop="60px"
      p={2}
      justifyContent="space-between"
    >
      <WeatherComponent />
      <WeatherComponent />
      <WeatherComponent />
    </Box>
  );
}
export default Dashboard;
