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
const App = () => {
  return (
    <div className="bg-dark">
      <nav>
        <section>
          <h1 className="yanone-font">LawnCare</h1>
        </section>
      </nav>
      <WeatherComponent />
    </div>
  );
};

export default App;
