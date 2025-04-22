// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameList from "./components/GameList";
import GamePlayer from "./components/pages/GamePlayer";
import Developer from "./common/Developer";
import Affiliates from "./common/Affiliates";
import ContactUs from "./common/ContactUs";
import AboutUs from "./common/AboutUs";
import PrivacyPolicy from "./common/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/play/:title" element={<GamePlayer />} />
        <Route path="/developer" element={<Developer />} /> 
        <Route path="/affiliates" element={<Affiliates />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
      </Routes>
    </Router>
  );
}

export default App;
