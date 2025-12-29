import { useState, useEffect } from 'react';
import { Hammer, Calendar, ChevronDown, Home, Paintbrush, Menu, X as CloseIcon, Clock } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const serviceItems = [
    {
        title: 'Expert Carpentry',
        description: 'Custom carpentry solutions',
        link: '/services/carpentry',
        icon: Hammer
    },
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
    }
];

export default function Navbar() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();



    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        // If not on home page, navigate to home first then scroll
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            // Add a small delay for same-page scroll to allow mobile menu to close
            // and prevent UI jank
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };



    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setServicesOpen(false);
        if (servicesOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [servicesOpen]);

    const navLinks = [
        { name: 'Catalog', to: '/catalog' },
        { name: 'About', to: '/about' },
    ];

    return (
        <nav
            className="fixed w-full z-40 top-0 py-1 bg-white border-b border-gray-200 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-xl font-semibold tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                    }}
                >
                    <Clock size={22} className="text-[#1483ca]" strokeWidth={2} />
                    <span><span className="text-[#1483ca]">Timeless</span> <span className="text-gray-900">Contracting</span></span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className="text-[13px] text-gray-500 font-medium hover:text-black transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-[13px] text-gray-500 font-medium hover:text-black transition-colors"
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
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl shadow-black/10 overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Arrow pointer */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 border-l border-t border-gray-200 rotate-45" />

                                    <div className="relative p-2">
                                        {/* View All Services Link */}


                                        {/* Service Items */}
                                        {serviceItems.map((service, index) => (
                                            <Link
                                                key={service.title}
                                                to={service.link}
                                                className={`group flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors ${index === 0 ? 'rounded-t-lg' : ''} ${index === serviceItems.length - 1 ? 'rounded-b-lg' : ''
                                                    }`}
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                <div className="w-9 h-9 bg-[#1483ca]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1483ca]/20 transition-colors">
                                                    <service.icon size={18} className="text-[#1483ca]" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[13px] font-medium text-gray-900 group-hover:text-[#1483ca] transition-colors">
                                                        {service.title}
                                                    </div>
                                                    <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">
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


                    <Link
                        to="/about"
                        className="text-[13px] text-gray-500 font-medium hover:text-black transition-colors"
                    >
                        About
                    </Link>
                    <button
                        onClick={() => scrollToSection('process')}
                        className="text-[13px] text-gray-500 font-medium hover:text-black transition-colors"
                    >
                        Process
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    {/* Booking Button (Desktop) */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="hidden md:flex items-center gap-2 bg-[#1483ca] text-white hover:bg-[#106ba3] transition-colors font-medium text-[12px] px-4 py-2 rounded-[4px]"
                    >
                        <Calendar size={14} />
                        Schedule Visit
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="p-2 md:hidden text-gray-600 hover:text-black transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
                    >
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        className="text-lg text-gray-900 font-medium px-2 py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => scrollToSection('process')}
                                    className="text-lg text-gray-900 font-medium px-2 py-2 text-left"
                                >
                                    Process
                                </button>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4 px-2">
                                    Our Services
                                </span>
                                <div className="grid grid-cols-1 gap-2">
                                    {serviceItems.map((service) => (
                                        <Link
                                            key={service.title}
                                            to={service.link}
                                            className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg active:bg-gray-100"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <div className="w-10 h-10 bg-[#1483ca]/10 rounded-lg flex items-center justify-center">
                                                <service.icon size={20} className="text-[#1483ca]" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{service.title}</div>
                                                <div className="text-[11px] text-gray-500">{service.description}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => scrollToSection('hero')}
                                className="w-full flex items-center justify-center gap-2 bg-[#1483ca] text-white hover:bg-[#106ba3] font-medium py-4 rounded-lg"
                            >
                                <Calendar size={18} />
                                Schedule Visit
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
