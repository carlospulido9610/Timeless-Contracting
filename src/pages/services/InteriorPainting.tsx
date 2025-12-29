import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home,
    MessageSquare,
    Wrench,
    Brush,
    CheckCircle,
    Sparkles,
    Phone,
    Check,
    ArrowRight,
    Palette,
    Droplets,
    Shield,
    Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
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

const paintTypes = [
    { id: 'flat', name: 'Flat/Matte', desc: 'No shine, hides imperfections', color: '#4a4a4a' },
    { id: 'eggshell', name: 'Eggshell', desc: 'Slight sheen, easy to clean', color: '#6b6b6b' },
    { id: 'satin', name: 'Satin', desc: 'Soft glow, durable', color: '#8a8a8a' },
    { id: 'semi-gloss', name: 'Semi-Gloss', desc: 'Reflective, moisture resistant', color: '#aaaaaa' },
];

const roomOptions = [
    { id: 'living', name: 'Living Room', desc: 'Main living spaces' },
    { id: 'bedroom', name: 'Bedrooms', desc: 'Sleeping quarters' },
    { id: 'kitchen', name: 'Kitchen', desc: 'Cooking areas' },
    { id: 'bathroom', name: 'Bathrooms', desc: 'Moisture-prone areas' },
    { id: 'hallway', name: 'Hallways', desc: 'Transition spaces' },
    { id: 'ceiling', name: 'Ceilings', desc: 'Overhead surfaces' },
];

const extras = [
    { id: 'primer', name: 'Premium Primer', desc: 'Enhanced adhesion & coverage', icon: Shield },
    { id: 'lowvoc', name: 'Low-VOC Paint', desc: 'Eco-friendly, low odor', icon: Droplets },
    { id: 'accent', name: 'Accent Wall', desc: 'Feature wall in contrasting color', icon: Palette },
];

