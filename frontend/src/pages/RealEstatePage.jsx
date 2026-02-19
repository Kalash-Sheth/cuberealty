import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Crown,
  Castle,
  Sparkles,
  Bed,
  Bath,
  Maximize,
  TreePine,
  Car,
  Waves,
  Wifi,
  Utensils,
  Shield,
  TrendingUp,
  Calendar,
  Gift,
  CheckCircle2,
  Home,
  Building2,
  MapPin,
  Phone,
  X,
  ShieldCheck,
  CalendarDays,
  Trees,
  Map,
  Bird,
  Film, 
  Sofa, 
  Flower2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingVillaNavigator = ({ currentIndex, setCurrentIndex }) => {

  const prevVilla = () => {
    setCurrentIndex(prev => (prev - 1 + villas.length) % villas.length);
  };

  const nextVilla = () => {
    setCurrentIndex(prev => (prev + 1) % villas.length);
  };

  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-40">

      {/* LEFT BUTTON */}
      <motion.button
        onClick={prevVilla}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 glass flex items-center justify-center text-cube-gold/80 hover:text-cube-gold hover:bg-cube-gold hover:text-cube-black/80 hover:backdrop-blur-none transition-all duration-300"
      >
        <ChevronLeft size={28} />
      </motion.button>

      {/* RIGHT BUTTON */}
      <motion.button
        onClick={nextVilla}
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 glass flex items-center justify-center text-cube-gold/80 hover:text-cube-gold hover:bg-cube-gold hover:text-cube-black/80 hover:backdrop-blur-none transition-all duration-300"
      >
        <ChevronRight size={28} />
      </motion.button>

    </div>
  );
};


