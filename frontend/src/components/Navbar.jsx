import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'Investment', path: '#investment' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <motion.nav
        data-testid="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'navbar-scrolled py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <img
              src="/assets/asset/Logo_RB.png"
              alt="The Cube Realty"
              className="absolute h-20 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center ml-auto">

            {/* Desktop Menu */}
            <div className="flex items-center gap-10">
              {navLinks.map((link) =>
                link.path.startsWith('#') ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      const section = document.querySelector(link.path);
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-manrope font-semibold text-[15px] tracking-wider uppercase transition-all duration-300 hover:text-cube-gold text-cube-ivory/80"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-manrope font-semibold text-[15px] tracking-wider uppercase transition-all duration-300 hover:text-cube-gold ${location.pathname === link.path
                      ? 'text-cube-gold'
                      : 'text-cube-ivory/80'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              )}

            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              data-testid="nav-schedule-visit"
              className="ml-16 btn-luxury bg-cube-gold text-cube-black px-6 py-3 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500"
            >
              Contact Us
            </Link>

          </div>


          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cube-ivory p-2"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cube-black/98 backdrop-blur-xl lg:hidden pt-24"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.path.startsWith('#') ? (
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false); // close mobile menu
                        const section = document.querySelector(link.path);
                        section?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="font-playfair text-2xl transition-colors duration-300 text-cube-ivory"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-playfair text-2xl transition-colors duration-300 ${location.pathname === link.path
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
