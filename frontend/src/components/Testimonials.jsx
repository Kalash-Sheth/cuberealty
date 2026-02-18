import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Mehta',
    role: 'NRI Investor, USA',
    image: null,
    content: 'The Cube Realty has exceeded all my expectations. The returns have been consistent, and the property management is impeccable. A truly hassle-free investment experience.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Business Owner, Mumbai',
    image: null,
    content: 'What sets The Cube apart is their attention to detail. The villa is stunning, and our family enjoys visiting during holidays. The rental income is a bonus!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anil Patel',
    role: 'Investor, Ahmedabad',
    image: null,
    content: 'Investing in The Cube Realty was one of my best financial decisions. The team is professional, and the ROI has been better than promised.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-cube-charcoal relative overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cube-gold/5 rounded-full blur-[100px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-cube-gold text-xs tracking-[0.2em] uppercase mb-4">
            Investor Stories
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-cube-ivory">
            What Our Investors Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="testimonial-card glass p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-20">
              <Quote size={80} className="text-cube-gold" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={18} className="text-cube-gold fill-cube-gold" />
              ))}
            </div>

            {/* Content */}
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-playfair text-xl md:text-2xl text-cube-ivory/90 italic leading-relaxed mb-8"
            >
              "{testimonials[currentIndex].content}"
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-cube-gold/20 flex items-center justify-center font-playfair text-cube-gold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-manrope text-cube-ivory font-semibold">
                  {testimonials[currentIndex].name}
                </p>
                <p className="font-manrope text-cube-ivory/60 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              data-testid="testimonial-prev"
              className="w-12 h-12 glass flex items-center justify-center text-cube-ivory/60 hover:text-cube-gold hover:border-cube-gold/50 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-cube-gold' : 'bg-cube-ivory/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              data-testid="testimonial-next"
              className="w-12 h-12 glass flex items-center justify-center text-cube-ivory/60 hover:text-cube-gold hover:border-cube-gold/50 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