// Villa Data
const villas = [

  /* ================================
     CROWN JEWEL VILLA
  ================================ */

  {
    id: 1,
    name: 'Crown Jewel Villa',
    tagline: 'The Pinnacle of Luxury Living',
    icon: Crown,
    heroImage: '/assets/asset/A1.jpeg',

    images: [
      '/assets/asset/A1.jpeg',
      '/assets/asset/A2.jpeg',
      '/assets/asset/A3.jpeg',
      '/assets/asset/A4.jpeg',
      '/assets/asset/A5.jpeg',
      '/assets/asset/A6.jpeg',
      '/assets/asset/A7.jpeg',
      '/assets/asset/A8.jpeg',
      '/assets/asset/A9.jpeg',
    ],

    specs: {
      bhk: '4 BHK',
      plot: '1500 Sq yard',
      construction: '250 Sq yard',
      furnished: 'Fully Furnished',
      theme: 'European Themed',
      location: '40kms from SG Highway',
      parking: 3,
    },

    price: '₹2.4 Cr',
    roi: '₹95K - ₹1.1L/month',

    offerings: [
      'Private Pool',
      'Home Theatre',
      'Fully Furnished',
      'Orchid Garden',
      'Luxury Collection',
      'Elegant Interiors',
    ],

    amenities: [
      'ClubHouse Access',
      'Farmhouse Gated Community',
      'Events & Experiences',
      'Lake View',
      'Restaurant',
      '90,000+ Lush Green Trees',
      '120+ Green Acres of Land',
      '250+ Species of Birds',
    ],

    investment: {
      agreement: '9 Years',
      maintenance: 'Zero Cost',
      stays: '30 Days/Year',
      appreciation: '12-15% Annual',
    },

    benefits: [
      'Hassle-free rental management',
      'Guaranteed monthly income',
      'Property appreciation over time',
      'Personal vacation destination',
      'Living in Luxury Arch',
      'Premium resale value',
    ],
  },

  /* ================================
     TUSCAN VILLA
  ================================ */

  {
    id: 2,
    name: 'Tuscan Villa',
    tagline: 'European Elegance in Every Detail',
    icon: Castle,
    heroImage: '/assets/asset/A3.jpeg',

    images: [
      '/assets/asset/A1.jpeg',
      '/assets/asset/A2.jpeg',
      '/assets/asset/A3.jpeg',
      '/assets/asset/A4.jpeg',
      '/assets/asset/A5.jpeg',
      '/assets/asset/A6.jpeg',
      '/assets/asset/A7.jpeg',
      '/assets/asset/A8.jpeg',
      '/assets/asset/A9.jpeg',
    ],

    specs: {
      bhk: '3 BHK',
      plot: '500 Sq yard',
      construction: '150 Sq yard',
      furnished: 'Fully Furnished',
      theme: 'Tuscany Themed',
      location: '40kms from SG Highway',
      parking: 2,
    },

    price: '₹1.2 Cr',
    roi: '₹55K - ₹70K/month',

    offerings: [
      'Private Pool',
      'Home Theatre',
      'Fully Furnished',
      'Orchid Garden',
      'Italian Facades',
      'Elegant Interiors',
    ],

    amenities: [
      'ClubHouse Access',
      'Farmhouse Gated Community',
      'Events & Experiences',
      'Lake View',
      'Restaurant',
      '90,000+ Lush Green Trees',
      '120+ Green Acres of Land',
      '250+ Species of Birds',
    ],

    investment: {
      agreement: '9 Years',
      maintenance: 'Zero Cost',
      stays: '30 Days/Year',
      appreciation: '12-15% Annual',
    },

    benefits: [
      'Hassle-free rental management',
      'Guaranteed monthly income',
      'Property appreciation over time',
      'Personal vacation destination',
      'Living in Luxury European Arch',
      'Premium resale value',
    ],
  },

  /* ================================
     DISNEY THEMED VILLA
  ================================ */

  {
    id: 3,
    name: 'Disney Themed Villa',
    tagline: 'Where Dreams Come to Life',
    icon: Sparkles,
    heroImage: '/assets/asset/A5.jpeg',

    images: [
      '/assets/asset/A19.jpeg',
      '/assets/asset/A20.jpeg',
      '/assets/asset/A21.jpeg',
      '/assets/asset/A22.jpeg',
      '/assets/asset/A23.jpeg',
      '/assets/asset/A24.jpeg',
      '/assets/asset/A25.jpeg',
      '/assets/asset/A26.jpeg',
      '/assets/asset/A27.jpeg',
      '/assets/asset/A28.jpeg',
      '/assets/asset/A29.jpeg',
    ],

    specs: {
      bhk: 'Studio Villa',
      plot: '250 Sq yard',
      construction: '900 Sq ft',
      furnished: 'Fully Furnished',
      theme: 'Disney Inspired Themed',
      location: '40kms from SG Highway',
      parking: 2,
    },

    price: '₹55 Lacs',
    roi: '₹28K - ₹33K/month',

    offerings: [
      'Most PhotoGenic Experience',
      'Fully Furnished',
      'Elegant Interiors',
      'Fantasy Retreat',
      'Studio Royal Suites',
    ],

    amenities: [
      'ClubHouse Access',
      'Farmhouse Gated Community',
      'Events & Experiences',
      'Lake View',
      'Restaurant',
      '90,000+ Lush Green Trees',
      '120+ Green Acres of Land',
      '250+ Species of Birds',
    ],

    investment: {
      agreement: '9 Years',
      maintenance: 'Zero Cost',
      stays: '15 Days/Year (3Yrs Carry Forward Allowed)',
      appreciation: '12-15% Annual',
    },

    benefits: [
      'Hassle-free rental management',
      'Guaranteed monthly income',
      'Property appreciation over time',
      'Personal vacation destination',
      'Living in Luxury European Arch',
      'Premium resale value',
    ],
  },

];


