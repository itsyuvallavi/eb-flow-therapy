import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "./NavBar.jsx";
import Contact from "./Contact.jsx";
import Services from './Services.jsx';
import Home from "./HomePage/_HomeLayout.jsx";
import OurTeam from "./OurTeam.jsx";
import PageLayout from "./modal/PageLayout.jsx";
import TherapistProfile from './TherapistProfile.jsx';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return null;
};

const MainLayout = () => {
  return (
    <Router basename="/eb-flow-therapy">
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/therapists/:id" element={<TherapistProfile />} />
          </Routes>
        </PageLayout>
      </div>
    </Router>
  );
};

export default MainLayout;