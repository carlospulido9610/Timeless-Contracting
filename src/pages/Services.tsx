import { motion } from 'framer-motion';
import {
    Paintbrush,
    Home,
    Hammer,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Home,
        title: 'Interior Painting',
        description: 'Transform your home with our professional interior painting services. Clean lines, smooth finishes, and premium Sherwin Williams paints.',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop',
        link: '/services/interior-painting',
        features: ['Low-VOC Paints', 'Clean Edges', 'Protected Floors', 'Color Consultation']
    },
    {
        icon: Paintbrush,
        title: 'Cabinet Painting',
        description: 'Breathe new life into your kitchen with professional spray finishing that delivers a factory-smooth look at a fraction of replacement cost.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
        link: '/services/cabinet-painting',
        features: ['Spray Finish', 'Color Matching', 'Hardware Options', '2-3 Week Turnaround']
    },
    {
        icon: Hammer,
        title: 'Expert Carpentry',
        description: 'From media walls to custom closets, our skilled carpenters create bespoke solutions that enhance both beauty and functionality.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
        link: '/services/carpentry',
        features: ['Custom Design', 'Premium Woods', 'LED Integration', 'Expert Installation']
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-[#050505] pt-20">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C6A87C]/5 to-transparent" />
                <div className="max-w-6xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C6A87C]/10 rounded-full text-[11px] font-medium text-[#C6A87C] border border-[#C6A87C]/20 mb-6">
                            Professional Services
                        </span>
                        <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                            Transform Your Space
                        </h1>
                        <p className="text-lg text-[#888] max-w-2xl mx-auto">
                            From fresh paint to custom carpentry, we deliver quality craftsmanship
                            that exceeds expectations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="space-y-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    to={service.link}
                                    className="group block bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden hover:border-[#C6A87C]/30 transition-all duration-500"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image */}
                                        <div className="lg:w-2/5 relative overflow-hidden">
                                            <div className="aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/80 hidden lg:block" />
                                        </div>

                                        {/* Content */}
                                        <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-[#C6A87C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C6A87C]/20 transition-colors">
                                                    <service.icon size={24} className="text-[#C6A87C]" />
                                                </div>
                                                <h2 className="text-2xl font-medium text-white group-hover:text-[#C6A87C] transition-colors">
                                                    {service.title}
                                                </h2>
                                            </div>

                                            <p className="text-[#888] leading-relaxed mb-6">
                                                {service.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {service.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="px-3 py-1 bg-[#111] border border-white/5 rounded-full text-xs text-[#888]"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-2 text-[#C6A87C] text-sm font-medium">
                                                <span>Configure & Get Quote</span>
                                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-medium text-white mb-6">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-[#888] mb-8">
                            Schedule a professional consultation and let's discuss how we can transform your space.
                        </p>
                        <Link
                            to="/"
                            state={{ scrollTo: 'booking' }}
                            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-lg hover:bg-[#333] transition-all text-sm tracking-wide uppercase"
                        >
                            <span>Start Your Project</span>
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
