// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Bed, Bath, Maximize, TreePine, ArrowRight, Check, Filter } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Investment from '../components/Investment';
// import Amenities from '../components/Amenities';
// import CTASection from '../components/CTASection';

// const allVillas = [
//   {
//     id: 1,
//     name: 'Tuscan Villa',
//     type: '4 BHK Luxury Theme Villa',
//     image: '/assets/asset/A3.jpeg',
//     specs: { beds: 4, baths: 5, area: '4500', garden: 'Orchid Garden' },
//     features: ['Private Pool', 'Home Theatre', 'European Style', 'Fully Furnished'],
//     roi: '₹85K - ₹1.1L/month',
//     price: '₹2.8 Cr',
//     category: 'premium',
//   },
//   {
//     id: 2,
//     name: 'Mediterranean Retreat',
//     type: '3 BHK Premium Villa',
//     image: '/assets/asset/A4.jpeg',
//     specs: { beds: 3, baths: 4, area: '3500', garden: 'Landscape Garden' },
//     features: ['Pool Access', 'Modern Kitchen', 'Terrace Garden', 'Smart Home'],
//     roi: '₹60K - ₹80K/month',
//     price: '₹2.2 Cr',
//     category: 'standard',
//   },
//   {
//     id: 3,
//     name: 'Royal Farmhouse',
//     type: '4 BHK Elite Collection',
//     image: '/assets/asset/A5.jpeg',
//     specs: { beds: 4, baths: 5, area: '5000', garden: 'Private Orchard' },
//     features: ['Infinity Pool', 'Wine Cellar', 'Smart Home', 'Golf Course View'],
//     roi: '₹90K - ₹1.2L/month',
//     price: '₹3.5 Cr',
//     category: 'elite',
//   },
//   {
//     id: 4,
//     name: 'Contemporary Haven',
//     type: '3 BHK Modern Villa',
//     image: '/assets/asset/A6.jpeg',
//     specs: { beds: 3, baths: 3, area: '3200', garden: 'Zen Garden' },
//     features: ['Pool Access', 'Open Kitchen', 'Floor-to-Ceiling Windows'],
//     roi: '₹55K - ₹75K/month',
//     price: '₹1.9 Cr',
//     category: 'standard',
//   },
//   {
//     id: 5,
//     name: 'Heritage Estate',
//     type: '5 BHK Signature Collection',
//     image: '/assets/asset/A7.jpeg',
//     specs: { beds: 5, baths: 6, area: '6000', garden: 'Heritage Garden' },
//     features: ['Private Pool', 'Library', 'Home Gym', 'Staff Quarters'],
//     roi: '₹1L - ₹1.4L/month',
//     price: '₹4.2 Cr',
//     category: 'elite',
//   },
//   {
//     id: 6,
//     name: 'Garden Villa',
//     type: '3 BHK Nature Retreat',
//     image: '/assets/asset/A8.jpeg',
//     specs: { beds: 3, baths: 4, area: '3800', garden: 'Botanical Garden' },
//     features: ['Garden View', 'Outdoor Kitchen', 'Fire Pit', 'Hammock Zone'],
//     roi: '₹65K - ₹85K/month',
//     price: '₹2.4 Cr',
//     category: 'premium',
//   },
// ];

// const VillaGridCard = ({ villa, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="group bg-cube-charcoal border border-white/5 overflow-hidden hover:border-cube-gold/30 transition-all duration-500"
//       data-testid={`villa-grid-card-${villa.id}`}
//     >
//       {/* Image */}
//       <div className="relative h-[250px] overflow-hidden">
//         <img
//           src={villa.image}
//           alt={villa.name}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-cube-black/80 via-transparent to-transparent" />
        
//         {/* Category Badge */}
//         <div className="absolute top-4 left-4 glass px-3 py-1">
//           <span className="font-cinzel text-cube-gold text-xs tracking-wider uppercase">
//             {villa.category}
//           </span>
//         </div>

//         {/* Price */}
//         <div className="absolute bottom-4 left-4">
//           <p className="font-playfair text-2xl text-cube-ivory">{villa.price}</p>
//         </div>

