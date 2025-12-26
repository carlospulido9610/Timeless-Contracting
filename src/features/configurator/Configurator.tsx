import { useState } from 'react';
import { Lightbulb, Speaker, Check, Plus } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { useProduct } from '../../context/ProductContext';
import { motion, AnimatePresence } from 'framer-motion';
const EXTRAS_LABELS: Record<string, string> = {
    'lighting': 'LED Integration',
    'surround': 'Speaker Mesh',
};

export default function Configurator() {
    type Tab = 'material' | 'finish' | 'extras';

    const { basePrice, woodOptions, layoutOptions } = useProduct();
    const [activeTab, setActiveTab] = useState<Tab>('material');

    // Initialize with first option provided by context
    const [wood, setWood] = useState<string>(woodOptions[0]?.id || 'american-walnut');
    const [layout, setLayout] = useState<string>(layoutOptions[0]?.id || 'linear');
    const [extras, setExtras] = useState<string[]>([]);
    const [addedFeedback, setAddedFeedback] = useState(false);

    const { addToQuote } = useQuote();

    const calculatePrice = () => {
        let total = basePrice;

        const selectedWood = woodOptions.find(w => w.id === wood);
        if (selectedWood && typeof selectedWood.price === 'number') {
            total += selectedWood.price;
        }

        const selectedLayout = layoutOptions.find(l => l.id === layout);
        if (selectedLayout && typeof selectedLayout.price === 'number') {
            total += selectedLayout.price;
        }

        if (extras.includes('lighting')) total += 1200;
        if (extras.includes('surround')) total += 850;
        return total;
    };

    const toggleExtra = (value: string) => {
        setExtras((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleAddToQuote = () => {
        const selectedWood = woodOptions.find(w => w.id === wood);
        const selectedLayout = layoutOptions.find(l => l.id === layout);

        addToQuote({
            wood: wood as any, // Cast for legacy compatibility if strict types needed
            woodLabel: selectedWood?.name || wood,
            layout: layout as any,
            layoutLabel: selectedLayout?.name || layout,
            extras,
            extrasLabels: extras.map(e => EXTRAS_LABELS[e]),
            price: calculatePrice(),
        });
        setAddedFeedback(true);
        setTimeout(() => setAddedFeedback(false), 2000);
    };

    return (
        <section id="configurator" className="bg-[#000000] border-t border-white/5 relative">
            <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
                {/* Left: Visual (Sticky) with Dynamic Image */}
                <div className="w-full lg:w-2/3 h-[50vh] lg:h-screen relative lg:sticky lg:top-0 bg-[#0A0A0A] overflow-hidden">
                    <AnimatePresence mode="wait">
                        {woodOptions.find(w => w.id === wood)?.image && (
                            <motion.img
                                key={wood}
                                src={woodOptions.find(w => w.id === wood)?.image}
                                alt="Configurator Preview"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 0.7, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        )}
                        {!woodOptions.find(w => w.id === wood)?.image && (
                            <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center text-white/20">
                                No Image Available
                            </div>
                        )}
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80"></div>

                    <div className="absolute top-8 left-8">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#000000]/50 backdrop-blur-md rounded-md text-[11px] font-medium text-white border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Studio Configurator
                        </span>
                    </div>

                    <div className="absolute bottom-12 left-8 md:left-12">
                        <h3 className="text-3xl text-white mb-2 font-medium tracking-tight">
                            Model S: <span className="text-[#C6A87C]">Media Wall</span>
                        </h3>
                        <div className="flex gap-4 text-xs text-[#888] font-mono mt-4">
                            <span>W: 3200mm</span>
                            <span>H: 2400mm</span>
                            <span>D: 450mm</span>
                        </div>
                    </div>
                </div>

                {/* Right: Controls */}
                <div className="w-full lg:w-1/3 h-auto lg:h-screen flex flex-col bg-[#050505] border-l border-white/5">
                    {/* Tab Navigation */}
                    <div className="pt-8 px-8 pb-4 border-b border-white/5">
                        <h2 className="text-lg mb-6 text-white font-medium tracking-tight">
                            Configuration
                        </h2>
                        <div className="flex bg-[#121212] p-1 rounded-md w-full border border-white/5">
                            {(['material', 'finish', 'extras'] as Tab[]).map((tab) => (
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

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                        <AnimatePresence mode="wait">
                            {activeTab === 'material' && (
                                <motion.div
                                    key="material"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="mb-8"
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
                                                onClick={() => setWood(opt.id)}
                                                className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-3 flex items-center justify-between transition-all ${wood === opt.id
                                                    ? 'border-[#C6A87C] bg-[#121212]'
                                                    : 'border-white/5 hover:border-white/20'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="w-8 h-8 rounded-full ring-1 ring-white/10"
                                                        style={{ backgroundColor: opt.color }}
                                                    ></div>
                                                    <div>
                                                        <span className="block text-sm text-white font-medium">{opt.name}</span>
                                                        <span className="text-[11px] text-[#555]">{opt.desc}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className={`text-xs font-medium transition-colors ${wood === opt.id ? 'text-white' : 'text-[#555]'}`}>
                                                        {typeof opt.price === 'number' ? `+$${opt.price}` : opt.price}
                                                    </span>
                                                    {wood === opt.id && <Check size={14} className="text-[#C6A87C]" />}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'finish' && (
                                <motion.div
                                    key="finish"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="mb-8"
                                >
                                    <span className="text-[11px] font-medium text-[#555] block mb-4 uppercase tracking-wider">
                                        Mounting Style
                                    </span>
                                    <div className="grid grid-cols-2 gap-3">
                                        {layoutOptions.map((opt) => (
                                            <motion.div
                                                key={opt.id}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => setLayout(opt.id)}
                                                className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-4 text-center transition-all h-full flex flex-col justify-center relative ${layout === opt.id
                                                    ? 'border-[#C6A87C] bg-[#121212]'
                                                    : 'border-white/5 hover:border-white/20'
                                                    }`}
                                            >
                                                <span className="block text-sm text-white mb-1 font-medium">{opt.name}</span>
                                                <span className="text-[11px] text-[#555]">{opt.desc}</span>
                                                {layout === opt.id && (
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
                                    transition={{ duration: 0.2 }}
                                    className="mb-8"
                                >
                                    <span className="text-[11px] font-medium text-[#555] block mb-4 uppercase tracking-wider">
                                        Enhancements
                                    </span>
                                    <div className="space-y-3">
                                        <motion.div
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            onClick={() => toggleExtra('lighting')}
                                            className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-3 flex items-center justify-between transition-all ${extras.includes('lighting')
                                                ? 'border-[#C6A87C] bg-[#121212]'
                                                : 'border-white/5 hover:border-white/20'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#C6A87C]/20 text-[#C6A87C] flex items-center justify-center ring-1 ring-white/10">
                                                    <Lightbulb size={16} />
                                                </div>
                                                <div>
                                                    <span className="block text-sm text-white font-medium">LED Integration</span>
                                                    <span className="text-[11px] text-[#555]">Smart home compatible</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-[#555] font-medium">+$1,200</span>
                                                {extras.includes('lighting') && <Check size={14} className="text-[#C6A87C]" />}
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            onClick={() => toggleExtra('surround')}
                                            className={`cursor-pointer border bg-[#0A0A0A] rounded-md p-3 flex items-center justify-between transition-all ${extras.includes('surround')
                                                ? 'border-[#C6A87C] bg-[#121212]'
                                                : 'border-white/5 hover:border-white/20'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#C6A87C]/20 text-[#C6A87C] flex items-center justify-center ring-1 ring-white/10">
                                                    <Speaker size={16} />
                                                </div>
                                                <div>
                                                    <span className="block text-sm text-white font-medium">Speaker Mesh</span>
                                                    <span className="text-[11px] text-[#555]">Acoustically transparent</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-[#555] font-medium">+$850</span>
                                                {extras.includes('surround') && <Check size={14} className="text-[#C6A87C]" />}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer Price with Animated Counter */}
                    <div className="bg-[#050505] border-t border-white/5 p-6 backdrop-blur-xl">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <span className="text-[11px] text-[#666] block mb-1">Estimated Investment</span>
                                <motion.span
                                    key={calculatePrice()}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-2xl text-white font-medium tracking-tight"
                                >
                                    ${calculatePrice().toLocaleString()}
                                </motion.span>
                            </div>
                            <span className="text-[10px] text-[#C6A87C] bg-[#C6A87C]/5 border border-[#C6A87C]/20 px-2 py-1 rounded font-mono">
                                4-6 Weeks
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAddToQuote}
                                className={`flex-1 font-medium text-[13px] py-3 rounded-[4px] transition-all duration-300 flex items-center justify-center gap-2 ${addedFeedback
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
            </div>
        </section>
    );
}
