import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Hammer,
    Check,
    ArrowRight,
    Tv,
    Layers,
    Briefcase,
    ChefHat,
    Shirt,
    DoorOpen,
    Lightbulb,
    Ruler,
    Palette,
    Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

const projectTypes = [
    { id: 'media-wall', name: 'Media Wall', desc: 'Entertainment center', icon: Tv },
    { id: 'accent-wall', name: 'Accent Wall', desc: 'Decorative panels', icon: Layers },
    { id: 'home-office', name: 'Home Office', desc: 'Built-in desk', icon: Briefcase },
    { id: 'closet', name: 'Custom Closet', desc: 'Organization system', icon: Shirt },
    { id: 'mudroom', name: 'Mudroom', desc: 'Entry storage', icon: DoorOpen },
    { id: 'cabinetry', name: 'Cabinetry', desc: 'Custom cabinets', icon: ChefHat },
];

const woodOptions = [
    { id: 'american-walnut', name: 'American Walnut', desc: 'Rich, warm tones', color: '#5D4037' },
    { id: 'white-oak', name: 'White Oak', desc: 'Classic light wood', color: '#C4A77D' },
    { id: 'ebonized-ash', name: 'Ebonized Ash', desc: 'Dark, modern look', color: '#2D2D2D' },
    { id: 'maple', name: 'Maple', desc: 'Light and versatile', color: '#E8D5B7' },
    { id: 'cherry', name: 'Cherry', desc: 'Warm reddish hue', color: '#8B4513' },
];

const extras = [
    { id: 'led', name: 'LED Integration', desc: 'Ambient lighting', icon: Lightbulb },
    { id: 'custom-size', name: 'Custom Dimensions', desc: 'Made to measure', icon: Ruler },
    { id: 'paint-match', name: 'Paint Matching', desc: 'Color coordination', icon: Palette },
];

