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
    <footer className="bg-cube-black border-t border-white/5">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* =====================
             BRAND SECTION
          ====================== */}

          <div>

            <Link to="/" className="inline-block mb-8">
              <img
                src="/assets/asset/Logo_RB.png"
                alt="The Cube Realty"
                className="h-24 md:h-28 w-auto object-contain" // BIGGER LOGO
              />
            </Link>

            <p className="text-cube-ivory/70 font-manrope text-base leading-relaxed mb-8">
              Curated luxury living experiences that blend refined design, elevated lifestyle, and high-value investment opportunities.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 glass flex items-center justify-center text-cube-ivory/70 hover:text-cube-gold hover:border-cube-gold/50 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

          </div>

          {/* =====================
             QUICK LINKS
          ====================== */}

          <div>
            <h4 className="font-cinzel text-cube-gold text-sm tracking-[0.2em] uppercase mb-8">
              Quick Links
            </h4>

            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cube-ivory/70 hover:text-cube-gold font-manrope text-base transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* =====================
             CONTACT (UPDATED)
          ====================== */}

          <div className="lg:col-span-2">

            <h4 className="font-cinzel text-cube-gold text-sm tracking-[0.2em] uppercase mb-8">
              Contact
            </h4>

            <div className="space-y-6">

              {/* Site Address */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-cube-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-manrope text-cube-gold text-sm mb-1">Site Address</p>
                  <p className="text-cube-ivory/70 font-manrope text-base leading-relaxed">
                    Kerala Nalsarovar Road Baldana, Ahmedabad - Rajkot Hwy, Bavla, Gujarat 382240
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-cube-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-manrope text-cube-gold text-sm mb-1">Office Address</p>
                  <p className="text-cube-ivory/70 font-manrope text-base leading-relaxed">
                    205-206 Venus Benecia, Nr. Pakwan Junction, Nr. Khyati hospital, Above Nexa Showroom,
                    S.G. Highway, Bodakdev, Ahmedabad-380053
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-cube-gold flex-shrink-0" />
                <a
                  href="tel:+919327056262"
                  className="text-cube-ivory/70 hover:text-cube-gold font-manrope text-base transition-colors duration-300"
                >
                  +91 9327056262
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-cube-gold flex-shrink-0" />
                <a
                  href="mailto:thecuberealty99@gmail.com"
                  className="text-cube-ivory/70 hover:text-cube-gold font-manrope text-base transition-colors duration-300"
                >
                  thecuberealty99@gmail.com
                </a>
              </div>

            </div>

          </div>

        </div>


        {/* =====================
           BOTTOM BAR
        ====================== */}

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-cube-ivory/40 font-manrope text-base">
            © {currentYear} The Cube Realty. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-cube-ivory/40 hover:text-cube-gold font-manrope text-base transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-cube-ivory/40 hover:text-cube-gold font-manrope text-base transition-colors duration-300">
              Terms of Service
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
