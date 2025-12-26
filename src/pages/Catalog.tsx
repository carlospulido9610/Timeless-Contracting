import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Project data
const projects = [
    {
        id: 1,
        title: 'Modern Media Wall',
        category: 'media-walls',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'American Walnut', finish: 'Matte', size: '3.2m x 2.4m' },
        location: 'San Antonio, TX'
    },
    {
        id: 2,
        title: 'Luxury Kitchen Cabinets',
        category: 'kitchens',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'White Oak', finish: 'Semi-Gloss', size: 'Full Kitchen' },
        location: 'Austin, TX'
    },
    {
        id: 3,
        title: 'Walk-in Closet System',
        category: 'custom-furniture',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'Maple', finish: 'Natural', size: '4m x 3m' },
        location: 'Houston, TX'
    },
    {
        id: 4,
        title: 'Geometric Accent Wall',
        category: 'media-walls',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'Ebonized Ash', finish: 'Satin', size: '5m x 2.8m' },
        location: 'Dallas, TX'
    },
    {
        id: 5,
        title: 'Home Office Built-in',
        category: 'custom-furniture',
        image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'White Oak', finish: 'Matte', size: '2.5m x 2m' },
        location: 'San Antonio, TX'
    },
    {
        id: 6,
        title: 'Cabinet Refinish',
        category: 'kitchens',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'Existing', finish: 'Spray Painted', size: 'Complete Kitchen' },
        location: 'Austin, TX'
    },
    {
        id: 7,
        title: 'Entertainment Center',
        category: 'media-walls',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'American Walnut', finish: 'Oil', size: '4m x 2.6m' },
        location: 'Houston, TX'
    },
    {
        id: 8,
        title: 'Mudroom Tree Hall',
        category: 'custom-furniture',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
        specs: { wood: 'Painted MDF', finish: 'Eggshell', size: '2m x 2.4m' },
        location: 'Dallas, TX'
    },
];

// Reviews data
const reviews = [
    {
        id: 1,
        name: 'Jennifer M.',
        rating: 5,
        text: 'Timeless Contracting transformed our living room with a stunning media wall. The attention to detail was incredible, and the team was professional from start to finish.',
        project: 'Media Wall',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Robert & Lisa K.',
        rating: 5,
        text: 'Our kitchen cabinets look brand new after their refinishing service. We saved thousands compared to replacing them, and the finish is flawless.',
        project: 'Cabinet Painting',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Michael T.',
        rating: 5,
        text: 'The custom closet system they built for us maximized every inch of space. The craftsmanship is exceptional and it has made our mornings so much easier.',
        project: 'Custom Closet',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Sarah P.',
        rating: 5,
        text: 'Working from home is now a pleasure thanks to my new built-in office. They really understood my needs and created the perfect workspace.',
        project: 'Home Office',
        image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=400&auto=format&fit=crop'
    },
];

// Categories
const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'media-walls', label: 'Media Walls' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'custom-furniture', label: 'Custom Furniture' },
];

// Tab configuration options (Tesla-style)
const configTabs = [
    { id: 'materials', label: 'Materials' },
    { id: 'finishes', label: 'Finishes' },
    { id: 'extras', label: 'Extras' },
];

const materialsOptions = [
    { id: 'walnut', name: 'American Walnut', price: 'Premium', color: '#3E3025' },
    { id: 'oak', name: 'White Oak', price: 'Standard', color: '#C7B299' },
    { id: 'ash', name: 'Ebonized Ash', price: 'Premium+', color: '#1A1A1A' },
    { id: 'maple', name: 'Hard Maple', price: 'Standard', color: '#E8DCC8' },
];

const finishOptions = [
    { id: 'matte', name: 'Matte', desc: 'Smooth, non-reflective' },
    { id: 'satin', name: 'Satin', desc: 'Subtle sheen' },
    { id: 'semi', name: 'Semi-Gloss', desc: 'Moderate shine' },
    { id: 'oil', name: 'Natural Oil', desc: 'Enhanced grain' },
];