export default function Carpentry() {
    type Tab = 'project' | 'wood' | 'extras';

    const [activeTab, setActiveTab] = useState<Tab>('project');
    const [selectedProject, setSelectedProject] = useState('media-wall');
    const [selectedWood, setSelectedWood] = useState('american-walnut');
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const toggleExtra = (id: string) => {
        setSelectedExtras(prev =>
            prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-[#050505] pt-20">
            {/* Hero */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#C6A87C]/5 to-transparent" />
                <div className="max-w-6xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-[#888] hover:text-[#C6A87C] text-sm mb-6 transition-colors"
                        >
                            ← Back to Services
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-[#C6A87C]/10 rounded-xl flex items-center justify-center">
                                <Hammer size={28} className="text-[#C6A87C]" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                                    Expert Carpentry
                                </h1>
                                <p className="text-[#888] mt-1">Custom woodwork and built-in solutions</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="border-t border-white/5">
                <div className="flex flex-col lg:flex-row min-h-[80vh]">
                    {/* Left: Information */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 border-r border-white/5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Description */}
                            <p className="text-[#A1A1AA] leading-relaxed mb-8 text-lg">
                                From media walls to custom closets, our skilled carpenters create bespoke
                                solutions that enhance both beauty and functionality. Every piece is
                                crafted with precision and attention to detail.
                            </p>

                            {/* Services Grid */}
                            <h3 className="text-sm font-medium text-[#666] uppercase tracking-wider mb-6">What We Build</h3>
                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {carpentryServices.map((service, i) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="group relative bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden hover:border-[#C6A87C]/30 transition-all"
                                    >
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-6 h-6 bg-[#C6A87C]/20 backdrop-blur-sm rounded flex items-center justify-center">
                                                    <service.icon size={12} className="text-[#C6A87C]" />
                                                </div>
                                                <h4 className="text-white font-medium text-sm">{service.title}</h4>
                                            </div>
                                            <p className="text-[#888] text-xs">{service.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Features */}
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { title: 'Custom Design', desc: 'Every project tailored to your space' },
                                    { title: 'Quality Materials', desc: 'Premium hardwoods and finishes' },
                                    { title: 'Expert Installation', desc: 'Precise craftsmanship' },
                                ].map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-3 p-4 bg-[#0A0A0A] border border-white/5 rounded-xl">
                                        <Check size={16} className="text-[#C6A87C] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-1">{feature.title}</h4>
                                            <p className="text-[#666] text-xs">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Configurator */}
                    <div className="w-full lg:w-1/2 bg-[#080808] flex flex-col">
                        {/* Header */}
                        <div className="p-8 border-b border-white/5">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-[11px] font-medium text-[#888]">CONFIGURATOR</span>
                            </div>
                            <h2 className="text-xl text-white font-medium">Design Your Project</h2>
                        </div>

                        {/* Tabs */}
                        <div className="px-8 pt-6">
                            <div className="flex bg-[#121212] p-1 rounded-md w-full border border-white/5">
                                {(['project', 'wood', 'extras'] as Tab[]).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`w-1/3 py-2 px-3 rounded-[4px] text-[12px] font-medium transition-all border border-transparent capitalize ${activeTab === tab
                                            ? 'bg-[#EDEDED] text-[#000000] border-[#EDEDED]'
                                            : 'text-[#666] hover:text-[#EDEDED]'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8">
                            <AnimatePresence mode="wait">
                                {activeTab === 'project' && (
                                    <motion.div
                                        key="project"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <span className="text-[11px] font-medium text-[#555] block mb-4 uppercase tracking-wider">
                                            Project Type
                                        </span>
                                        <div className="grid grid-cols-2 gap-3">
                                            {projectTypes.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => setSelectedProject(opt.id)}
                                                    className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-4 transition-all relative ${selectedProject === opt.id
                                                        ? 'border-[#C6A87C] bg-[#121212]'
                                                        : 'border-white/5 hover:border-white/20'
                                                        }`}
                                                >
                                                    <div className="w-10 h-10 bg-[#C6A87C]/10 rounded-lg flex items-center justify-center mb-3">
                                                        <opt.icon size={20} className="text-[#C6A87C]" />
                                                    </div>
                                                    <span className="block text-sm text-white font-medium">{opt.name}</span>
                                                    <span className="text-[11px] text-[#555]">{opt.desc}</span>
                                                    {selectedProject === opt.id && (
                                                        <div className="absolute top-2 right-2 text-[#C6A87C]">
                                                            <Check size={12} />
                                                        </div>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'wood' && (
                                    <motion.div
                                        key="wood"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <span className="text-[11px] font-medium text-[#555] block mb-4 uppercase tracking-wider">
                                            Wood Selection
                                        </span>
                                        <div className="space-y-3">
                                            {woodOptions.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.99 }}
                                                    onClick={() => setSelectedWood(opt.id)}
                                                    className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-3 flex items-center justify-between transition-all ${selectedWood === opt.id
                                                        ? 'border-[#C6A87C] bg-[#121212]'
                                                        : 'border-white/5 hover:border-white/20'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div
                                                            className="w-10 h-10 rounded ring-1 ring-white/10"
                                                            style={{ backgroundColor: opt.color }}
                                                        />
                                                        <div>
                                                            <span className="block text-sm text-white font-medium">{opt.name}</span>
                                                            <span className="text-[11px] text-[#555]">{opt.desc}</span>
                                                        </div>
                                                    </div>
                                                    {selectedWood === opt.id && <Check size={14} className="text-[#C6A87C]" />}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'extras' && (
                                    <motion.div
                                        key="extras"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <span className="text-[11px] font-medium text-[#555] block mb-4 uppercase tracking-wider">
                                            Enhancements
                                        </span>
                                        <div className="space-y-3">
                                            {extras.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.99 }}
                                                    onClick={() => toggleExtra(opt.id)}
                                                    className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-3 flex items-center justify-between transition-all ${selectedExtras.includes(opt.id)
                                                        ? 'border-[#C6A87C] bg-[#121212]'
                                                        : 'border-white/5 hover:border-white/20'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-[#C6A87C]/20 text-[#C6A87C] flex items-center justify-center ring-1 ring-white/10">
                                                            <opt.icon size={16} />
                                                        </div>
                                                        <div>
                                                            <span className="block text-sm text-white font-medium">{opt.name}</span>
                                                            <span className="text-[11px] text-[#555]">{opt.desc}</span>
                                                        </div>
                                                    </div>
                                                    {selectedExtras.includes(opt.id) && <Check size={14} className="text-[#C6A87C]" />}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer */}
                        <div className="bg-[#050505] border-t border-white/5 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <span className="text-[11px] text-[#666] block mb-1">Selected Configuration</span>
                                    <span className="text-sm text-white">
                                        {projectTypes.find(p => p.id === selectedProject)?.name} • {woodOptions.find(w => w.id === selectedWood)?.name}
                                    </span>
                                </div>
                                <span className="text-[10px] text-[#C6A87C] bg-[#C6A87C]/5 border border-[#C6A87C]/20 px-2 py-1 rounded font-mono">
                                    4-6 Weeks
                                </span>
                            </div>
                            <Link
                                to="/book"
                                className="w-full font-medium text-[13px] py-3 rounded-[4px] transition-all duration-300 flex items-center justify-center gap-2 bg-[#C6A87C] text-[#050505] hover:bg-[#B59669]"
                            >
                                <Calendar size={16} />
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-medium text-white mb-4">Ready to Build Something Beautiful?</h2>
                    <p className="text-[#888] mb-8">Schedule a consultation for $100 and let's bring your vision to life.</p>
                    <Link
                        to="/"
                        state={{ scrollTo: 'booking' }}
                        className="inline-flex items-center gap-2 bg-[#C6A87C] text-[#050505] px-8 py-4 rounded-lg hover:bg-[#B59669] transition-all font-medium"
                    >
                        <span>Schedule Consultation</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
