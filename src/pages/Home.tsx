import { ArrowRight, Monitor, Grid, Briefcase, Box, Shirt, Layers, Star, Check, Calendar } from 'lucide-react';
import Configurator from '../features/configurator/Configurator';
import { useState } from 'react';
import { motion } from 'framer-motion';
import visionImg from '../assets/home/vision_brand.png';

export default function Home() {
    const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle');

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingStatus('success');
        setTimeout(() => setBookingStatus('idle'), 3000);
        alert('Thank you! Booking confirmed.');
    };

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
                            <a href="#booking" className="group bg-[#C6A87C] hover:bg-[#B59669] text-[#050505] transition-all duration-500 font-medium text-[13px] px-10 py-4 rounded-[2px] w-full sm:w-auto flex items-center justify-center gap-2">
                                Schedule Consultation
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#catalog" className="bg-transparent hover:bg-white/5 border border-white/20 text-[#EDEDED] transition-all duration-500 font-medium text-[13px] px-10 py-4 rounded-[2px] w-full sm:w-auto text-center">
                                View Portfolio
                            </a>
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
                        <a href="#configurator" className="text-xs text-[#EDEDED] hover:text-[#C6A87C] transition-colors flex items-center gap-2">
                            Try the Configurator <ArrowRight size={12} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1F1F22] border border-[#1F1F22]">
                        {[
                            { icon: Monitor, title: 'Media Walls', desc: 'Custom entertainment centers with integrated shelving, hidden wiring, and a variety of premium finishes.' },
                            { icon: Grid, title: 'Accent Walls', desc: 'Add character to any room with wood paneling, slat walls, and textured finishes.' },
                            { icon: Briefcase, title: 'Home Offices', desc: 'Functional and inspiring workspaces with built-in desks and organized shelving.' },
                            { icon: Box, title: 'Cabinet Painting', desc: 'Transform your kitchen with professional spray finishing for a factory-smooth look.' },
                            { icon: Shirt, title: 'Custom Closets', desc: 'Organization systems with adjustable shelving, hanging rods, and shoe racks.' },
                            { icon: Layers, title: 'Interior Painting', desc: 'Clean lines and smooth finishes with premium Sherwin Williams paints.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-[#0A0A0A] p-10 hover:bg-[#0F0F0F] transition-all duration-500 h-full border-b border-white/0 hover:border-[#C6A87C]/30"
                            >
                                <div className="mb-8 text-[#C6A87C] bg-[#C6A87C]/5 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-[#C6A87C]/10 transition-colors duration-500">
                                    <item.icon size={20} strokeWidth={1} />
                                </div>
                                <h3 className="text-xl font-medium mb-3 text-white tracking-tight">{item.title}</h3>
                                <p className="text-[13px] text-[#666] leading-relaxed mb-6 font-light group-hover:text-[#999] transition-colors">{item.desc}</p>
                                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <ArrowRight size={14} className="text-[#C6A87C]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Configurator />

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
            </section >

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

            <section id="booking" className="py-24 bg-[#050505]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl tracking-tight mb-2 font-medium text-white">Book Consultation</h2>
                        <p className="text-sm text-[#666]">Request a free technical site visit.</p>
                    </div>

                    <div className="bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 p-8 bg-[#0F0F0F] border-r border-white/5">
                            <span className="text-[10px] font-medium text-[#666] uppercase tracking-wider mb-6 block">Order Details</span>

                            <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/5">
                                <div>
                                    <h3 className="text-sm text-white font-medium mb-1">Technical Visit</h3>
                                    <p className="text-xs text-[#666]">1 Hr On-site Consultation</p>
                                </div>
                                <span className="text-sm text-[#C6A87C] font-medium tracking-tight uppercase text-[10px]">Free</span>
                            </div>

                            <div className="space-y-3 mb-8">
                                {['Laser Measurements', 'Material Samples', 'Cost Estimating'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs text-[#888]">
                                        <Check size={14} className="text-[#C6A87C]" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-[#EDEDED]">Total</span>
                                    <span className="text-xl text-[#C6A87C] font-medium tracking-tight">FREE</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-3/5 p-8">
                            <form className="space-y-4" onSubmit={handleBooking}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[11px] font-medium text-[#666] mb-2">First Name</label>
                                        <input type="text" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-medium text-[#666] mb-2">Last Name</label>
                                        <input type="text" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-medium text-[#666] mb-2">Email Address</label>
                                    <input type="email" required className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors" />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-medium text-[#666] mb-2">Project Details (Optional)</label>
                                    <textarea rows={3} className="w-full bg-[#050505] border border-white/10 rounded-[4px] px-3 py-2.5 text-sm text-[#EDEDED] focus:border-[#C6A87C] focus:ring-0 outline-none transition-colors resize-none" placeholder="Briefly describe your project..." />
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className={`w-full font-medium text-[13px] py-3 rounded-[4px] transition-colors flex justify-center items-center gap-2 ${bookingStatus === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-[#EDEDED] hover:bg-white text-[#050505]'
                                        }`}>
                                        {bookingStatus === 'success' ? <Check size={12} /> : <Calendar size={12} />}
                                        {bookingStatus === 'success' ? 'Request Sent' : 'Request Free Consultation'}
                                    </button>
                                    <p className="text-[10px] text-[#444] text-center mt-3">We'll contact you within 24 hours to schedule your visit.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
