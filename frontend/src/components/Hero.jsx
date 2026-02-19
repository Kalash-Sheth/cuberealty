import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {

  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  const floatingIcons = [
    { icon: MapPin, label: 'Location', action: 'location' },
  ];

  const handleIconClick = (action) => {
    if (action === 'location') {
      window.open('https://maps.app.goo.gl/8uhE8fAT2CBmNKeK9', '_blank');
    }
  };

  return (

    <>
      {/* =========================
          SPLASH INTRO SCREEN
      ========================== */}

      <AnimatePresence>
        {showIntro && (

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[999] bg-cube-black flex items-center justify-center"
          >

            <motion.img
              src="/assets/asset/Logo_RB.png"
              alt="The Cube Realty"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 2, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-[220px] md:w-[280px]"
            />

          </motion.div>

        )}
      </AnimatePresence>


      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="relative h-screen w-full overflow-hidden">

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="video-bg">
            <source src="/assets/asset/Cube_HB.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 40 : 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            <p className="font-cinzel font-semibold text-cube-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
              Curated Luxury Real Estate Experiences
            </p>

            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cube-ivory leading-[1.1] mb-6">
              Iconic Real Estate
              <br />
              <span className="text-gold-gradient">Designed for Living & Earning</span>
            </h1>

            <p className="font-manrope text-cube-ivory/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
              Premium real estate experiences crafted for living, investing, and long-term value.
            </p>

            <Link
              to="/real-estate"
              className="btn-luxury bg-cube-gold text-cube-black px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500"
            >
              Explore Collection
            </Link>

          </motion.div>

          {/* Floating Icons */}
          <div className="absolute right-6 md:right-10 bottom-24 flex flex-col gap-4">
            {floatingIcons.map((item) => (
              <button
                key={item.label}
                onClick={() => handleIconClick(item.action)}
                className="floating-icon glass w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center gap-1"
              >
                <item.icon size={22} className="text-cube-gold" />
              </button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ChevronDown size={28} className="text-cube-gold/60" />
          </div>

        </div>

      </section>

    </>
  );
};

export default Hero;
