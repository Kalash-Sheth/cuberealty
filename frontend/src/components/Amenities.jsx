import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  TreePine,
  Dumbbell,
  PartyPopper,
  Flower2,
  Sparkles,
  Gamepad2,
  Building2,
  Waves,
  UtensilsCrossed,
  Film,
  Bike,
  Flame,
  WavesLadder,
  Theater,
  Sprout,
  Trophy,
  Baby,
  Telescope
} from 'lucide-react';

const amenities = [
  { icon: TreePine, title: 'Eco Surroundings' },
  { icon: Dumbbell, title: 'Gym' },
  { icon: PartyPopper, title: 'Events & Experiences' },
  { icon: Building2, title: 'Club House' },
  { icon: WavesLadder, title: 'Swimming Pool' },
  { icon: Flower2, title: 'Landscape Garden' },
  { icon: Waves, title: 'Meditation Zone' },
  { icon: Gamepad2, title: 'Indoor & Outdoor Games' },
  { icon: Waves, title: 'Lake View' },
  { icon: UtensilsCrossed, title: 'Restaurant' },
  { icon: Film, title: 'Mini Theatre' },
  { icon: Bike, title: 'Cycling Track' },
  { icon: Flame, title: 'Sauna & Steam Bath' },
  { icon: Theater, title: 'Amphitheatre' },
  { icon: Sprout, title: 'Organic Farming' },
  { icon: Trophy, title: 'Cricket Ground' },
  { icon: Baby, title: 'Children Play Area' },
  { icon: Telescope, title: 'Star Gazing Deck' },
  { icon: Sparkles, title: 'Personalized Services' },
];


const AmenityCard = ({ amenity }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[180px] md:min-w-[220px] py-8 group cursor-pointer">

      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-cube-gold/30 rounded-full group-hover:border-cube-gold transition-all duration-500">
        <amenity.icon size={36} className="text-cube-gold" />
      </div>

      <h3 className="font-playfair text-cube-ivory mt-4 text-center text-base md:text-lg group-hover:text-cube-gold transition-all">
        {amenity.title}
      </h3>

    </div>
  );
};


const Amenities = () => {
  const galleryRef = useRef(null);
  const itemRef = useRef(null);
  const scrollRight = () => {
    if (!galleryRef.current || !itemRef.current) return;

    const itemWidth = itemRef.current.offsetWidth + 16; // 16 = gap-4
    galleryRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
  };

  const scrollLeft = () => {
    if (!galleryRef.current || !itemRef.current) return;

    const itemWidth = itemRef.current.offsetWidth + 16;
    galleryRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };



  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-cube-charcoal relative overflow-hidden"
      data-testid="amenities-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
            World-Class Living
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory mb-6">
            Amenities & Experience
          </h2>
          <p className="font-manrope text-cube-ivory/60 text-base md:text-lg max-w-2xl mx-auto">
            Every detail crafted for an exceptional lifestyle. Discover the amenities that make our spaces truly extraordinary.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="relative overflow-hidden mt-10 w-full">

          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-270%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            {[...amenities, ...amenities].map((amenity, index) => (
              <AmenityCard key={index} amenity={amenity} />
            ))}
          </motion.div>

        </div>


        {/* Horizontal Image Gallery */}
        <div className="mt-16 relative">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-cube-black/80 backdrop-blur p-5 border border-cube-gold/40 text-cube-gold hover:bg-cube-gold hover:text-cube-black transition-all duration-300"
          >
            ←
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-cube-black/80 backdrop-blur p-5 border border-cube-gold/40 text-cube-gold hover:bg-cube-gold hover:text-cube-black transition-all duration-300"
          >
            →
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={galleryRef}
            className="overflow-x-auto flex gap-4 scroll-smooth no-scrollbar"
          >

            {[
              "/assets/asset/A11.jpg",
              "/assets/asset/A12.jpg",
              "/assets/asset/A13.jpg",
              "/assets/asset/A14.jpg",
              "/assets/asset/A15.jpg",
              "/assets/asset/A16.jpg",
              "/assets/asset/A17.png",
              "/assets/asset/A18.jpeg",
            ].map((image, index) => (
              <div
                key={index}
                ref={index === 0 ? itemRef : null}
                className="min-w-[250px] md:min-w-[290px] lg:min-w-[350px] aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Amenities;
