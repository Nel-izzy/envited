import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventPage from "./pages/EventPage";
import EventForm from "./pages/EventForm";

function App() {
  return (
    <main className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/event-details" element={<EventPage />} />
          <Route exact path="/event-form" element={<EventForm />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