//         {/* ROI Badge */}
//         <div className="absolute bottom-4 right-4 glass px-3 py-2">
//           <p className="font-manrope text-cube-gold text-xs">ROI: {villa.roi}</p>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <p className="font-cinzel text-cube-gold text-xs tracking-[0.15em] uppercase mb-2">
//           {villa.type}
//         </p>
//         <h3 className="font-playfair text-xl text-cube-ivory mb-4">{villa.name}</h3>

//         {/* Specs */}
//         <div className="flex flex-wrap gap-4 mb-4">
//           <div className="flex items-center gap-1.5 text-cube-ivory/60">
//             <Bed size={14} className="text-cube-gold" />
//             <span className="font-manrope text-xs">{villa.specs.beds} Beds</span>
//           </div>
//           <div className="flex items-center gap-1.5 text-cube-ivory/60">
//             <Bath size={14} className="text-cube-gold" />
//             <span className="font-manrope text-xs">{villa.specs.baths} Baths</span>
//           </div>
//           <div className="flex items-center gap-1.5 text-cube-ivory/60">
//             <Maximize size={14} className="text-cube-gold" />
//             <span className="font-manrope text-xs">{villa.specs.area} sq.ft</span>
//           </div>
//         </div>

//         {/* Features */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {villa.features.slice(0, 3).map((feature) => (
//             <span
//               key={feature}
//               className="px-2 py-1 border border-white/10 text-cube-ivory/60 font-manrope text-[10px] tracking-wider"
//             >
//               {feature}
//             </span>
//           ))}
//         </div>

//         {/* CTA */}
//         <Link
//           to="/contact"
//           className="inline-flex items-center gap-2 text-cube-gold font-manrope text-sm tracking-wider uppercase group/btn hover:gap-4 transition-all duration-300"
//         >
//           View Details
//           <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// const RealEstatePage = () => {
//   const heroRef = useRef(null);
//   const isHeroInView = useInView(heroRef, { once: true });
//   const [filter, setFilter] = useState('all');

//   const filteredVillas = filter === 'all' 
//     ? allVillas 
//     : allVillas.filter(v => v.category === filter);

//   return (
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       data-testid="real-estate-page"
//     >
//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
//       >
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/assets/asset/A2.jpeg"
//             alt="Real Estate Hero"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-cube-black/60 via-cube-black/40 to-cube-black" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1 }}
//           className="relative z-10 text-center px-6"
//         >
//           <p className="font-cinzel text-cube-gold text-xs tracking-[0.3em] uppercase mb-4">
//             Our Portfolio
//           </p>
//           <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cube-ivory leading-tight">
//             The Villa Collection
//           </h1>
//           <p className="font-manrope text-cube-ivory/70 text-base md:text-lg mt-4 max-w-xl mx-auto">
//             Discover our exclusive collection of luxury farmhouse villas designed for discerning investors.
//           </p>
//         </motion.div>
//       </section>

//       {/* Villa Grid */}
//       <section className="py-24 md:py-32 bg-cube-black">
//         <div className="max-w-[1400px] mx-auto px-6 md:px-12">
//           {/* Filter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center gap-4 mb-12"
//           >
//             <div className="flex items-center gap-2 mr-4">
//               <Filter size={18} className="text-cube-gold" />
//               <span className="font-manrope text-cube-ivory/60 text-sm">Filter:</span>
//             </div>
//             {['all', 'standard', 'premium', 'elite'].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 data-testid={`filter-${cat}`}
//                 className={`px-4 py-2 font-manrope text-sm tracking-wider uppercase transition-all duration-300 ${
//                   filter === cat
//                     ? 'bg-cube-gold text-cube-black'
//                     : 'glass text-cube-ivory/70 hover:text-cube-gold'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </motion.div>

//           {/* Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredVillas.map((villa, index) => (
//               <VillaGridCard key={villa.id} villa={villa} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Investment Section */}
//       <Investment />

//       {/* Amenities */}
//       <Amenities />

//       {/* CTA */}
//       <CTASection />
//     </motion.main>
//   );
// };

// export default RealEstatePage;


import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bed, Maximize, TreePine, TrendingUp, Check } from 'lucide-react';

