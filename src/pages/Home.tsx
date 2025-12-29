import { ArrowRight, Monitor, Grid, Briefcase, Box, Shirt, Layers, Star, Check, Calendar, ChevronLeft, ChevronRight, Palette, Hammer, Play, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import visionImg from '../assets/home/vision_brand.png';
import visionNewImg from '../assets/home/vision_new.jpg';
import heroBgNew from '../assets/services/media-wall-2.png';

import mediaWall1 from '../assets/services/media-wall-1.png';
import mediaWall2 from '../assets/services/media-wall-2.png';
import mediaWall3 from '../assets/services/media-wall-3.png';
import accentWall1 from '../assets/services/accent-wall-1.png';
import accentWall2 from '../assets/services/accent-wall-2.png';
import accentWall3 from '../assets/services/accent-wall-3.png';

const services = [
    {
        icon: Monitor,
        title: 'Media Walls',
        desc: 'Ultra high-end bespoke media wall systems with integrated LED lighting, hidden wiring, and premium wood finishes.',
        images: [
            mediaWall1, // Modern Minimalist
            mediaWall2, // Integrated Fireplace
            mediaWall3  // Classic Wood
        ],
        link: '/services/carpentry'
    },
    {
        icon: Grid,
        title: 'Accent Walls',
        desc: 'Architectural wood paneling, premium slat walls, and custom textures that define modern residential spaces.',
        images: [
            accentWall1, // Vertical Wood Slats
            accentWall2, // Geometric Panel Design
            accentWall3  // Textured Stone
        ],
        link: '/catalog'
    },
    {
        icon: Briefcase,
        title: 'Home Offices',
        desc: 'High-end built-in workstations. Bespoke shelving systems designed for productivity and luxury aesthetics.',
        images: [
            'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=800&auto=format&fit=crop', // Minimalist Floating Desk
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop', // Classic Library Style
            'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop'  // Modern Integrated Cabinetry
        ],
        link: '/catalog'
    },
    {
        icon: Box,
        title: 'Cabinet Painting',
        desc: 'High-quality kitchen refinishing. Factory-grade ultra-matte finishes and hardware integration (not just generic cabinets).',
        images: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop', // Navy/Gold Modern Finish
            'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800&auto=format&fit=crop', // Professional White Semi-gloss
            'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop'  // Matte Grey Spray Finish
        ],
        link: '/services/cabinet-painting'
    },
    {
        icon: Shirt,
        title: 'Custom Closets',
        desc: 'Premium walk-in wardrobe systems. Organized luxury with integrated lighting, glass doors, and ebonized wood.',
        images: [
            'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=800&auto=format&fit=crop', // Ebonized Ash Walk-in
            'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800&auto=format&fit=crop', // Modern White Wardrobe
            'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop'  // Luxury Island System
        ],
        link: '/catalog'
    },
    {
        icon: Layers,
        title: 'Interior Painting',
        desc: 'Finished luxury interiors. Flawless execution featuring designer colors for pristine residential spaces.',
        images: [
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop', // Modern Bold Accent Color
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop', // Neutral Designer Palette
            'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop'  // Detailed Architectural Trim
        ],
        link: '/services/interior-painting'
    }
];

