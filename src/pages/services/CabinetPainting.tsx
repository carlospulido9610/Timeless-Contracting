import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Paintbrush,
    Check,
    Plus,
    ArrowRight,
    Palette,
    Layers,
    Sparkles,
    DoorOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuote } from '../../context/QuoteContext';

const processSteps = [
    { number: '01', title: 'Consultation', desc: 'Discuss vision, assess cabinets, provide written quote' },
    { number: '02', title: 'Removal', desc: 'Carefully remove and label doors, drawers, hardware' },
    { number: '03', title: 'Preparation', desc: 'Clean, sand, and prime all surfaces' },
    { number: '04', title: 'Spraying', desc: 'Apply high-quality paint for smooth, uniform finish' },
    { number: '05', title: 'Reassembly', desc: 'Reinstall everything with precision' },
    { number: '06', title: 'Final Review', desc: 'Walk-through and touch-ups as needed' },
];

const cabinetStyles = [
    { id: 'shaker', name: 'Shaker Style', desc: 'Classic, clean lines', color: '#5a4a3a' },
    { id: 'flat-panel', name: 'Flat Panel', desc: 'Modern, sleek look', color: '#3a3a3a' },
    { id: 'raised-panel', name: 'Raised Panel', desc: 'Traditional elegance', color: '#6a5a4a' },
    { id: 'beadboard', name: 'Beadboard', desc: 'Cottage, coastal style', color: '#e8e4dc' },
];

const colorOptions = [
    { id: 'white', name: 'Classic White', desc: 'Timeless and bright', color: '#FFFFFF' },
    { id: 'cream', name: 'Warm Cream', desc: 'Soft and inviting', color: '#F5F0E6' },
    { id: 'gray', name: 'Modern Gray', desc: 'Contemporary neutral', color: '#6B7280' },
    { id: 'navy', name: 'Navy Blue', desc: 'Bold and sophisticated', color: '#1E3A5F' },
    { id: 'sage', name: 'Sage Green', desc: 'Natural and calming', color: '#7A8B7A' },
    { id: 'black', name: 'Matte Black', desc: 'Dramatic statement', color: '#1A1A1A' },
];

const extras = [
    { id: 'hardware', name: 'New Hardware', desc: 'Modern handles and knobs', icon: DoorOpen },
    { id: 'interior', name: 'Interior Painting', desc: 'Paint inside shelves', icon: Layers },
    { id: 'glaze', name: 'Glaze Finish', desc: 'Antiqued look', icon: Sparkles },
];

