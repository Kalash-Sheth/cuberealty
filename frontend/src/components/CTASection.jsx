import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Check } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    villa: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const villaOptions = [
    'Tuscan Villa - 4 BHK',
    'Mediterranean Retreat - 3 BHK',
    'Royal Farmhouse - 4 BHK',
    'Custom Inquiry',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', villa: '' });
    }, 3000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello! I am interested in ${formData.villa || 'The Cube Realty villas'}. My name is ${formData.name || 'Guest'}.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
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
          {/* Left Content */}
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
              Schedule a private tour of our exclusive villa collection. Our team will guide you through the investment process and help you find the perfect property.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-cube-gold/30 flex items-center justify-center">
                  <Check size={18} className="text-cube-gold" />
                </div>
                <span className="font-manrope text-cube-ivory/70 text-sm">No obligation tour</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-cube-gold/30 flex items-center justify-center">
                  <Check size={18} className="text-cube-gold" />
                </div>
                <span className="font-manrope text-cube-ivory/70 text-sm">Expert consultation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 md:p-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                      data-testid="cta-name-input"
                      className="w-full bg-transparent border-b border-white/20 focus:border-cube-gold text-cube-ivory px-0 py-4 placeholder:text-white/30 transition-all outline-none font-manrope"
                    />
                  </div>

                  <div>
                    <label className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      required
                      data-testid="cta-phone-input"
                      className="w-full bg-transparent border-b border-white/20 focus:border-cube-gold text-cube-ivory px-0 py-4 placeholder:text-white/30 transition-all outline-none font-manrope"
                    />
                  </div>

                  <div>
                    <label className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2 block">
                      Interested Villa
                    </label>
                    <select
                      value={formData.villa}
                      onChange={(e) => setFormData({ ...formData, villa: e.target.value })}
                      required
                      data-testid="cta-villa-select"
                      className="w-full bg-transparent border-b border-white/20 focus:border-cube-gold text-cube-ivory px-0 py-4 transition-all outline-none font-manrope appearance-none cursor-pointer"
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" className="bg-cube-charcoal">Select a villa</option>
                      {villaOptions.map((option) => (
                        <option key={option} value={option} className="bg-cube-charcoal">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      data-testid="cta-submit-btn"
                      className="btn-luxury bg-cube-gold text-cube-black px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500 flex items-center justify-center gap-2 flex-1"
                    >
                      <Send size={18} />
                      Schedule Visit
                    </button>
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      data-testid="cta-whatsapp-btn"
                      className="btn-luxury bg-[#25D366] text-white px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-[#128C7E] transition-colors duration-500 flex items-center justify-center gap-2"
                    >
                      <Phone size={18} />
                      WhatsApp
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-cube-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-cube-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl text-cube-ivory mb-2">Thank You!</h3>
                  <p className="font-manrope text-cube-ivory/70">
                    We'll contact you shortly to schedule your visit.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
