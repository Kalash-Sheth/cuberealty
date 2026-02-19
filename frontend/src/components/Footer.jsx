import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-cube-black border-t border-white/5" data-testid="footer">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/assets/asset/Logo_RB.png"
                alt="The Cube Realty"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-cube-ivory/60 font-manrope text-sm leading-relaxed mb-6">
              Curated luxury living experiences that blend refined design, elevated lifestyle, and high-value investment opportunities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                  className="w-10 h-10 glass flex items-center justify-center text-cube-ivory/60 hover:text-cube-gold hover:border-cube-gold/50 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cube-ivory/60 hover:text-cube-gold font-manrope text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cube-gold mt-1 flex-shrink-0" />
                <span className="text-cube-ivory/60 font-manrope text-sm">
                  205-206 Venus Benecia, Nr. Pakwan Junction, Nr. Khyati hospital, Above Nexa Showroom, S.G. Highway, Bodakdev, Ahmedabad-380053
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cube-gold flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-cube-ivory/60 hover:text-cube-gold font-manrope text-sm transition-colors duration-300"
                >
                  +91 9327056262
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cube-gold flex-shrink-0" />
                <a
                  href="mailto:info@cuberealty.com"
                  className="text-cube-ivory/60 hover:text-cube-gold font-manrope text-sm transition-colors duration-300"
                >
                  thecuberealty99@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-6">
              Office Hours
            </h4>
            <ul className="space-y-3 text-cube-ivory/60 font-manrope text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cube-ivory/40 font-manrope text-sm">
            © {currentYear} The Cube Realty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cube-ivory/40 hover:text-cube-gold font-manrope text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-cube-ivory/40 hover:text-cube-gold font-manrope text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
