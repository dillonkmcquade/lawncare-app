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
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "./global/Appbar.jsx";
import Sidebar from "./global/Sidebar.jsx";

const App = () => {
  return (
    <div className="app">
      <CssBaseline />
      <Appbar />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
