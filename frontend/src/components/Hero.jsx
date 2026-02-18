import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Home, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Hero = () => {
  const [isFabOpen, setIsFabOpen] = useState(false);

  const floatingIcons = [
    { icon: MapPin, label: 'Location', action: 'location' },
    { icon: Home, label: 'Collection', action: 'collection' },
  ];

  const handleIconClick = (action) => {
    if (action === 'location') {
      window.open('https://maps.google.com/?q=Ahmedabad,Gujarat,India', '_blank');
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/919876543210?text=Hello!%20I%20am%20interested%20in%20The%20Cube%20Realty%20villas.', '_blank');
    } else if (action === 'collection') {
      document.getElementById('villa-collection')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" data-testid="hero-section">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-bg"
          poster="/assets/asset/A1.jpeg"
        >
          <source src="/assets/asset/Villa_video_cube.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-cinzel font-semibold text-cube-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
          >
            Curated Luxury Real Estate Experiences
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cube-ivory leading-[1.1] mb-6"
          >
            Iconic Real Estate
            <br />
            <span className="text-gold-gradient">Designed for Living & Earning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-manrope text-cube-ivory/70 text-base md:text-lg max-w-2xl mx-auto mb-10"
          >
            Premium real estate experiences crafted for living, investing, and long-term value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/real-estate"
              data-testid="hero-explore-btn"
              className="btn-luxury bg-cube-gold text-cube-black px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500"
            >
              Explore Villas
            </Link>
            <Link
              to="/contact"
              data-testid="hero-schedule-btn"
              className="btn-luxury bg-transparent border border-cube-ivory/30 text-cube-ivory px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:border-cube-gold hover:text-cube-gold transition-all duration-500"
            >
              Schedule Visit
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute right-6 md:right-10 bottom-24 flex flex-col gap-4"
        >
          {floatingIcons.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleIconClick(item.action)}
              data-testid={`floating-${item.action}`}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="floating-icon glass w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-cube-gold/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <item.icon size={22} className="text-cube-gold" />
              <span className="text-cube-ivory/70 text-[10px] font-manrope tracking-wider uppercase">
                {item.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
        >
          <ChevronDown size={28} className="text-cube-gold/60" />
        </motion.div>
      </div>

      {/* Mobile Floating Action Menu */}
      <div className="lg:hidden fixed top-24 right-4 z-30">

        {/* Main FAB Button */}
        <motion.button
          onClick={() => setIsFabOpen(!isFabOpen)}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-cube-gold text-cube-black flex items-center justify-center shadow-lg"
        >
          <Home size={22} />
        </motion.button>

        {/* Expanded Icons */}
        <AnimatePresence>
          {isFabOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              className="flex flex-col gap-3 mt-3"
            >
              {floatingIcons.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleIconClick(item.action)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <item.icon size={18} className="text-cube-gold" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};

export default Hero;
