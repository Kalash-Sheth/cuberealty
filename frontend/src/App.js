import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RealEstatePage from "./pages/RealEstatePage";
import ContactPage from "./pages/ContactPage";
import InvestmentPage from "./pages/InvestmentPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App bg-cube-black min-h-screen">
      <BrowserRouter>
        <ScrollToTop />

        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/investment" element={<InvestmentPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
