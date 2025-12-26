import { motion } from 'framer-motion';
import {
    Paintbrush,
    Home,
    Hammer,
    MessageSquare,
    Wrench,
    Brush,
    CheckCircle,
    Sparkles,
    Phone,
    ArrowRight,
    Tv,
    Layers,
    Briefcase,
    DoorOpen,
    ChefHat,
    Shirt,
    Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const interiorPaintingSteps = [
    {
        number: '01',
        title: 'The Consultation',
        icon: MessageSquare,
        content: "We meet with you to understand your goals, style, and preferences. We'll discuss rooms, colors, and special considerations while measuring and inspecting for repairs."
    },
    {
        number: '02',
        title: 'Prep Work',
        icon: Wrench,
        content: "We handle repairs, patch imperfections, and apply primer. We carefully protect your floors, furniture, and belongings."
    },
    {
        number: '03',
        title: 'Painting',
        icon: Brush,
        content: "Using high-quality materials, we cut in edges and corners, then roll larger areas. We keep everything clean and organized."
    },
    {
        number: '04',
        title: 'Quality Checks',
        icon: CheckCircle,
        content: "Regular inspections ensure everything looks great. Touch-ups are handled proactively before you even ask."
    },
    {
        number: '05',
        title: 'Clean-Up',
        icon: Sparkles,
        content: "We remove coverings and tape, clean thoroughly, and provide a touch-up kit. No surprises on the invoice."
    },
    {
        number: '06',
        title: 'Follow-Up',
        icon: Phone,
        content: "We check in after the job to ensure satisfaction and answer any questions."
    },
];

const cabinetPaintingSteps = [
    { title: 'Consultation', desc: 'Discuss vision, assess cabinets, provide written quote' },
    { title: 'Removal', desc: 'Carefully remove and label doors, drawers, hardware' },
    { title: 'Preparation', desc: 'Clean, sand, and prime all surfaces' },
    { title: 'Spraying', desc: 'Apply high-quality paint for smooth, uniform finish' },
    { title: 'Reassembly', desc: 'Reinstall everything with precision' },
    { title: 'Final Review', desc: 'Walk-through and touch-ups as needed' },
];

const carpentryServices = [
    {
        icon: Tv,
        title: 'Media Walls',
        desc: 'Custom entertainment centers with integrated shelving and hidden wiring',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop'
    },
    {
        icon: Layers,
        title: 'Accent Walls & Ceilings',
        desc: 'Wood paneling, slat walls, and architectural features',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop'
    },
    {
        icon: Briefcase,
        title: 'Home Office',
        desc: 'Ergonomic workspaces with built-in desks and storage',
        image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=600&auto=format&fit=crop'
    },
    {
        icon: ChefHat,
        title: 'Cabinetry',
        desc: 'Custom kitchen and bathroom cabinet solutions',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop'
    },
    {
        icon: Shirt,
        title: 'Custom Closets',
        desc: 'Organization systems that maximize every inch',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=600&auto=format&fit=crop'
    },
    {
        icon: DoorOpen,
        title: 'Mudroom Built-ins',
        desc: 'Tree halls, benches, and storage for entryways',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop'
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

                    {/* Service Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mt-10"
                    >
                        {[
                            { icon: Home, label: 'Interior Painting', href: '#interior-painting' },
                            { icon: Paintbrush, label: 'Cabinet Painting', href: '#cabinet-painting' },
                            { icon: Hammer, label: 'Carpentry', href: '#carpentry' },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-white/10 rounded-full text-sm text-white hover:border-[#C6A87C]/50 transition-colors"
                            >
                                <item.icon size={16} className="text-[#C6A87C]" />
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Interior Painting Section */}
            <section id="interior-painting" className="py-20 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Image + Intro */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative mb-8">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
                                        alt="Interior Painting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-[#C6A87C] text-black p-4 rounded-lg">
                                    <Home size={24} />
                                </div>
                            </div>

                            <h2 className="text-3xl font-medium text-white mb-4">Interior Painting</h2>
                            <p className="text-[#888] leading-relaxed mb-6">
                                Whether you're refreshing a single room or giving your entire home a makeover,
                                our experienced team delivers clean lines, smooth finishes, and stress-free service.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Low-VOC Paints', 'Sherwin Williams', 'Clean Edges', 'Protected Floors'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-[#111] border border-white/5 rounded-full text-xs text-[#888]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Steps */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-sm font-medium text-[#666] uppercase tracking-wider mb-6">Our Process</h3>
                            {interiorPaintingSteps.map((step, i) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex gap-4 p-4 bg-[#0A0A0A] border border-white/5 rounded-lg hover:border-white/10 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#C6A87C]/10 rounded-lg flex items-center justify-center">
                                        <step.icon size={18} className="text-[#C6A87C]" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-mono text-[#C6A87C]">{step.number}</span>
                                            <h4 className="text-white font-medium text-sm">{step.title}</h4>
                                        </div>
                                        <p className="text-[#666] text-xs leading-relaxed">{step.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cabinet Painting Section */}
            <section id="cabinet-painting" className="py-20 border-t border-white/5 bg-[#0A0A0A]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-[#C6A87C]/10 rounded-xl flex items-center justify-center">
                                    <Paintbrush size={24} className="text-[#C6A87C]" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-medium text-white">Cabinet Painting</h2>
                                    <p className="text-[#666] text-sm">Transform your kitchen</p>
                                </div>
                            </div>

                            <p className="text-[#888] leading-relaxed mb-8">
                                Your kitchen is the heart of your home. We breathe new life into cabinets with
                                professional spray finishing that delivers a factory-smooth look at a fraction
                                of replacement cost.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                {cabinetPaintingSteps.map((step, i) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="p-4 bg-[#050505] border border-white/5 rounded-lg"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-5 h-5 bg-[#C6A87C]/20 rounded text-[10px] font-bold text-[#C6A87C] flex items-center justify-center">
                                                {i + 1}
                                            </span>
                                            <h4 className="text-white text-sm font-medium">{step.title}</h4>
                                        </div>
                                        <p className="text-[#666] text-xs">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Images */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop"
                                            alt="Modern Kitchen"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
                                            alt="Kitchen Detail"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=400&auto=format&fit=crop"
                                            alt="Cabinet Detail"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400&auto=format&fit=crop"
                                            alt="White Cabinets"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Carpentry Section */}
            <section id="carpentry" className="py-20 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="w-16 h-16 bg-[#C6A87C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Hammer size={32} className="text-[#C6A87C]" />
                        </div>
                        <h2 className="text-3xl font-medium text-white mb-4">Expert Carpentry</h2>
                        <p className="text-[#888] max-w-2xl mx-auto">
                            From media walls to custom closets, our skilled carpenters create bespoke
                            solutions that enhance both beauty and functionality.
                        </p>
                    </motion.div>

                    {/* Carpentry Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {carpentryServices.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden hover:border-[#C6A87C]/30 transition-all"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-[#C6A87C]/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                            <service.icon size={16} className="text-[#C6A87C]" />
                                        </div>
                                        <h3 className="text-white font-medium">{service.title}</h3>
                                    </div>
                                    <p className="text-[#888] text-sm">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Carpentry Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { title: 'Custom Design', desc: 'Every project tailored to your space and style' },
                            { title: 'Quality Materials', desc: 'Premium hardwoods and modern finishes' },
                            { title: 'Expert Installation', desc: 'Precise craftsmanship with attention to detail' },
                        ].map((feature) => (
                            <div key={feature.title} className="flex items-start gap-3 p-5 bg-[#0A0A0A] border border-white/5 rounded-xl">
                                <Check size={18} className="text-[#C6A87C] flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-white font-medium text-sm mb-1">{feature.title}</h4>
                                    <p className="text-[#666] text-xs">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
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
                            Ready to Get Started?
                        </h2>
                        <p className="text-[#888] mb-8">
                            Schedule a free consultation and let's discuss how we can transform your space.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/#booking"
                                className="inline-flex items-center justify-center gap-2 bg-[#C6A87C] hover:bg-[#B59669] text-black font-medium px-6 py-3 rounded-md transition-colors"
                            >
                                Schedule Consultation
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/#configurator"
                                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-md transition-colors"
                            >
                                Try the Configurator
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
