import { motion } from 'framer-motion';
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Hero from '../components/Hero';
import BrandSection from '../components/BrandSection';
import VillaCollection from '../components/VillaCollection';
import Amenities from '../components/Amenities';
import Investment from '../components/Investment';
import Testimonials from '../components/Testimonials';
import LocationSection from '../components/LocationSection';
import CTASection from '../components/CTASection';

const HomePage = () => {

  const location = useLocation();


  const initialLoad = useRef(true);

  useEffect(() => {

    // Prevent scroll on first load
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    if (location.hash) {

      const el = document.querySelector(location.hash);

      if (el) {

        const yOffset = -120; // navbar offset
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    }

  }, [location]);


  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="home-page"
    >
      <Hero />

      <BrandSection />

      <VillaCollection />

      <Amenities />

      {/* IMPORTANT — ADD ID HERE */}
      <section id="investment">
        <Investment />
      </section>

      <Testimonials />

      <LocationSection />

      <CTASection />

    </motion.main>
  );
};

export default HomePage;