const extraOptions = [
    { id: 'led', name: 'LED Integration', price: '+$1,200' },
    { id: 'speakers', name: 'Speaker Mesh', price: '+$850' },
    { id: 'cable', name: 'Cable Management', price: '+$400' },
];

export default function Catalog() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeConfigTab, setActiveConfigTab] = useState('materials');
    const [reviewIndex, setReviewIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const nextReview = () => {
        setReviewIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="min-h-screen bg-[#050505] pt-20">
            {/* Hero */}
            <section className="py-16 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C6A87C]/10 rounded-full text-[11px] font-medium text-[#C6A87C] border border-[#C6A87C]/20 mb-6">
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
                            Project Catalog
                        </h1>
                        <p className="text-[#888] max-w-xl mx-auto">
                            Explore our completed projects and get inspired for your next transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-6 border-b border-white/5 bg-[#050505]/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                                    ? 'bg-[#C6A87C] text-black'
                                    : 'bg-[#111] text-[#888] hover:text-white border border-white/5 hover:border-white/10'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Grid - Full Bleed Editorial Style */}
            <section className="relative z-10">
                <motion.div layout className="flex flex-col">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                onClick={() => setSelectedProject(project)}
                                className="group relative w-full h-[70vh] md:h-[80vh] overflow-hidden cursor-pointer"
                            >
                                {/* Full Bleed Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Gradient Overlay - Stronger at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {/* Category Tag */}
                                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white/70 text-xs uppercase tracking-wider mb-4 border border-white/10">
                                            {project.category.replace('-', ' ')}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">
                                            {project.title}
                                        </h3>

                                        {/* Subtitle / CTA */}
                                        <div className="flex items-center gap-6 mt-4">
                                            <span className="text-white/60 text-sm md:text-base">
                                                {project.location}
                                            </span>
                                            <span className="text-[#C6A87C] text-sm md:text-base font-medium group-hover:underline transition-all flex items-center gap-2">
                                                See Products
                                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>

                                        {/* Specs - Revealed on Hover */}
                                        <div className="mt-6 overflow-hidden">
                                            <div className="flex flex-wrap gap-4 md:gap-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-white/40 text-sm">Wood:</span>
                                                    <span className="text-white text-sm">{project.specs.wood}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-white/40 text-sm">Finish:</span>
                                                    <span className="text-white text-sm">{project.specs.finish}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-white/40 text-sm">Size:</span>
                                                    <span className="text-white text-sm">{project.specs.size}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Decorative Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Tesla-style Configurator Preview */}
            <section className="py-16 border-t border-white/5 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl font-medium text-white mb-3">Configure Your Project</h2>
                        <p className="text-[#666]">Select materials, finishes, and extras for your custom build</p>
                    </motion.div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex bg-[#111] p-1 rounded-lg border border-white/5">
                            {configTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveConfigTab(tab.id)}
                                    className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${activeConfigTab === tab.id
                                        ? 'bg-[#C6A87C] text-black'
                                        : 'text-[#666] hover:text-white'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        {activeConfigTab === 'materials' && (
                            <motion.div
                                key="materials"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {materialsOptions.map((mat) => (
                                    <div
                                        key={mat.id}
                                        className="bg-[#111] border border-white/5 rounded-lg p-4 hover:border-[#C6A87C]/50 transition-colors cursor-pointer"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-full mb-3 ring-2 ring-white/10"
                                            style={{ backgroundColor: mat.color }}
                                        />
                                        <h4 className="text-white font-medium text-sm">{mat.name}</h4>
                                        <p className="text-[#C6A87C] text-xs">{mat.price}</p>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeConfigTab === 'finishes' && (
                            <motion.div
                                key="finishes"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {finishOptions.map((fin) => (
                                    <div
                                        key={fin.id}
                                        className="bg-[#111] border border-white/5 rounded-lg p-4 hover:border-[#C6A87C]/50 transition-colors cursor-pointer"
                                    >
                                        <h4 className="text-white font-medium text-sm mb-1">{fin.name}</h4>
                                        <p className="text-[#666] text-xs">{fin.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeConfigTab === 'extras' && (
                            <motion.div
                                key="extras"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                                {extraOptions.map((ext) => (
                                    <div
                                        key={ext.id}
                                        className="bg-[#111] border border-white/5 rounded-lg p-4 hover:border-[#C6A87C]/50 transition-colors cursor-pointer flex justify-between items-center"
                                    >
                                        <h4 className="text-white font-medium text-sm">{ext.name}</h4>
                                        <span className="text-[#C6A87C] text-sm font-medium">{ext.price}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="text-center mt-8">
                        <Link
                            to="/#configurator"
                            className="inline-flex items-center gap-2 bg-[#C6A87C] hover:bg-[#B59669] text-black font-medium px-6 py-3 rounded-md transition-colors"
                        >
                            Open Full Configurator
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reviews Carousel */}
            <section className="py-16 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C6A87C]/10 rounded-full text-[11px] font-medium text-[#C6A87C] border border-[#C6A87C]/20 mb-6">
                            Testimonials
                        </span>
                        <h2 className="text-2xl font-medium text-white mb-3">What Our Clients Say</h2>
                    </motion.div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={reviewIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden"
                            >
                                <div className="grid md:grid-cols-2">
                                    <div className="aspect-[4/3] md:aspect-auto">
                                        <img
                                            src={reviews[reviewIndex].image}
                                            alt={reviews[reviewIndex].project}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(reviews[reviewIndex].rating)].map((_, i) => (
                                                <Star key={i} size={18} className="text-[#C6A87C] fill-[#C6A87C]" />
                                            ))}
                                        </div>
                                        <p className="text-[#888] leading-relaxed mb-6 italic">
                                            "{reviews[reviewIndex].text}"
                                        </p>
                                        <div>
                                            <p className="text-white font-medium">{reviews[reviewIndex].name}</p>
                                            <p className="text-[#666] text-sm">{reviews[reviewIndex].project}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                onClick={prevReview}
                                className="w-10 h-10 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-[#888] hover:text-white hover:border-white/20 transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex items-center gap-2">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setReviewIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-colors ${i === reviewIndex ? 'bg-[#C6A87C]' : 'bg-[#333]'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextReview}
                                className="w-10 h-10 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-[#888] hover:text-white hover:border-white/20 transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-medium text-white mb-4">Ready to Start Your Project?</h2>
                    <p className="text-[#888] mb-8">Schedule a consultation and let's bring your vision to life.</p>
                    <Link
                        to="/#booking"
                        className="inline-flex items-center gap-2 bg-[#C6A87C] hover:bg-[#B59669] text-black font-medium px-6 py-3 rounded-md transition-colors"
                    >
                        Schedule Consultation
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0A0A0A] border border-white/10 rounded-xl max-w-2xl w-full overflow-hidden"
                        >
                            <div className="relative aspect-video">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl text-white font-medium mb-2">{selectedProject.title}</h3>
                                <p className="text-[#888] text-sm mb-4">{selectedProject.location}</p>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="bg-[#111] rounded-lg p-3">
                                        <p className="text-[10px] text-[#666] uppercase mb-1">Wood</p>
                                        <p className="text-white text-sm">{selectedProject.specs.wood}</p>
                                    </div>
                                    <div className="bg-[#111] rounded-lg p-3">
                                        <p className="text-[10px] text-[#666] uppercase mb-1">Finish</p>
                                        <p className="text-white text-sm">{selectedProject.specs.finish}</p>
                                    </div>
                                    <div className="bg-[#111] rounded-lg p-3">
                                        <p className="text-[10px] text-[#666] uppercase mb-1">Size</p>
                                        <p className="text-white text-sm">{selectedProject.specs.size}</p>
                                    </div>
                                </div>
                                <Link
                                    to="/#booking"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C6A87C] hover:bg-[#B59669] text-black font-medium px-6 py-3 rounded-md transition-colors"
                                >
                                    Request Similar Project
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
