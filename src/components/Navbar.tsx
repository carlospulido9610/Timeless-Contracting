import { useState, useEffect } from 'react';
import { Hammer, ShoppingBag, Calendar } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { itemCount, toggleCart } = useQuote();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        // If not on home page, navigate to home first then scroll
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle scroll after navigation
    useEffect(() => {
        if (location.state && (location.state as { scrollTo?: string }).scrollTo) {
            const id = (location.state as { scrollTo: string }).scrollTo;
            // Wait for page to fully render before scrolling
            const timer = setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
            // Clear the state
            window.history.replaceState({}, document.title);
            return () => clearTimeout(timer);
        }
    }, [location]);

    return (
        <nav
            className={`fixed w-full z-40 top-0 transition-all duration-500 ease-in-out ${scrolled
                ? 'py-1 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
                : 'py-2 bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-[#EDEDED] font-semibold text-sm tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <div className="w-5 h-5 bg-[#C6A87C] rounded-[1px] flex items-center justify-center text-black">
                        <Hammer size={12} strokeWidth={2} />
                    </div>
                    Timeless Contracting
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        to="/catalog"
                        className="text-[13px] text-[#888] font-normal hover:text-[#EDEDED] transition-colors"
                    >
                        Catalog
                    </Link>
                    <Link
                        to="/services"
                        className="text-[13px] text-[#888] font-normal hover:text-[#EDEDED] transition-colors"
                    >
                        Services
                    </Link>
                    <button
                        onClick={() => scrollToSection('configurator')}
                        className="text-[13px] text-[#888] font-normal hover:text-[#EDEDED] transition-colors"
                    >
                        Studio
                    </button>
                    <Link
                        to="/about"
                        className="text-[13px] text-[#888] font-normal hover:text-[#EDEDED] transition-colors"
                    >
                        About
                    </Link>
                    <button
                        onClick={() => scrollToSection('process')}
                        className="text-[13px] text-[#888] font-normal hover:text-[#EDEDED] transition-colors"
                    >
                        Process
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    {/* Cart Button */}
                    <button
                        onClick={toggleCart}
                        className="relative p-2 text-[#888] hover:text-[#EDEDED] transition-colors"
                    >
                        <ShoppingBag size={20} />
                        <AnimatePresence>
                            {itemCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="absolute -top-1 -right-1 w-5 h-5 bg-[#C6A87C] text-black text-[10px] font-bold rounded-full flex items-center justify-center"
                                >
                                    {itemCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>

                    {/* Booking Button */}
                    <button
                        onClick={() => scrollToSection('booking')}
                        className="hidden md:flex items-center gap-2 bg-[#C6A87C] text-[#050505] hover:bg-[#B59669] transition-colors font-medium text-[12px] px-4 py-2 rounded-[4px]"
                    >
                        <Calendar size={14} />
                        Schedule Visit
                    </button>
                </div>
            </div>
        </nav>
    );
}
