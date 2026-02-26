import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Sparkles, Award, Users, TrendingUp } from 'lucide-react';
import CTASection from '../components/CTASection';

const founders = [
  {
    name: 'Hardik Sheth',
    role: 'Co-Founder & Director',
    quote: '"Our vision is to create spaces where luxury meets purpose, and investment meets lifestyle."',
    image: '/assets/asset/Pro_Photo_1.png',
  },
  {
    name: 'Tejas Dadia',
    role: 'Co-Founder & Director',
    quote: '"Every villa we build is a testament to our commitment to excellence and investor success."',
    initial: 'T',
  },
];

const values = [
  { icon: Target, title: 'Vision', description: 'Creating legacy properties that appreciate in value and experience' },
  { icon: Heart, title: 'Passion', description: 'Dedicated to crafting exceptional living experiences' },
  { icon: Sparkles, title: 'Excellence', description: 'Uncompromising quality in every detail' },
];

const stats = [
  { icon: Award, value: '9+', label: 'Years of Excellence' },
  { icon: Users, value: '150+', label: 'Happy Investors' },
  { icon: TrendingUp, value: '100%', label: 'ROI Delivered' },
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const foundersRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isFoundersInView = useInView(foundersRef, { once: true, margin: "-100px" });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="about-page"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/asset/A1.jpeg"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cube-black/60 via-cube-black/40 to-cube-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cube-ivory leading-tight">
            The Cube Realty
            <br />
            <span className="text-gold-gradient">Redefining Luxury Living</span>
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 md:py-32 bg-cube-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
                The Beginning
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-cube-ivory leading-tight mb-6">
                A Vision Born from
                <br />
                <span className="text-gold-gradient">Passion & Purpose</span>
              </h2>
              <div className="space-y-4 text-cube-ivory/70 font-manrope text-base leading-relaxed">
                <p>
                  The Cube Realty was founded with a singular vision: to create exceptional luxury living experiences that serve as both luxurious retreats and smart investments.
                </p>
                <p>
                  Our founders, Hardik Sheth and Tejas Dadia, recognized a gap in the market for properties that combine world-class amenities with sustainable returns. What began as a dream has now transformed into a premier boutique real estate brand.
                </p>
                <p>
                  Today, we continue to set new standards in luxury farmhouse development, with every project reflecting our commitment to excellence, innovation, and investor success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/asset/A3.jpeg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6">
                <p className="font-playfair text-3xl text-cube-gold mb-1">2021</p>
                <p className="font-manrope text-cube-ivory/60 text-sm">Founded in Ahmedabad</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 md:py-32 bg-cube-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
              What Drives Us
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-cube-ivory">
              Our Vision & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass p-8 text-center group hover:border-cube-gold/30 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-cube-gold/30 flex items-center justify-center group-hover:bg-cube-gold/10 transition-all duration-300">
                  <value.icon size={28} className="text-cube-gold" />
                </div>
                <h3 className="font-playfair text-xl text-cube-ivory mb-3">{value.title}</h3>
                <p className="font-manrope text-cube-ivory/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={32} className="text-cube-gold mx-auto mb-4" />
                <p className="font-playfair text-4xl text-cube-gold mb-2">{stat.value}</p>
                <p className="font-manrope text-cube-ivory/60 text-sm tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section ref={foundersRef} className="py-24 md:py-32 bg-cube-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFoundersInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
              Leadership
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-cube-ivory">
              Meet Our Founders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isFoundersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="glass p-8 md:p-10 text-center group hover:border-cube-gold/30 transition-all duration-300"
                data-testid={`founder-${index}`}
              >
                
                {/* Avatar Placeholder
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cube-gold/30 to-cube-bronze/30 flex items-center justify-center">
                  <span className="font-playfair text-4xl text-cube-gold">{founder.initial}</span>
                </div> */}

                {/* Founder Image */}
                <div className="w-52 mx-auto mb-6 border border-cube-gold/30">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-auto"
                  />
                </div>

                <h3 className="font-playfair text-2xl text-cube-ivory mb-1">{founder.name}</h3>
                <p className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-6">{founder.role}</p>

                <p className="font-playfair text-cube-ivory/80 italic text-lg leading-relaxed">
                  {founder.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </motion.main>
  );
};

export default AboutPage;
