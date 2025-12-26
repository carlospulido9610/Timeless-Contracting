import { useState, useEffect } from 'react';
import { Hammer, ShoppingBag, Calendar, ChevronDown, Home, Paintbrush } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import { motion, AnimatePresence } from 'framer-motion';

const serviceItems = [
    {
        title: 'Interior Painting',
        description: 'Professional interior painting services',
        link: '/services/interior-painting',
        icon: Home
    },
    {
        title: 'Cabinet Painting',
        description: 'Factory-smooth cabinet refinishing',
        link: '/services/cabinet-painting',
        icon: Paintbrush
    },
    {
        title: 'Expert Carpentry',
        description: 'Custom carpentry solutions',
        link: '/services/carpentry',
        icon: Hammer
    }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
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

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setServicesOpen(false);
        if (servicesOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [servicesOpen]);

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

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-[13px] text-[#888] font-normal hover:text-[#EDEDED] transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setServicesOpen(!servicesOpen);
                            }}
                        >
                            Services
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Arrow pointer */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A]/95 border-l border-t border-white/10 rotate-45" />

                                    <div className="relative p-2">
                                        {/* View All Services Link */}
                                        <Link
                                            to="/services"
                                            className="block px-4 py-3 text-[12px] text-[#C6A87C] font-medium border-b border-white/5 hover:bg-white/5 transition-colors rounded-t-lg"
                                            onClick={() => setServicesOpen(false)}
                                        >
                                            View All Services →
                                        </Link>

                                        {/* Service Items */}
                                        {serviceItems.map((service, index) => (
                                            <Link
                                                key={service.title}
                                                to={service.link}
                                                className={`group flex items-start gap-3 p-3 hover:bg-white/5 transition-colors ${index === serviceItems.length - 1 ? 'rounded-b-lg' : ''
                                                    }`}
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                <div className="w-9 h-9 bg-[#C6A87C]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6A87C]/20 transition-colors">
                                                    <service.icon size={18} className="text-[#C6A87C]" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[13px] font-medium text-[#EDEDED] group-hover:text-[#C6A87C] transition-colors">
                                                        {service.title}
                                                    </div>
                                                    <div className="text-[11px] text-[#666] mt-0.5 leading-tight">
                                                        {service.description}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

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
