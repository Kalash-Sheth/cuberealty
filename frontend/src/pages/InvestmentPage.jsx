import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import LocationSection from '../components/LocationSection';
import Investment from '@/components/Investment';

const InvestmentPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            data-testid="contact-page"
        >

            <Investment />
            {/* CTA Section */}
            <CTASection />

            {/* Location */}
            <LocationSection />
        </motion.main>
    );
};

export default InvestmentPage;