function ServiceCarouselCard({ item, index }: { item: typeof services[0], index: number }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            setCurrentImage((prev) => (prev + 1) % item.images.length);
        } else if (isRightSwipe) {
            setCurrentImage((prev) => (prev - 1 + item.images.length) % item.images.length);
        }
    };

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % item.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + item.images.length) % item.images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-white overflow-hidden hover:bg-gray-50 transition-all duration-500 min-h-[500px] border border-gray-200 hover:border-[#1483ca]/30 flex flex-col snap-start min-w-[80vw] md:min-w-[400px]"
        >
            <div
                className="relative flex-1 flex flex-col cursor-grab active:cursor-grabbing"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={item.images[currentImage]}
                        alt={`${item.title} ${currentImage + 1}`}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                    />
                    {/* Editorial Gradient Overlays - Dark for White Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                </div>

                {/* Navigation Arrows (Desktop) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
                    <button
                        onClick={prevImage}
                        className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white transition-all hover:bg-white hover:text-black pointer-events-auto border border-white/20"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white transition-all hover:bg-white hover:text-black pointer-events-auto border border-white/20"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex-1 flex flex-col justify-end p-6 md:p-8">
                    <div className="transform group-hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#1483ca] text-white w-9 h-9 flex items-center justify-center rounded-full">
                                <item.icon size={16} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-medium !text-white tracking-tight">{item.title}</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/20 mt-5">
                        <div className="flex gap-1">
                            {item.images.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-0.5 rounded-full transition-all duration-500 ${i === currentImage ? 'bg-white w-4' : 'bg-white/40 w-1'}`}
                                />
                            ))}
                        </div>
                        <Link
                            to={item.link}
                            className="flex items-center gap-2 text-white text-[10px] font-medium uppercase tracking-[0.2em] hover:text-white/80 transition-colors"
                        >
                            Explore
                            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Home() {
    const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle');
    const [bookingType, setBookingType] = useState<'home' | 'store'>('home');
    const [bookingStep, setBookingStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        address: '',
        notes: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingStatus('success');
        setTimeout(() => {
            setBookingStatus('idle');
            setBookingStep(1);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', date: '', address: '', notes: '' });
        }, 3000);
    };

    const nextStep = () => setBookingStep(2);
    const prevStep = () => setBookingStep(1);

    const location = useLocation();

    useEffect(() => {
        if (location.state && (location.state as any).scrollTo) {
            const id = (location.state as any).scrollTo;
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
            // Clear state to prevent scroll on refresh - optional but good practice
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <>
            <header id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-0">
                <div className="absolute inset-0 z-0 bg-gray-900">
                    <img src={heroBgNew} alt="Beautiful Home Interior" className="w-full h-full object-cover object-center opacity-70" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text & Value Props */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-tight font-medium">
                            <span className="text-[#1483ca]">Timeless</span><br />
                            <span className="text-white">Contracting</span><br />
                            <span className="text-white">& Designs.</span>
                        </h1>

                        <p className="text-lg text-gray-200 max-w-xl mb-8 leading-relaxed font-light">
                            Defining the pinnacle of interior craftsmanship through meticulous carpentry and high-end architectural finishes for San Antonio's most discerning homes.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Transparent Pricing. No Hidden Fees",
                                "Excellent Track Record",
                                "Fully licensed, bonded & insured",
                                "Exceptional Customer Service"
                            ].map((prop, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#1483ca] flex items-center justify-center">
                                        <Check size={12} className="text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-200">{prop}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Multi-step Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-md mx-auto lg:ml-auto"
                    >
                        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl p-6 md:p-8 shadow-2xl">
                            <div className="text-center mb-6">
                                <h2 className="text-xl font-medium text-gray-900 mb-1">Get Your <span className="text-[#1483ca]">Free</span> Quote Now</h2>
                                <p className="text-xs text-gray-600">In 2 easy steps</p>
                            </div>

                            {bookingStatus === 'success' ? (
                                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-500">
                                        <Check size={32} />
                                    </div>
                                    <h3 className="text-gray-900 text-lg font-medium mb-2">Request Received!</h3>
                                    <p className="text-gray-500 text-sm">We'll be in touch within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleBooking} className="space-y-6">
                                    {bookingStep === 1 ? (
                                        <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                            <div className="space-y-3">
                                                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Select Consultation Type</label>
                                                <button
                                                    type="button"
                                                    onClick={() => setBookingType('home')}
                                                    className={`w-full p-4 rounded-lg border text-left transition-all flex justify-between items-center group ${bookingType === 'home'
                                                        ? 'border-[#1483ca] bg-[#1483ca]/10'
                                                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <div>
                                                        <span className={`block text-sm font-medium mb-1 ${bookingType === 'home' ? 'text-gray-900' : 'text-gray-400'}`}>At Home Visit</span>
                                                        <span className="text-[11px] text-gray-500">Precise on-site measurements.</span>
                                                    </div>
                                                    <span className="text-[#1483ca] text-xs font-bold bg-[#1483ca]/10 px-2 py-1 rounded">$100</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setBookingType('store')}
                                                    className={`w-full p-4 rounded-lg border text-left transition-all flex justify-between items-center group ${bookingType === 'store'
                                                        ? 'border-[#1483ca] bg-[#1483ca]/10'
                                                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <div>
                                                        <span className={`block text-sm font-medium mb-1 ${bookingType === 'store' ? 'text-gray-900' : 'text-gray-400'}`}>In Store Meeting</span>
                                                        <span className="text-[11px] text-gray-500">Review samples in design studio.</span>
                                                    </div>
                                                    <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">FREE</span>
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={nextStep}
                                                className="w-full bg-[#1483ca] hover:bg-[#106ba3] text-white font-medium text-sm py-4 rounded-lg transition-colors mt-4 flex items-center justify-center gap-2"
                                            >
                                                Next Step <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                            <div className="grid grid-cols-2 gap-3">
                                                <input
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    required
                                                    placeholder="First Name"
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:border-[#1483ca] focus:ring-0 outline-none transition-colors"
                                                />
                                                <input
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    required
                                                    placeholder="Last Name"
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:border-[#1483ca] focus:ring-0 outline-none transition-colors"
                                                />
                                            </div>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:border-[#1483ca] focus:ring-0 outline-none transition-colors"
                                            />
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="relative">
                                                    <input
                                                        name="date"
                                                        value={formData.date}
                                                        onChange={handleInputChange}
                                                        type="date"
                                                        required
                                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:border-[#1483ca] focus:ring-0 outline-none transition-colors appearance-none"
                                                    />
                                                </div>
                                                <input
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    type="tel"
                                                    required
                                                    placeholder="Phone Number"
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:border-[#1483ca] focus:ring-0 outline-none transition-colors"
                                                />
                                            </div>
                                            <textarea
                                                name="notes"
                                                value={formData.notes}
                                                onChange={handleInputChange}
                                                rows={2}
                                                placeholder="Project details..."
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:border-[#1483ca] focus:ring-0 outline-none transition-colors resize-none"
                                            />

                                            <div className="flex gap-3 pt-2">
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-sm py-4 rounded-lg transition-colors border border-gray-200"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="w-2/3 bg-[#1483ca] hover:bg-[#106ba3] text-white font-medium text-sm py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                                >
                                                    {bookingType === 'home' ? 'Pay & Book' : 'Confirm'}
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-center items-center gap-2 mt-6">
                                        <div className={`w-2 h-2 rounded-full transition-colors ${bookingStep === 1 ? 'bg-[#1483ca]' : 'bg-gray-200'}`} />
                                        <div className={`w-2 h-2 rounded-full transition-colors ${bookingStep === 2 ? 'bg-[#1483ca]' : 'bg-gray-200'}`} />
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </header>

            <section className="py-6 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl tracking-tighter mb-4 font-medium text-[#1483ca]">Read Our <span className="text-gray-900">5-Star</span> Reviews</h2>
                        <p className="text-sm text-gray-800 font-light max-w-lg mx-auto">
                            Trusted by homeowners across San Antonio.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                        {/* Google */}
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="flex items-center gap-2 mb-1">
                                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#1483ca] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
                                </svg>
                                <span className="text-xl font-medium text-gray-900">Google</span>
                            </div>
                            <div className="flex gap-0.5 text-[#1483ca]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">5.0 Rating</span>
                        </a>

                        {/* Facebook */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="flex items-center gap-2 mb-1">
                                <Facebook className="w-6 h-6 text-gray-400 group-hover:text-[#1877F2] transition-colors" />
                                <span className="text-xl font-medium text-gray-900">Facebook</span>
                            </div>
                            <div className="flex gap-0.5 text-[#1483ca]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">5.0 Rating</span>
                        </a>

                        {/* Yelp */}
                        <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="flex items-center gap-2 mb-1">
                                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#FF1A1A] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.1 11.8c-.8.2-3.4.6-4.5.8.5 1 .9 2.5 1 3.2.2 1.3 1.5 2.2 1.2 3.5-.2 1.1-1.3 1.5-2 1.4-.7 0-1.1-.5-1.4-1-.5-.8-1-2.6-1.1-3.6-1 .2-1.9.5-2.9.5.4 1 1 2.8 1.4 3.7.3.7.8 1.4.2 2-.5.5-1.6.4-2.5-.1-.8-.4-1.2-1.5-.9-2.2.3-.9 1.5-2.2 2.1-3.1-.9-.1-2.9-.1-4-.1-1.3-.1-1.8.8-2.7.5-.7-.2-1.2-.9-1.1-1.8 0-.7.6-1.1 1.2-1.2 1-.3 2.8-.2 3.9-.1-1-.5-2.2-1.3-3-2-.7-.6-.8-1.5-.3-2.2.4-.6 1.4-.8 2.2-.6.9.3 1.7 1.4 2.3 2.1.2-1 .3-2.9.1-3.9-.1-1.3.8-1.8 1.6-1.9.8-.1 1.4.4 1.7 1.1.4.9.4 2.8.2 3.8.8-.4 2.1-1.4 2.8-2 .6-.6 1.5-.8 2.2-.2.6.5.6 1.7.2 2.5-.4.6-1.8 1.4-3 1.9 1 0 2.2 0 3.3.1 1.3.2 1.7-.8 2.5-.5.7.3 1.1 1 1 1.8-.1.7-.6 1.1-1.3 1.1z" />
                                </svg>
                                <span className="text-xl font-medium text-gray-900">Yelp</span>
                            </div>
                            <div className="flex gap-0.5 text-[#1483ca]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">5.0 Rating</span>
                        </a>

                        {/* Houzz */}
                        <a href="https://houzz.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                            <div className="flex items-center gap-2 mb-1">
                                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#4DBC15] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.5 0H2.5C1.1 0 0 1.1 0 2.5v19C0 22.9 1.1 24 2.5 24h19c1.4 0 2.5-1.1 2.5-2.5v-19C24 1.1 22.9 0 21.5 0zM17 18h-4v-6h4v6zm-6 0H7v-6h4v6zm4-8h-4V4h4v6z" />
                                </svg>
                                <span className="text-xl font-medium text-gray-900">Houzz</span>
                            </div>
                            <div className="flex gap-0.5 text-[#1483ca]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">5.0 Rating</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-6 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                            <img
                                src={visionImg}
                                alt="Timeless Contracting Vision"
                                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        <div className="text-left">
                            <h2 className="text-3xl md:text-5xl tracking-tighter mb-8 font-medium text-[#1483ca]">
                                Your <span className="text-gray-900">Vision</span>,<br />
                                Our Craft.
                            </h2>
                            <div className="space-y-6 text-gray-800 font-light leading-relaxed">
                                <p>
                                    At Timeless Contracting, we transform spaces into beautifully functional environments. With a foundation built on craftsmanship and creativity, we are your trusted partner for premium home renovations.
                                </p>
                                <p>
                                    Our mission is to bring your vision to life. Whether creating a productive workspace or rejuvenating your home’s interior, we craft spaces that reflect who you are.
                                </p>
                            </div>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 mt-8 bg-[#1483ca] text-white px-8 py-3 rounded-[2px] font-medium text-sm hover:bg-[#106ba3] transition-colors"
                            >
                                Read more about us
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="catalog" className="py-6 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl tracking-tight mb-2 font-medium text-[#1483ca]">What We Do</h2>
                            <p className="text-sm text-gray-800 max-w-sm">Custom carpentry and professional painting services tailored to your home.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-px-6 -mx-6 px-6">
                        {services.map((item, i) => (
                            <ServiceCarouselCard key={item.title} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-6 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl tracking-tighter mb-4 font-medium text-[#1483ca]">How it works</h2>
                        <p className="text-sm text-gray-800 font-light max-w-lg mx-auto">
                            Transforming your space in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>

                        {[
                            {
                                icon: Calendar,
                                title: 'Schedule Visit',
                                desc: 'Book your professional in-home measurement.'
                            },
                            {
                                icon: Palette,
                                title: 'Design',
                                desc: 'Select materials and customize your design online.'
                            },
                            {
                                icon: Hammer,
                                title: 'Enjoy',
                                desc: 'We fabricate and install in record time.'
                            }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:border-[#1483ca]/30 group-hover:bg-[#1483ca]/5 transition-all duration-500 shadow-xl">
                                    <step.icon size={24} className="text-gray-400 group-hover:text-[#1483ca] transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-[10px] md:text-sm text-gray-800 leading-relaxed font-light max-w-[150px] mx-auto">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="py-6 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl tracking-tighter mb-4 font-medium text-[#1483ca]">Watch Our Customers Rave About Us</h2>
                        <p className="text-sm text-gray-800 font-light max-w-lg mx-auto">
                            See what our clients say about their new spaces.
                        </p>
                    </div>

                    <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4 md:pb-12 snap-x snap-mandatory scrollbar-hide scroll-px-6 -mx-6 px-6">
                        {[
                            {
                                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
                                name: 'Michael & Sarah'
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
                                name: 'James Peterson'
                            },
                            {
                                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
                                name: 'Elena Rodriguez'
                            }
                        ].map((video, i) => (
                            <div key={i} className="group cursor-pointer min-w-[300px] md:min-w-[400px] snap-center">
                                <div className="relative aspect-[3/4] md:aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                                    <img
                                        src={video.img}
                                        alt={video.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1483ca] group-hover:border-[#1483ca] transition-all duration-300">
                                            <Play size={24} className="fill-white text-white ml-1 group-hover:fill-white group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left px-2">
                                    <p className="text-sm text-gray-900 mt-1 font-medium">{video.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </>
    );
}
