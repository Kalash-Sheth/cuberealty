import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import BrandSection from '../components/BrandSection';
import VillaCollection from '../components/VillaCollection';
import Amenities from '../components/Amenities';
import Investment from '../components/Investment';
import Testimonials from '../components/Testimonials';
import LocationSection from '../components/LocationSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
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
      <Investment />
      <Testimonials />
      <LocationSection />
      <CTASection />
    </motion.main>
  );
};

export default HomePage;
