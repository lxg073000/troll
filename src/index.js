// React Imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import "./index.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

// Component Imports
import Header from "./Header";
import Dashboard from "./Dashboard";
import Calendar from "./pages/calendar/Calendar";
import Challenges from "./pages/challenges/Challenges";
import Mentors from "./pages/mentors/Mentors";
import Resources from "./pages/resources/Resources";

// Misc imports
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="calendar" element={<Calendar />}></Route>
          <Route path="challenges" element={<Challenges />}></Route>
          <Route path="mentors" element={<Mentors />}></Route>
          <Route path="resources" element={<Resources />}></Route>
        </Routes>
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
