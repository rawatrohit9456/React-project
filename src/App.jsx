import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import HeroSection from "./hero";
import MainContent from "./mainContent";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import Contact from "./contact";
import Counter from "./counter";
import ContactForm from "./Contactfrom";
import RentPage from "./RentPage"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MainContent />
              <AboutPage />
              <Counter />
              <ContactForm />
              <Contact />
            </>
          }
        />
        <Route path="/rent-now" element={<RentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
