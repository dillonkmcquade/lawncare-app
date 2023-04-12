/*
 * Database for storing temperature, gdd, fertility data
 *
 *
 * rainfall YTD numbers
 * fertility widget (nivo)
 * fertilizer application log summary (data grid) w/ new application log modal that accumulate into fertility widget graph
 * GDD Tracker
 * fertilizer calculator (square ft, lb/1000, fertilizer analysis)
 * log-in capability to access personalized data (firebase auth)
 *
 * */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import Dashboard from "./pages/Dashboard.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "./global/Appbar.jsx";
import Sidebar from "./global/Sidebar.jsx";
import SignIn from "./pages/signin.jsx";

const App = () => {
  const [signedIn, setSignedIn] = useState(
    localStorage.getItem("signedIn") === "true"
  );
  return (
    <div>
      {signedIn === false ? (
        <Box className="app">
          <CssBaseline />
          <Appbar />
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </Box>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default App;