import Investment from '../components/Investment';
import CTASection from '../components/CTASection';

const villas = [
  {
    name: 'Crown Jewel Villa',
    images: [
      '/assets/asset/A1.jpeg',
      '/assets/asset/A2.jpeg',
      '/assets/asset/A3.jpeg',
      '/assets/asset/A4.jpeg',
      '/assets/asset/A5.jpeg',
    ],
    specs: {
      beds: '4 BHK',
      area: '1500 Sq Yard',
      garden: 'Orchid Garden',
      roi: '₹95K - ₹1.1L/month',
    },
  },
  {
    name: 'Tuscan Villa',
    images: [
      '/assets/asset/A3.jpeg',
      '/assets/asset/A6.jpeg',
      '/assets/asset/A7.jpeg',
      '/assets/asset/A1.jpeg',
    ],
    specs: {
      beds: '3 BHK',
      area: '500 Sq Yard',
      garden: 'Landscape Garden',
      roi: '₹55K - ₹70K/month',
    },
  },
  {
    name: 'Disney Theme Villa',
    images: [
      '/assets/asset/A5.jpeg',
      '/assets/asset/A4.jpeg',
      '/assets/asset/A2.jpeg',
      '/assets/asset/A6.jpeg',
    ],
    specs: {
      beds: 'Studio',
      area: '250 Sq Yard',
      garden: 'Club Amenities',
      roi: '₹28K - ₹33K/month',
    },
  },
];

const tabs = ['Offerings', 'Amenities', 'Investor Benefits'];

const RealEstatePage = () => {

  const [activeVilla, setActiveVilla] = useState(0);
  const [activeTab, setActiveTab] = useState('Offerings');

  const nextVilla = () =>
    setActiveVilla((prev) => (prev + 1) % villas.length);

  const prevVilla = () =>
    setActiveVilla((prev) => (prev - 1 + villas.length) % villas.length);

  const villa = villas[activeVilla];

  return (
    <main className="bg-cube-black text-cube-ivory">

      {/* HERO SWITCHER */}
      <section className="h-[70vh] flex items-center justify-center relative overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.h1
            key={villa.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="font-playfair text-5xl md:text-7xl text-center"
          >
            {villa.name}
          </motion.h1>
        </AnimatePresence>

        <button onClick={prevVilla} className="absolute left-6">
          <ChevronLeft size={40}/>
        </button>

        <button onClick={nextVilla} className="absolute right-6">
          <ChevronRight size={40}/>
        </button>

      </section>

      {/* PORTFOLIO HEATMAP */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">

        <div className="grid grid-cols-6 gap-4">

          {villa.images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, zIndex: 10 }}
              className={`overflow-hidden ${
                i % 3 === 0 ? 'col-span-3' : 'col-span-2'
              }`}
            >
              <img src={img} className="w-full h-full object-cover"/>
            </motion.div>
          ))}

        </div>

      </section>

      {/* OFFERINGS / AMENITIES / BENEFITS */}
      <section className="py-24 text-center">

        <div className="flex justify-center gap-6 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={()=>setActiveTab(tab)}
              className={`px-6 py-3 uppercase ${
                activeTab===tab
                ? 'bg-cube-gold text-black'
                : 'border border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="max-w-xl mx-auto"
          >
            <p>
              Luxury curated content for {activeTab}.
            </p>
          </motion.div>
        </AnimatePresence>

      </section>

      {/* PROPERTY SPECS */}
      <section className="py-24 max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div>
          <Bed className="mx-auto text-cube-gold"/>
          <p>{villa.specs.beds}</p>
        </div>

        <div>
          <Maximize className="mx-auto text-cube-gold"/>
          <p>{villa.specs.area}</p>
        </div>

        <div>
          <TreePine className="mx-auto text-cube-gold"/>
          <p>{villa.specs.garden}</p>
        </div>

        <div>
          <TrendingUp className="mx-auto text-cube-gold"/>
          <p>{villa.specs.roi}</p>
        </div>

      </section>

      {/* INVESTMENT DETAILS */}
      <Investment />

      {/* CTA */}
      <CTASection />

    </main>
  );
};

export default RealEstatePage;

