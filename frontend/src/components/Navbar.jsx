import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ===============================
     SCROLL NAVBAR EFFECT
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ===============================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  =============================== */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  /* ===============================
     NAV LINKS
  =============================== */
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'Investment', path: '/investment' },
    { name: 'About Us', path: '/about' },
  ];

  /* ===============================
     HANDLE INVESTMENT NAVIGATION
  =============================== */
  const handleInvestmentClick = () => {
    if (location.pathname !== '/') {
      navigate('/investment');
    } else {
      const section = document.querySelector('#investment');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'navbar-scrolled py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/asset/Logo_RB.png"
              alt="The Cube Realty"
              className="absolute h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center ml-auto">
            <div className="flex items-center gap-10">

              {navLinks.map((link) => {

                if (link.name === 'Investment') {
                  return (
                    <button
                      key={link.name}
                      onClick={handleInvestmentClick}
                      className="font-manrope font-semibold text-[15px] tracking-wider uppercase transition-all duration-300 hover:text-cube-gold text-cube-ivory/80"
                    >
                      {link.name}
                    </button>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-manrope font-semibold text-[15px] tracking-wider uppercase transition-all duration-300 hover:text-cube-gold ${
                      location.pathname === link.path
                        ? 'text-cube-gold'
                        : 'text-cube-ivory/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

            </div>

            {/* CTA BUTTON */}
            <Link
              to="/contact"
              className="ml-16 btn-luxury bg-cube-gold text-cube-black px-6 py-3 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cube-ivory p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* ===============================
          MOBILE MENU
      =============================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cube-black/98 backdrop-blur-xl lg:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-8 p-8">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name === 'Investment' ? (
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleInvestmentClick();
                      }}
                      className="font-playfair text-2xl text-cube-ivory hover:text-cube-gold transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-playfair text-2xl transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'text-cube-gold'
                          : 'text-cube-ivory'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="mt-6 btn-luxury bg-cube-gold text-cube-black px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold"
                >
                  Contact
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
