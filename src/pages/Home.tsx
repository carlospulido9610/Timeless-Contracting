import { ArrowRight, Monitor, Grid, Briefcase, Box, Shirt, Layers, Star, Check, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import visionImg from '../assets/home/vision_brand.png';

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
            className="group relative bg-[#0A0A0A] overflow-hidden hover:bg-[#0F0F0F] transition-all duration-500 min-h-[500px] border border-white/5 hover:border-[#C6A87C]/30 flex flex-col"
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
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-110"
                    />
                    {/* Editorial Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Navigation Arrows (Desktop) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
                    <button
                        onClick={prevImage}
                        className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#C6A87C] hover:text-black pointer-events-auto"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#C6A87C] hover:text-black pointer-events-auto"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex-1 flex flex-col justify-end p-6 md:p-8">
                    <div className="transform group-hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="text-[#C6A87C] bg-[#C6A87C]/10 w-9 h-9 flex items-center justify-center rounded-full border border-[#C6A87C]/20 backdrop-blur-md">
                                <item.icon size={16} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-medium text-white tracking-tight">{item.title}</h3>
                        </div>
                        <p className="text-[13px] text-[#A1A1AA] leading-relaxed font-light max-w-[260px] opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                            {item.desc}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-5">
                        <div className="flex gap-1">
                            {item.images.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-0.5 rounded-full transition-all duration-500 ${i === currentImage ? 'bg-[#C6A87C] w-4' : 'bg-white/10 w-1'}`}
                                />
                            ))}
                        </div>
                        <Link
                            to={item.link}
                            className="flex items-center gap-2 text-[#C6A87C]/80 text-[10px] font-medium uppercase tracking-[0.2em] hover:text-white transition-colors"
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

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingStatus('success');
        setTimeout(() => setBookingStatus('idle'), 3000);
    };

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
            <header className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" alt="Beautiful Home Interior" className="w-full h-full object-cover opacity-40 grayscale-[20%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/70"></div>
                </div>

                <div className="relative z-10 text-center max-w-7xl px-6 mt-16 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1"
                    >
                        <h1 className="text-5xl md:text-8xl leading-[1.1] mb-8 tracking-tight font-medium text-white">
                            Elevated<br />
                            <span className="text-[#C6A87C]">Craft.</span><br />
                            Timeless Spaces.
                        </h1>

                        <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Defining the pinnacle of interior craftsmanship through meticulous carpentry and high-end architectural finishes for San Antonio's most discerning homes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/" state={{ scrollTo: 'booking' }} className="group bg-[#C6A87C] hover:bg-[#B59669] text-[#050505] transition-all duration-500 font-medium text-[13px] px-10 py-4 rounded-[2px] w-full sm:w-auto flex items-center justify-center gap-2">
                                Schedule Consultation
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/catalog" className="bg-transparent hover:bg-white/5 border border-white/20 text-[#EDEDED] transition-all duration-500 font-medium text-[13px] px-10 py-4 rounded-[2px] w-full sm:w-auto text-center flex items-center justify-center">
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </header>

            <section id="catalog" className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 pb-6 border-b border-white/5">
                        <div>
                            <h2 className="text-3xl tracking-tight mb-2 font-medium text-white">What We Do</h2>
                            <p className="text-sm text-[#666] max-w-sm">Custom carpentry and professional painting services tailored to your home.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item, i) => (
                            <ServiceCarouselCard key={item.title} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="py-24 bg-[#080808] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl tracking-tighter mb-8 font-medium text-white">
                                Your vision,<br />our craft.
                            </h2>
                            <div className="space-y-6 text-sm text-[#A1A1AA] font-light leading-relaxed max-w-md">
                                <p>
                                    At <span className="text-white font-normal">Timeless Contracting</span>, we are dedicated to transforming spaces into beautifully functional environments. Based in San Antonio, we've built our reputation on craftsmanship, creativity, and commitment to quality.
                                </p>
                                <p>
                                    Whether you need a stunning media wall, custom closet system, cabinet refresh, or complete interior painting, we bring your vision to life with attention to every detail.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/5">
                                <div>
                                    <span className="block text-3xl text-white font-medium tracking-tighter mb-1">100%</span>
                                    <span className="text-[11px] text-[#666]">Quality Guarantee</span>
                                </div>
                                <div>
                                    <span className="block text-3xl text-white font-medium tracking-tighter mb-1">12+</span>
                                    <span className="text-[11px] text-[#666]">Years in Trade</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video lg:aspect-[16/10] rounded-lg overflow-hidden border border-white/5 shadow-2xl transition-all duration-700">
                            <img src={visionImg} alt="Carpenter working" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="process" className="py-24 bg-[#050505] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl text-left mb-16 tracking-tight font-medium text-white">How We Work</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { num: '01', title: 'Consultation', desc: 'We meet with you to understand your vision, measure your space, and provide a detailed quote with no surprises.' },
                            { num: '02', title: 'Preparation', desc: 'We handle all prep work - repairs, priming, protection of your floors and furniture - so the final result is flawless.' },
                            { num: '03', title: 'Execution', desc: 'Our skilled team completes the work efficiently and professionally, leaving your home clean and transformed.' }
                        ].map((step, i) => (
                            <div key={i} className="group border-l border-white/10 pl-6 hover:border-[#C6A87C] transition-colors duration-500">
                                <span className="text-xs font-mono text-[#444] block mb-4 group-hover:text-[#C6A87C]">{step.num}</span>
                                <h3 className="text-lg font-medium mb-3 text-white">{step.title}</h3>
                                <p className="text-sm text-[#666] leading-relaxed font-light">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'Jennifer M.', loc: 'San Antonio, TX', text: '"The fit and finish of the mudroom cabinetry is exceptional. The team was professional, clean, and completed the work exactly on schedule."' },
                            { name: 'David R.', loc: 'Alamo Heights', text: '"We hired Timeless for a complex media wall. The attention to detail on the grain matching was impressive. Highly recommended."' }
                        ].map((review, i) => (
                            <div key={i} className="p-8 bg-[#050505] rounded-md border border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex gap-1 text-[#C6A87C] mb-4 opacity-80">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-current" />)}
                                </div>
                                <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed font-light">{review.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-xs text-white font-medium">{review.name.substring(0, 2).toUpperCase()}</div>
                                    <div>
                                        <span className="text-xs text-white font-medium block">{review.name}</span>
                                        <span className="text-[10px] text-[#555]">{review.loc}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="booking" className="py-16 md:py-24 bg-[#050505]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl tracking-tight mb-2 font-medium text-white">Book Your Visit</h2>
                        <p className="text-sm text-[#666]">Professional consultation for your custom project.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Form Column */}
                        <div className="lg:col-span-2 space-y-4 md:space-y-6">

                            {/* Visit Selection (Moved to Main) */}
                            <div className="bg-[#0A0A0A] border border-white/5 rounded-lg p-4 md:p-6">
                                <h2 className="text-sm font-medium text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <span className="text-[#C6A87C]">01.</span>
                                    Choose Consultation Type
                                </h2>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setBookingType('home')}
                                        className={`p-3 md:p-4 rounded-md border text-left transition-all ${bookingType === 'home'
                                            ? 'border-[#C6A87C] bg-[#C6A87C]/5'
                                            : 'border-white/10 bg-[#050505] hover:border-white/20'
                                            }`}
                                    >
                                        <span className={`block text-sm font-medium mb-1 ${bookingType === 'home' ? 'text-white' : 'text-[#888]'}`}>At Home Visit</span>
                                        <span className="text-[10px] md:text-[11px] text-[#666] leading-tight block">We provide precise on-site measurements.</span>
                                        <span className="block mt-2 text-[#C6A87C] text-[10px] font-bold">$100.00</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setBookingType('store')}
                                        className={`p-3 md:p-4 rounded-md border text-left transition-all ${bookingType === 'store'
                                            ? 'border-[#C6A87C] bg-[#C6A87C]/5'
                                            : 'border-white/10 bg-[#050505] hover:border-white/20'
                                            }`}
                                    >
                                        <span className={`block text-sm font-medium mb-1 ${bookingType === 'store' ? 'text-white' : 'text-[#888]'}`}>In Store Meeting</span>
                                        <span className="text-[10px] md:text-[11px] text-[#666] leading-tight block">Review samples in our design studio.</span>
                                        <span className="block mt-2 text-green-500 text-[10px] font-bold">FREE</span>
                                    </button>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-[#0A0A0A] border border-white/5 rounded-lg p-4 md:p-6">
                                <h2 className="text-sm font-medium text-white mb-4 md:mb-6 flex items-center gap-2">
                                    <span className="text-[#C6A87C]">02.</span>
                                    Contact Information
                                </h2>
                                <form id="booking-form" className="space-y-3 md:space-y-4" onSubmit={handleBooking}>
                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        <div>
                                            <label className="block text-[10px] md:text-[11px] font-medium text-[#666] mb-1.5 md:mb-2 uppercase tracking-wider">First Name</label>
                                            <input type="text" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm md:text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] md:text-[11px] font-medium text-[#666] mb-1.5 md:mb-2 uppercase tracking-wider">Last Name</label>
                                            <input type="text" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm md:text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-[10px] md:text-[11px] font-medium text-[#666] mb-1.5 md:mb-2 uppercase tracking-wider">Email Address</label>
                                            <input type="email" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm md:text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-[10px] md:text-[11px] font-medium text-[#666] mb-1.5 md:mb-2 uppercase tracking-wider">Phone Number</label>
                                            <input type="tel" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm md:text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" />
                                        </div>
                                    </div>

                                    {bookingType === 'home' && (
                                        <div>
                                            <label className="block text-[10px] md:text-[11px] font-medium text-[#666] mb-1.5 md:mb-2 uppercase tracking-wider">Service Address</label>
                                            <input type="text" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm md:text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" placeholder="123 Luxury Lane" />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-[10px] md:text-[11px] font-medium text-[#666] mb-1.5 md:mb-2 uppercase tracking-wider">Project Notes (Optional)</label>
                                        <textarea rows={3} className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm md:text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors resize-none" placeholder="Tell us a bit about your vision..." />
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Summary Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#0A0A0A] border border-white/5 rounded-lg p-6 sticky top-24">
                                <h3 className="text-sm font-medium text-white mb-4">Summary</h3>
                                <div className="space-y-4 mb-6 pb-6 border-b border-white/5">
                                    <div className="flex justify-between items-start font-medium">
                                        <div className="flex-1">
                                            <span className="text-sm text-white block">
                                                {bookingType === 'home' ? 'Technical Visit' : 'In-Store Consult'}
                                            </span>
                                            <span className="text-[11px] text-[#666] block mt-1">
                                                {bookingType === 'home' ? 'Professional assessment & measurement' : 'Review samples in our design studio'}
                                            </span>
                                        </div>
                                        <span className="text-sm text-[#C6A87C]">
                                            {bookingType === 'home' ? '$100.00' : 'FREE'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm font-medium text-white">Total Due</span>
                                    <span className="text-xl text-[#C6A87C] font-medium tracking-tight">
                                        {bookingType === 'home' ? '$100.00' : 'FREE'}
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    form="booking-form"
                                    className={`w-full font-medium text-[13px] py-3 rounded-[4px] transition-colors flex justify-center items-center gap-2 ${bookingStatus === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-[#C6A87C] hover:bg-[#B59669] text-black'}`}
                                >
                                    {bookingStatus === 'success' ? <Check size={12} /> : <Calendar size={12} />}
                                    {bookingStatus === 'success' ? 'Appointment Requested' : (bookingType === 'home' ? 'Pay & Book Now' : 'Request Free Appointment')}
                                </button>

                                <p className="text-[10px] text-[#444] text-center mt-4 leading-relaxed">
                                    {bookingType === 'home'
                                        ? "By clicking you agree to our booking terms and $100 service fee."
                                        : "Professional consultation at our studio. No fee required."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
