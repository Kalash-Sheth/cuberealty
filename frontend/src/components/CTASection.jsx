import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Check } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const openWhatsApp = () => {

    const finalMessage = encodeURIComponent(
      `Hello, I have an inquiry about The Cube Realty.

Inquiry Message:
${formData.message}

Name: ${formData.name}
Phone: ${formData.phone}`
    );

    window.open(`https://wa.me/919327056262?text=${finalMessage}`, '_blank');
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-cube-charcoal relative overflow-hidden"
      data-testid="cta-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/asset/A9.jpeg"
          alt="Luxury Villa"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cube-black via-cube-black/90 to-cube-black/70" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT (same as before) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
              Start Your Journey
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory leading-tight mb-6">
              Experience Luxury.
              <br />
              <span className="text-gold-gradient">Invest Smart.</span>
            </h2>

            <p className="font-manrope text-cube-ivory/70 text-base md:text-lg leading-relaxed mb-8">
              Send us your inquiry directly. Our team will connect with you personally.
            </p>

            <div className="flex flex-wrap gap-6"> <div className="flex items-center gap-3"> <div className="w-10 h-10 border border-cube-gold/30 flex items-center justify-center"> <Check size={18} className="text-cube-gold" /> </div> <span className="font-manrope text-cube-ivory/70 text-sm">Property Experience</span> </div> <div className="flex items-center gap-3"> <div className="w-10 h-10 border border-cube-gold/30 flex items-center justify-center"> <Check size={18} className="text-cube-gold" /> </div> <span className="font-manrope text-cube-ivory/70 text-sm">Expert consultation</span> </div> </div>
          </motion.div>



          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 md:p-10 space-y-6">

              {/* NAME */}
              <div>
                <label className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-white/20 focus:border-cube-gold text-cube-ivory py-4 outline-none font-manrope"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-transparent border-b border-white/20 focus:border-cube-gold text-cube-ivory py-4 outline-none font-manrope"
                />
              </div>

              {/* CUSTOM MESSAGE */}
              <div>
                <label className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2 block">
                  Custom Inquiry Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your inquiry..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 focus:border-cube-gold text-cube-ivory py-4 outline-none font-manrope resize-none"
                />
              </div>

              {/* SEND BUTTON */}
              <button
                onClick={openWhatsApp}
                className="btn-luxury bg-cube-gold text-cube-black px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500 flex items-center justify-center gap-2 w-full"
              >
                <Send size={18} />
                Send Message
              </button>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;

