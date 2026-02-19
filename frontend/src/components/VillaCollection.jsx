import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Bed, Bath, Maximize, TreePine, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';


const villas = [
  {
    id: 1,
    name: 'Crown Jewel Villa',
    type: '4 BHK Luxury Theme Villa',
    image: '/assets/asset/A1.jpeg',
    specs: { beds: 4, area: '1500 Sq Yard', garden: 'Orchid Garden' },
    features: ['Private Pool', 'Home Theatre', 'European Style', 'Fully Furnished'],
    roi: '₹95K - ₹1.1L/month',
  },
  {
    id: 2,
    name: 'Tuscan Villa',
    type: '3 BHK Premium Villa',
    image: '/assets/asset/A3.jpeg',
    specs: { beds: 3, area: '500 Sq Yard', garden: 'Landscape Garden' },
    features: ['Private Pool', 'Home Theatre', 'European Style', 'Fully Furnished'],
    roi: '₹55K - ₹70K/month',
  },
  {
    id: 3,
    name: 'Disney Theme Villa',
    type: 'Studio Villa Experience',
    image: '/assets/asset/A23.jpeg',
    specs: { beds: null, area: '250 Sq Yard', club: 'Club Amenities' },
    features: ['Disney Themed', 'Fully Furnished', 'Smart Home'],
    roi: '₹28K - ₹33K/month',
  },
];

const VillaCard = ({ villa, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="villa-card group relative bg-cube-charcoal border border-white/5 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`villa-card-${villa.id}`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden">
          <img
            src={villa.image}
            alt={villa.name}
            className="villa-card-image w-full h-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cube-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-cube-charcoal" />

          {/* ROI Badge */}
          <div className="absolute top-4 left-4 glass px-4 py-2">
            <p className="font-cinzel text-cube-gold text-xs tracking-wider uppercase">ROI</p>
            <p className="font-manrope text-cube-ivory text-sm font-semibold">{villa.roi}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-2">
            {villa.type}
          </p>
          <h3 className="font-playfair text-2xl lg:text-3xl text-cube-ivory mb-4">
            {villa.name}
          </h3>

          {/* Specs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-cube-ivory/60">
              <Bed size={18} className="text-cube-gold" />
              <span className="font-manrope text-sm">{villa.specs.beds} BHK</span>
            </div>
            {/* <div className="flex items-center gap-2 text-cube-ivory/60">
              <Bath size={18} className="text-cube-gold" />
              <span className="font-manrope text-sm">{villa.specs.baths} Baths</span>
            </div> */}
            <div className="flex items-center gap-2 text-cube-ivory/60">
              <Maximize size={18} className="text-cube-gold" />
              <span className="font-manrope text-sm">{villa.specs.area}</span>
            </div>
            {villa.specs.garden && (
              <div className="flex items-center gap-2 text-cube-ivory/60">
                <TreePine size={18} className="text-cube-gold" />
                <span className="font-manrope text-sm">{villa.specs.garden}</span>
              </div>
            )}
            {villa.specs.club && (
              <div className="flex items-center gap-2 text-cube-ivory/60">
                <Building2 size={18} className="text-cube-gold" />
                <span className="font-manrope text-sm">{villa.specs.club}</span>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-8">
            {villa.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 border border-cube-gold/30 text-cube-ivory/70 font-manrope text-xs tracking-wider"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/real-estate"
            className="inline-flex items-center gap-2 text-cube-gold font-manrope text-sm tracking-wider uppercase group/btn hover:gap-4 transition-all duration-300"
          >
            View Details
            <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="villa-card-overlay absolute inset-0 bg-cube-gold/5 pointer-events-none"
      />
    </motion.div>
  );
};

const VillaCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="villa-collection"
      className="py-24 md:py-32 bg-cube-black"
      data-testid="villa-collection"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory">
            The Villa Collection
          </h2>
        </motion.div>

        {/* Villa Cards */}
        <div className="space-y-8">
          {villas.map((villa, index) => (
            <VillaCard key={villa.id} villa={villa} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/real-estate"
            data-testid="view-all-villas"
            className="btn-luxury bg-transparent border border-cube-gold/40 text-cube-gold px-10 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-cube-gold hover:text-cube-black transition-all duration-500 inline-block"
          >
            View All Villas
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VillaCollection;