export default function InteriorPainting() {
    type Tab = 'finish' | 'rooms' | 'extras';

    const [activeTab, setActiveTab] = useState<Tab>('finish');
    const [selectedFinish, setSelectedFinish] = useState('eggshell');
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const toggleRoom = (id: string) => {
        setSelectedRooms(prev =>
            prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
        );
    };

    const toggleExtra = (id: string) => {
        setSelectedExtras(prev =>
            prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
        );
    };

    // Navigation to booking handled by Link below

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero */}
            <section className="relative py-6 md:py-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1483ca]/5 to-transparent" />
                <div className="max-w-6xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1483ca] text-sm mb-6 transition-colors"
                        >
                            ← Back to Services
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-[#1483ca]/10 rounded-xl flex items-center justify-center">
                                <Home size={28} className="text-[#1483ca]" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
                                    Interior Painting
                                </h1>
                                <p className="text-gray-500 mt-1">Professional residential painting services</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content: Info + Configurator */}
            <section>
                <div className="flex flex-col lg:flex-row min-h-[80vh]">
                    {/* Left: Information */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 border-r border-gray-200">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Image */}
                            <div className="relative mb-8">
                                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
                                        alt="Interior Painting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Whether you're refreshing a single room or giving your entire home a makeover,
                                our experienced team delivers clean lines, smooth finishes, and stress-free service.
                                We use premium Sherwin Williams paints for lasting beauty.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-10">
                                {['Low-VOC Paints', 'Sherwin Williams', 'Clean Edges', 'Protected Floors'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-500 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Process Steps */}
                            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-6">Our Process</h3>
                            <div className="space-y-3">
                                {processSteps.map((step, i) => (
                                    <motion.div
                                        key={step.number}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#1483ca]/30 transition-all shadow-sm"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-[#1483ca]/10 rounded-lg flex items-center justify-center">
                                            <step.icon size={18} className="text-[#1483ca]" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-mono text-[#1483ca]">{step.number}</span>
                                                <h4 className="text-gray-900 font-medium text-sm">{step.title}</h4>
                                            </div>
                                            <p className="text-gray-500 text-xs leading-relaxed">{step.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Configurator */}
                    <div className="w-full lg:w-1/2 bg-white flex flex-col">
                        {/* Header */}
                        <div className="p-8 border-b border-gray-200">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-[11px] font-medium text-gray-500">CONFIGURATOR</span>
                            </div>
                            <h2 className="text-xl text-gray-900 font-medium">Customize Your Project</h2>
                        </div>

                        {/* Tabs */}
                        <div className="px-8 pt-6">
                            <div className="flex bg-gray-100 p-1 rounded-md w-full border border-gray-200">
                                {(['finish', 'rooms', 'extras'] as Tab[]).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`w-1/3 py-2 px-3 rounded-[4px] text-[12px] font-medium transition-all border border-transparent capitalize ${activeTab === tab
                                            ? 'bg-white text-[#1483ca] border-gray-200 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-900'
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
                                {activeTab === 'finish' && (
                                    <motion.div
                                        key="finish"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <span className="text-[11px] font-medium text-gray-500 block mb-4 uppercase tracking-wider">
                                            Paint Finish
                                        </span>
                                        <div className="space-y-3">
                                            {paintTypes.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.99 }}
                                                    onClick={() => setSelectedFinish(opt.id)}
                                                    className={`cursor-pointer border bg-white rounded-md p-3 flex items-center justify-between transition-all shadow-sm ${selectedFinish === opt.id
                                                        ? 'border-[#1483ca] bg-blue-50/10'
                                                        : 'border-gray-200 hover:border-[#1483ca]/30'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div
                                                            className="w-8 h-8 rounded-full ring-1 ring-gray-200"
                                                            style={{ backgroundColor: opt.color }}
                                                        />
                                                        <div>
                                                            <span className="block text-sm text-gray-900 font-medium">{opt.name}</span>
                                                            <span className="text-[11px] text-gray-500">{opt.desc}</span>
                                                        </div>
                                                    </div>
                                                    {selectedFinish === opt.id && <Check size={14} className="text-[#1483ca]" />}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'rooms' && (
                                    <motion.div
                                        key="rooms"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <span className="text-[11px] font-medium text-gray-500 block mb-4 uppercase tracking-wider">
                                            Select Rooms
                                        </span>
                                        <div className="grid grid-cols-2 gap-3">
                                            {roomOptions.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => toggleRoom(opt.id)}
                                                    className={`cursor-pointer border bg-white rounded-md p-4 text-center transition-all relative shadow-sm ${selectedRooms.includes(opt.id)
                                                        ? 'border-[#1483ca] bg-blue-50/10'
                                                        : 'border-gray-200 hover:border-[#1483ca]/30'
                                                        }`}
                                                >
                                                    <span className="block text-sm text-gray-900 mb-1 font-medium">{opt.name}</span>
                                                    <span className="text-[11px] text-gray-500">{opt.desc}</span>
                                                    {selectedRooms.includes(opt.id) && (
                                                        <div className="absolute top-2 right-2 text-[#1483ca]">
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
                                        <span className="text-[11px] font-medium text-gray-500 block mb-4 uppercase tracking-wider">
                                            Enhancements
                                        </span>
                                        <div className="space-y-3">
                                            {extras.map((opt) => (
                                                <motion.div
                                                    key={opt.id}
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.99 }}
                                                    onClick={() => toggleExtra(opt.id)}
                                                    className={`cursor-pointer border bg-white rounded-md p-3 flex items-center justify-between transition-all shadow-sm ${selectedExtras.includes(opt.id)
                                                        ? 'border-[#1483ca] bg-blue-50/10'
                                                        : 'border-gray-200 hover:border-[#1483ca]/30'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-[#1483ca]/10 text-[#1483ca] flex items-center justify-center ring-1 ring-gray-200">
                                                            <opt.icon size={16} />
                                                        </div>
                                                        <div>
                                                            <span className="block text-sm text-gray-900 font-medium">{opt.name}</span>
                                                            <span className="text-[11px] text-gray-500">{opt.desc}</span>
                                                        </div>
                                                    </div>
                                                    {selectedExtras.includes(opt.id) && <Check size={14} className="text-[#1483ca]" />}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer */}
                        <div className="bg-white border-t border-gray-200 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <span className="text-[11px] text-gray-500 block mb-1">Selected Configuration</span>
                                    <span className="text-sm text-gray-900">
                                        {paintTypes.find(p => p.id === selectedFinish)?.name} • {selectedRooms.length} rooms
                                    </span>
                                </div>
                                <span className="text-[10px] text-[#1483ca] bg-[#1483ca]/5 border border-[#1483ca]/20 px-2 py-1 rounded font-mono">
                                    Quote on Request
                                </span>
                            </div>
                            <Link
                                to="/book"
                                className="w-full font-medium text-[13px] py-3 rounded-[4px] transition-all duration-300 flex items-center justify-center gap-2 bg-[#1483ca] text-white hover:bg-[#106ba3]"
                            >
                                <Calendar size={16} />
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-gray-200 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-medium text-gray-900 mb-4">Ready to Transform Your Space?</h2>
                    <p className="text-gray-500 mb-8">Schedule a free consultation and let's discuss your project.</p>
                    <Link
                        to="/"
                        state={{ scrollTo: 'booking' }}
                        className="inline-flex items-center gap-2 bg-[#1483ca] text-white px-8 py-4 rounded-lg hover:bg-[#106ba3] transition-all font-medium"
                    >
                        <span>Schedule Consultation</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