export default function CabinetPainting() {
    type Tab = 'style' | 'color' | 'extras';

    const [activeTab, setActiveTab] = useState<Tab>('style');
    const [selectedStyle, setSelectedStyle] = useState('shaker');
    const [selectedColor, setSelectedColor] = useState('white');
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
    const [addedFeedback, setAddedFeedback] = useState(false);

    const { addToQuote } = useQuote();

    const toggleExtra = (id: string) => {
        setSelectedExtras(prev =>
            prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
        );
    };

    const handleAddToQuote = () => {
        const styleOption = cabinetStyles.find(s => s.id === selectedStyle);
        const colorOption = colorOptions.find(c => c.id === selectedColor);
        const extraLabels = selectedExtras.map(e => extras.find(ex => ex.id === e)?.name || e);

        addToQuote({
            wood: selectedStyle as any,
            woodLabel: `Cabinet Painting - ${styleOption?.name}`,
            layout: selectedColor as any,
            layoutLabel: `Color: ${colorOption?.name}`,
            extras: selectedExtras,
            extrasLabels: extraLabels,
            price: 0,
        });
        setAddedFeedback(true);
        setTimeout(() => setAddedFeedback(false), 2000);
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
                                <Paintbrush size={28} className="text-[#C6A87C]" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                                    Cabinet Painting
                                </h1>
                                <p className="text-[#888] mt-1">Transform your kitchen with professional spray finishing</p>
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
                            {/* Images Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
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

                            {/* Description */}
                            <p className="text-[#A1A1AA] leading-relaxed mb-8">
                                Your kitchen is the heart of your home. We breathe new life into cabinets with
                                professional spray finishing that delivers a factory-smooth look at a fraction
                                of replacement cost.
                            </p>

                            {/* Process Steps */}
                            <h3 className="text-sm font-medium text-[#666] uppercase tracking-wider mb-6">Our Process</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {processSteps.map((step, i) => (
                                    <motion.div
                                        key={step.number}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="p-4 bg-[#0A0A0A] border border-white/5 rounded-lg"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-5 h-5 bg-[#C6A87C]/20 rounded text-[10px] font-bold text-[#C6A87C] flex items-center justify-center">
                                                {step.number}
                                            </span>
                                            <h4 className="text-white text-sm font-medium">{step.title}</h4>
                                        </div>
                                        <p className="text-[#666] text-xs">{step.desc}</p>
                                    </motion.div>
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
                            <h2 className="text-xl text-white font-medium">Design Your Cabinets</h2>
                        </div>

                        {/* Tabs */}
                        <div className="px-8 pt-6">
                            <div className="flex bg-[#121212] p-1 rounded-md w-full border border-white/5">
                                {(['style', 'color', 'extras'] as Tab[]).map((tab) => (
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
                                {activeTab === 'style' && (
                                    <motion.div
                                        key="style"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <span className="text-[11px] font-medium text-[#555] block mb-4 uppercase tracking-wider">
                                            Cabinet Style
                                        </span>
                                        <div className="space-y-3">
                                            {cabinetStyles.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.99 }}
                                                    onClick={() => setSelectedStyle(opt.id)}
                                                    className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-3 flex items-center justify-between transition-all ${selectedStyle === opt.id
                                                        ? 'border-[#C6A87C] bg-[#121212]'
                                                        : 'border-white/5 hover:border-white/20'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div
                                                            className="w-8 h-8 rounded ring-1 ring-white/10"
                                                            style={{ backgroundColor: opt.color }}
                                                        />
                                                        <div>
                                                            <span className="block text-sm text-white font-medium">{opt.name}</span>
                                                            <span className="text-[11px] text-[#555]">{opt.desc}</span>
                                                        </div>
                                                    </div>
                                                    {selectedStyle === opt.id && <Check size={14} className="text-[#C6A87C]" />}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'color' && (
                                    <motion.div
                                        key="color"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <span className="text-[11px] font-medium text-[#555] block mb-4 uppercase tracking-wider">
                                            Paint Color
                                        </span>
                                        <div className="grid grid-cols-2 gap-3">
                                            {colorOptions.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => setSelectedColor(opt.id)}
                                                    className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-4 transition-all relative ${selectedColor === opt.id
                                                        ? 'border-[#C6A87C] bg-[#121212]'
                                                        : 'border-white/5 hover:border-white/20'
                                                        }`}
                                                >
                                                    <div
                                                        className="w-full h-12 rounded mb-3 ring-1 ring-white/10"
                                                        style={{ backgroundColor: opt.color }}
                                                    />
                                                    <span className="block text-sm text-white font-medium">{opt.name}</span>
                                                    <span className="text-[11px] text-[#555]">{opt.desc}</span>
                                                    {selectedColor === opt.id && (
                                                        <div className="absolute top-2 right-2 text-[#C6A87C]">
                                                            <Check size={12} />
                                                        </div>
                                                    )}
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
                                        {cabinetStyles.find(s => s.id === selectedStyle)?.name} • {colorOptions.find(c => c.id === selectedColor)?.name}
                                    </span>
                                </div>
                                <span className="text-[10px] text-[#C6A87C] bg-[#C6A87C]/5 border border-[#C6A87C]/20 px-2 py-1 rounded font-mono">
                                    2-3 Weeks
                                </span>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAddToQuote}
                                className={`w-full font-medium text-[13px] py-3 rounded-[4px] transition-all duration-300 flex items-center justify-center gap-2 ${addedFeedback
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'bg-[#C6A87C] text-[#050505] hover:bg-[#B59669]'
                                    }`}
                            >
                                {addedFeedback ? (
                                    <>
                                        <Check size={16} />
                                        Added to Quote
                                    </>
                                ) : (
                                    <>
                                        <Plus size={16} />
                                        Add to Quote
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-medium text-white mb-4">Ready to Refresh Your Kitchen?</h2>
                    <p className="text-[#888] mb-8">Schedule a free consultation and get a detailed quote.</p>
                    <Link
                        to="/#booking"
                        className="inline-flex items-center justify-center gap-2 bg-[#C6A87C] hover:bg-[#B59669] text-black font-medium px-6 py-3 rounded-md transition-colors"
                    >
                        Schedule Consultation
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
