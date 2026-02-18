import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import LocationSection from '../components/LocationSection';

const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="contact-page"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/asset/A9.jpeg"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cube-black/70 via-cube-black/50 to-cube-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cube-ivory leading-tight">
            Contact Us
          </h1>
        </motion.div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Location */}
      <LocationSection />
    </motion.main>
  );
};

export default ContactPage;
