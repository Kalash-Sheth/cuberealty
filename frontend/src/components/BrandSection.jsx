import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BrandSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cube-black relative" data-testid="brand-section">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
              About The Cube Realty
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory leading-tight mb-6">
              Redefining Luxury
              <br />
              <span className="text-gold-gradient">Value-Driven Living</span>
            </h2>
            <div className="space-y-4 text-cube-ivory/70 font-manrope text-base md:text-lg leading-relaxed">
              <p>
                The Cube Realty is a boutique luxury real estate brand dedicated to curating exceptional living experiences that blend refined lifestyle with intelligent investment.
              </p>
              <p>
                Our vision goes beyond traditional development — creating exclusive spaces defined by thoughtful design, sustainable luxury, and enduring value.
              </p>
              <p>
                With a focus on investment-backed luxury living, we offer discerning investors the opportunity to own a piece of paradise that generates consistent returns while providing an unparalleled lifestyle experience.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-8"
            >
              <div>
                <p className="font-playfair text-4xl text-cube-gold">8+</p>
                <p className="font-manrope text-sm text-cube-ivory/60 tracking-wider uppercase mt-1">Luxury Themes</p>
              </div>
              <div>
                <p className="font-playfair text-4xl text-cube-gold">100%</p>
                <p className="font-manrope text-sm text-cube-ivory/60 tracking-wider uppercase mt-1">Managed Returns</p>
              </div>
              <div>
                <p className="font-playfair text-4xl text-cube-gold">9 Yr+</p>
                <p className="font-manrope text-sm text-cube-ivory/60 tracking-wider uppercase mt-1">Industry Expertise</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="/assets/asset/A2.jpeg"
                alt="Luxury Villa Interior"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cube-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 glass p-6 max-w-[280px]"
            >
              <p className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2">Our Promise</p>
              <p className="font-playfair text-cube-ivory text-lg italic">
                "Where luxury meets legacy, and investments meet lifestyle."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
