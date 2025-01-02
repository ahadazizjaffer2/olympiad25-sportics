import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarComponent from "./components/GlobalComponents/NavBarComponent";
import FooterComponent from "./components/GlobalComponents/FooterComponent";
import Loader from "./components/GlobalComponents/Loader"; 
import HomePage from "./pages/HomePage";
import EventFlow from "./pages/EventFlow";
import RegistrationPage from "./pages/RegistrationPage";
import FAQPage from "./pages/FAQPage";
import NotFoundPage from "./pages/NotFoundPage";
import RulesPage from "./pages/RulesPage";
import TeamPage from "./pages/TeamPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {loading ? (
        <Loader /> 
      ) : (
        <Router>
          <NavbarComponent />
          {/* <main> */}
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/event-flow" element={<EventFlow />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/rules" element={<RulesPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          {/* </main> */}
          <FooterComponent />
        </Router>
      )}
    </div>
  );
}
