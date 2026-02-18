import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, TreePine, Car } from 'lucide-react';

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locationFeatures = [
    { icon: Car, text: 'Only 40 Kms from SG Highway' },
    { icon: TreePine, text: 'Surrounded by nature' },
    { icon: Navigation, text: 'Prime Development Location' },
  ];

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/QAQTHR1uFb1jUcQM7', '_blank');
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-cube-black relative"
      data-testid="location-section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
            Prime Location
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory">
            Where Nature Meets Luxury
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Map */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-cube-charcoal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.152309850058!2d72.2147335!3d22.7749193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395eb971648e8897%3A0x501a9f0642dd7f7f!2sThe%20Cube%20Club!5e1!3m2!1sen!2sin!4v1771447855494!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(50%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cube-black via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Info Card Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-md glass p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={24} className="text-cube-gold" />
              <h3 className="font-playfair text-xl text-cube-ivory">The Cube Realty</h3>
            </div>
            <p className="font-manrope text-cube-ivory/70 text-sm mb-6">
              Kerala Nalsarovar Road Baldana, Ahmedabad - Rajkot Hwy, Bavla, Gujarat 382240
            </p>

            <div className="space-y-3 mb-6">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon size={18} className="text-cube-gold" />
                  <span className="font-manrope text-cube-ivory/70 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={openGoogleMaps}
              data-testid="get-directions-btn"
              className="btn-luxury bg-cube-gold text-cube-black px-6 py-3 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500 w-full md:w-auto"
            >
              Get Directions
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
