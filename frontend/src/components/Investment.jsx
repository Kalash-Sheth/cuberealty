import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, TrendingUp, Calendar, Shield, Gift, Home, Wallet, Key, BarChart3, Plane } from 'lucide-react';

const steps = [
  { icon: Home, number: '01', title: 'Choose Villa', description: 'Select from our curated collection of luxury villas' },
  { icon: Key, number: '02', title: 'Purchase', description: 'Seamless documentation and ownership transfer' },
  { icon: BarChart3, number: '03', title: 'Rental Management', description: 'We handle all rental operations for you' },
  { icon: Wallet, number: '04', title: 'Monthly Income', description: 'Receive consistent rental returns' },
  { icon: Plane, number: '05', title: 'Lifestyle Access', description: 'Enjoy Extra complimentary stays' },
];

const metrics = [
  { value: '₹30K - ₹1.1L', label: 'Monthly Income', icon: TrendingUp },
  { value: '9 Years', label: 'Agreement Period', icon: Calendar },
  { value: 'Zero', label: 'Maintenance Cost', icon: Shield },
  { value: '15-30 Days', label: 'Complimentary Stays', icon: Gift },
];

const Investment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [viewMode, setViewMode] = useState('investment');

  return (
    <section
      ref={ref}
      id="investment"
      className="py-24 md:py-32 bg-cube-black relative"
      data-testid="investment-section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header with Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
            Your Investment Journey
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory mb-8">
            How It Works
          </h2>

          {/* Toggle Switch */}

          <button
            onClick={() => setViewMode('investment')}
            className={`px-6 py-3 font-manrope text-sm tracking-wider uppercase transition-all duration-300 ${viewMode === 'investment'
              ? 'bg-cube-gold text-cube-black'
              : 'text-cube-ivory/60 hover:text-cube-ivory'
              }`}
            data-testid="toggle-investment"
          >
            Investment View
          </button>
          <div className="inline-flex items-center glass p-1 mb-8" data-testid="view-toggle">
            <button
              onClick={() => setViewMode('lifestyle')}
              className={`px-6 py-3 font-manrope text-sm tracking-wider uppercase transition-all duration-300 ${viewMode === 'lifestyle'
                ? 'bg-cube-gold text-cube-black'
                : 'text-cube-ivory/60 hover:text-cube-ivory'
                }`}
              data-testid="toggle-lifestyle"
            >
              Lifestyle View
            </button>

          </div>
        </motion.div>

        {/* Timeline */}
        {viewMode === 'investment' && (
          <>
            <div className="relative mb-20">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cube-gold/30 to-transparent -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative text-center group"
                    data-testid={`step-${index + 1}`}
                  >
                    <div className="relative z-10 w-20 h-20 mx-auto mb-6 glass flex items-center justify-center group-hover:border-cube-gold transition-all duration-300">
                      <step.icon size={28} className="text-cube-gold" />
                    </div>
                    <p className="font-cinzel text-cube-gold text-xs tracking-wider mb-2">{step.number}</p>
                    <h3 className="font-playfair text-lg text-cube-ivory mb-2">{step.title}</h3>
                    <p className="font-manrope text-sm text-cube-ivory/60">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${viewMode === 'investment' ? '' : 'opacity-70'
                }`}
            >
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="glass p-8 text-center group hover:border-cube-gold/50 transition-all duration-300"
                  data-testid={`metric-${index}`}
                >
                  <metric.icon size={28} className="text-cube-gold mx-auto mb-4" />
                  <p className="font-playfair text-2xl md:text-3xl text-cube-gold mb-2">{metric.value}</p>
                  <p className="font-manrope text-sm text-cube-ivory/60 tracking-wider uppercase">{metric.label}</p>
                </div>
              ))}

            </motion.div>
          </>
        )}

        {/* Lifestyle View Content */}
        {viewMode === 'lifestyle' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src="/assets/asset/A5.jpeg"
                alt="Lifestyle Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cube-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-playfair text-2xl text-cube-ivory mb-2">Experience Luxury Living</p>
                <p className="font-manrope text-cube-ivory/70 text-sm">Your personal retreat awaits</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              {['Private pool', 'Home Theatre', 'Fully Furnished', 'Orchid Garden', 'European Themes', 'Farm House Community Access', 'Events & Experiences', 'Club House'].map((feature, index) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-cube-gold/30 flex items-center justify-center">
                    <Check size={16} className="text-cube-gold" />
                  </div>
                  <span className="font-manrope text-cube-ivory/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Investment;