// Villa Selector Component
const VillaSelector = ({ currentIndex, setCurrentIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const prevVilla = () => {
    setCurrentIndex((prev) => (prev - 1 + villas.length) % villas.length);
  };

  const nextVilla = () => {
    setCurrentIndex((prev) => (prev + 1) % villas.length);
  };

  const currentVilla = villas[currentIndex];
  const VillaIcon = currentVilla.icon;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cube-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-3">
            Select Your Dream Villa
          </p>
        </motion.div>

        {/* Villa Carousel */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left Arrow */}
          {/* <motion.button
            onClick={prevVilla}
            data-testid="villa-prev"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 md:w-16 md:h-16 glass flex items-center justify-center bg-cube-gold text-cube-gold hover:text-cube-gold hover:border-cube-gold/50 transition-all duration-300 flex-shrink-0"
          >
            <ChevronLeft size={28} />
          </motion.button> */}

          {/* Villa Name Display */}
          <div className="flex-1 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 border border-cube-gold/50 flex items-center justify-center bg-cube-black/50"
                >
                  <VillaIcon size={32} className="text-cube-gold" />
                </motion.div>

                {/* Villa Name */}
                <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cube-ivory leading-none mb-3">
                  {currentVilla.name}
                </h2>

                {/* Tagline */}
                <p className="font-manrope text-cube-gold text-base md:text-lg tracking-wide mb-6">
                  {currentVilla.tagline}
                </p>

                {/* Price Badge */}
                <div className="inline-flex items-center gap-4 md:gap-6 glass px-6 py-3">
                  <div>
                    <p className="font-cinzel text-cube-gold/70 text-[10px] tracking-wider uppercase">Price</p>
                    <p className="font-playfair text-xl md:text-2xl text-cube-ivory">{currentVilla.price}</p>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div>
                    <p className="font-cinzel text-cube-gold/70 text-[10px] tracking-wider uppercase">ROI</p>
                    <p className="font-playfair text-base md:text-lg text-cube-gold">{currentVilla.roi}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          {/* <motion.button
            onClick={nextVilla}
            data-testid="villa-next"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 md:w-16 md:h-16 glass flex items-center justify-center text-cube-ivory/70 hover:text-cube-gold hover:border-cube-gold/50 transition-all duration-300 flex-shrink-0"
          >
            <ChevronRight size={28} />
          </motion.button> */}
        </div>

        {/* Villa Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center gap-3"
        >
          {villas.map((villa, index) => (
            <button
              key={villa.id}
              onClick={() => setCurrentIndex(index)}
              data-testid={`villa-indicator-${index}`}
              className={`transition-all duration-300 ${index === currentIndex
                ? 'w-12 h-2 bg-cube-gold'
                : 'w-2 h-2 bg-cube-ivory/30 hover:bg-cube-ivory/50'
                }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Fullscreen Lightbox Component
const Lightbox = ({ image, onClose, villaName }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-cube-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      data-testid="lightbox"
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 glass flex items-center justify-center text-cube-ivory hover:text-cube-gold hover:border-cube-gold/50 transition-all duration-300 z-10"
        data-testid="lightbox-close"
      >
        <X size={24} />
      </motion.button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={villaName}
          className="max-w-full max-h-[85vh] object-contain"
        />
        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cube-black/90 to-transparent"
        >
          <p className="font-playfair text-xl text-cube-ivory text-center">{villaName}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Image Gallery Component with Heatmap Effect
const ImageGallery = ({ images, villaName }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <section ref={ref} className="py-20 md:py-28 bg-cube-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-3">
              Visual Journey
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory">
              Gallery Portfolio
            </h2>
            <p className="font-manrope text-cube-ivory/60 text-sm mt-3">
              Hover to enlarge • Click to view full size
            </p>
          </motion.div>

          {/* Heatmap Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => (
              <motion.div
                key={`${villaName}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden cursor-pointer group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                style={{ aspectRatio: index === 0 ? '16/10' : '4/3' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setLightboxImage(image)}
                data-testid={`gallery-image-${index}`}
              >
                <motion.img
                  src={image}
                  alt={`${villaName} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : hoveredIndex !== null ? 0.95 : 1,
                    filter: hoveredIndex !== null && hoveredIndex !== index ? 'brightness(0.4) blur(2px)' : 'brightness(1) blur(0px)',
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-cube-black/80 via-cube-black/20 to-transparent"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: hoveredIndex === index ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 border-2 border-cube-gold flex items-center justify-center mb-4"
                  >
                    <Maximize size={28} className="text-cube-gold" />
                  </motion.div>
                  <p className="font-playfair text-xl md:text-2xl text-cube-ivory">
                    {index === 0 ? 'Featured View' : `View ${index + 1}`}
                  </p>
                  <p className="font-manrope text-cube-gold text-sm mt-2">Click to expand</p>
                </motion.div>

                {/* Corner Accents */}
                <motion.div
                  className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-cube-gold"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-cube-gold"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            villaName={villaName}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// Property Specifications Section
const SpecificationsSection = ({ villa }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const specs = [
    { icon: Bed, label: 'Type', value: villa.specs.bhk },
    { icon: TreePine, label: 'Plot Area', value: villa.specs.plot },
    { icon: Maximize, label: 'Construction Area', value: villa.specs.construction },
    { icon: Building2, label: 'Furnished', value: villa.specs.furnished },
    { icon: Crown, label: 'Theme', value: villa.specs.theme },
    { icon: MapPin, label: 'Prime Location', value: villa.specs.location },
  ];


  return (
    <section ref={ref} className="py-20 md:py-28 bg-cube-charcoal relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-3">
            Technical Details
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory">
            Property Specifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
              className="glass p-6 text-center group cursor-pointer transition-all duration-500"
            >
              <motion.div
                className="w-14 h-14 mx-auto mb-4 border border-cube-gold/30 flex items-center justify-center group-hover:border-cube-gold group-hover:bg-cube-gold/10 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <spec.icon size={26} className="text-cube-gold" />
              </motion.div>
              <p className="font-playfair text-2xl md:text-3xl text-cube-gold mb-1">{spec.value}</p>
              <p className="font-manrope text-cube-ivory/60 text-sm tracking-wider uppercase">{spec.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Price Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 glass p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-2">Starting Price</p>
            <p className="font-playfair text-4xl md:text-5xl text-cube-ivory">{villa.price}</p>
          </div>
          <div className="h-16 w-px bg-white/10 hidden md:block" />
          <div>
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-2">Expected ROI</p>
            <p className="font-playfair text-2xl md:text-3xl text-cube-ivory">{villa.roi}</p>
          </div>
          <Link
            to="/contact"
            data-testid="spec-enquire-btn"
            className="btn-luxury bg-cube-gold text-cube-black px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500"
          >
            Enquire Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Investment Details Section
const InvestmentSection = ({ villa }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const investmentDetails = [
    { icon: Calendar, label: 'Agreement Period', value: villa.investment.agreement },
    { icon: Shield, label: 'Maintenance', value: villa.investment.maintenance },
    { icon: Gift, label: 'Complimentary Stays', value: villa.investment.stays },
    { icon: TrendingUp, label: 'Expected Appreciation', value: villa.investment.appreciation },
  ];

  const benefits = [
    'Hassle-free rental management',
    'Guaranteed monthly income',
    'Property appreciation over time',
    'Personal vacation destination',
    'Living in Luxury Arch',
    'Premium resale value',
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cube-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-3">
            Smart Investment
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory">
            Investment Details
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Investment Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {investmentDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 md:p-8 text-center group hover:border-cube-gold/40 transition-all duration-300"
                >
                  <detail.icon size={32} className="text-cube-gold mx-auto mb-4" />
                  <p className="font-playfair text-xl md:text-2xl text-cube-gold mb-2">{detail.value}</p>
                  <p className="font-manrope text-cube-ivory/60 text-xs md:text-sm tracking-wider uppercase">{detail.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-playfair text-2xl text-cube-ivory mb-6">
              Investor Benefits
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-10 h-10 border border-cube-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cube-gold/10 transition-all duration-300"
                  >
                    <CheckCircle2 size={20} className="text-cube-gold" />
                  </motion.div>
                  <span className="font-manrope text-cube-ivory/80 group-hover:text-cube-ivory transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                data-testid="invest-schedule-btn"
                className="btn-luxury bg-cube-gold text-cube-black px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-white transition-colors duration-500 text-center"
              >
                Schedule Visit
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hello!%20I%20am%20interested%20in%20investing%20in%20The%20Cube%20Realty%20villas."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="invest-whatsapp-btn"
                className="btn-luxury bg-[#25D366] text-white px-8 py-4 font-manrope text-sm tracking-wider uppercase font-semibold hover:bg-[#128C7E] transition-colors duration-500 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// Offerings & Amenities Section
const OfferingsSection = ({ villa }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const offeringIcons = [Waves, Film, Sofa, Flower2, Crown, Sparkles];
  const amenityIcons = [Building2, ShieldCheck, CalendarDays, Waves, Utensils, Trees, Map, Bird];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cube-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Offerings */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-3">
              Exclusive Features
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-cube-ivory mb-8">
              Villa Offerings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {villa.offerings.map((offering, index) => {
                const Icon = offeringIcons[index % offeringIcons.length];
                return (
                  <motion.div
                    key={offering}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, borderColor: 'rgba(212, 175, 55, 0.5)' }}
                    className="glass p-5 flex items-center gap-4 group cursor-pointer transition-all duration-300"
                  >
                    <div className="w-12 h-12 border border-cube-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cube-gold/10 transition-all duration-300">
                      <Icon size={22} className="text-cube-gold" />
                    </div>
                    <span className="font-manrope text-cube-ivory/90">{offering}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-3">
              Community Features
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-cube-ivory mb-8">
              Amenities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {villa.amenities.map((amenity, index) => {
                const Icon = amenityIcons[index % amenityIcons.length];
                return (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, borderColor: 'rgba(212, 175, 55, 0.5)' }}
                    className="glass p-5 flex items-center gap-4 group cursor-pointer transition-all duration-300"
                  >
                    <div className="w-12 h-12 border border-cube-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cube-gold/10 transition-all duration-300">
                      <Icon size={22} className="text-cube-gold" />
                    </div>
                    <span className="font-manrope text-cube-ivory/90">{amenity}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



// Main Page Component
const RealEstatePage = () => {
  const [currentVillaIndex, setCurrentVillaIndex] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const currentVilla = villas[currentVillaIndex];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="real-estate-page"
    >

      <FloatingVillaNavigator
        currentIndex={currentVillaIndex}
        setCurrentIndex={setCurrentVillaIndex}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/asset/A2.jpeg"
            alt="Real Estate Hero"
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
            Our Portfolio
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cube-ivory leading-tight">
            The Villa Collection
          </h1>
          <p className="font-manrope text-cube-ivory/70 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Discover our exclusive collection of luxury farmhouse villas designed for discerning investors.
          </p>
        </motion.div>
      </section>

      {/* Villa Selector */}
      <VillaSelector
        currentIndex={currentVillaIndex}
        setCurrentIndex={setCurrentVillaIndex}
      />

      {/* Gallery Section - Linked to Selected Villa */}
      <ImageGallery
        key={`gallery-${currentVillaIndex}`}
        images={currentVilla.images}
        villaName={currentVilla.name}
      />

      {/* Property Specifications - Linked to Selected Villa */}
      <SpecificationsSection
        key={`specs-${currentVillaIndex}`}
        villa={currentVilla}
      />


      {/* Offerings & Amenities - Linked to Selected Villa */}
      <OfferingsSection
        key={`offerings-${currentVillaIndex}`}
        villa={currentVilla}
      />

      {/* Investment Details - Linked to Selected Villa */}
      <InvestmentSection
        key={`investment-${currentVillaIndex}`}
        villa={currentVilla}
      />


    </motion.main>
  );
};

export default RealEstatePage;





