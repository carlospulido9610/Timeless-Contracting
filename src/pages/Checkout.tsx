import { useState } from 'react';
import { Check, ArrowLeft, Calendar, MapPin, User, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import { motion } from 'framer-motion';

export default function Checkout() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        notes: '',
    });
    const [isProcessing, setIsProcessing] = useState(false);

    const { items, totalPrice, clearQuote } = useQuote();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsProcessing(false);
        setSubmitted(true);
        clearQuote();
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#050505] pt-24 flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-md"
                >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} className="text-green-500" />
                    </div>
                    <h1 className="text-2xl font-medium text-white mb-4">Request Received!</h1>
                    <p className="text-[#888] mb-6">
                        Thank you for your interest. Our team will contact you within 24 hours to schedule your consultation.
                    </p>
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-lg p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Calendar size={20} className="text-[#C6A87C]" />
                            <span className="text-white font-medium">Free Consultation</span>
                        </div>
                        <p className="text-xs text-[#666]">
                            A specialist will contact you to schedule the most convenient date and time.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#C6A87C] hover:text-[#B59669] transition-colors text-sm"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#666] hover:text-[#888] transition-colors text-sm mb-4"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <h1 className="text-2xl font-medium text-white">Schedule Consultation</h1>
                    <p className="text-sm text-[#666] mt-2">
                        Fill out the form below and we'll contact you to schedule a free consultation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <motion.form
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onSubmit={handleSubmit}
                            className="bg-[#0A0A0A] border border-white/5 rounded-lg p-6"
                        >
                            <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                                <User size={18} className="text-[#C6A87C]" />
                                Contact Information
                            </h2>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-[11px] font-medium text-[#666] mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#C6A87C] focus:outline-none transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-[#666] mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#C6A87C] focus:outline-none transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-[11px] font-medium text-[#666] mb-2 flex items-center gap-2">
                                    <Mail size={12} />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#C6A87C] focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-[11px] font-medium text-[#666] mb-2 flex items-center gap-2">
                                    <Phone size={12} />
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#C6A87C] focus:outline-none transition-colors"
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-[11px] font-medium text-[#666] mb-2 flex items-center gap-2">
                                    <MapPin size={12} />
                                    Project Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#C6A87C] focus:outline-none transition-colors"
                                    placeholder="123 Main Street"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[11px] font-medium text-[#666] mb-2">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#C6A87C] focus:outline-none transition-colors"
                                    placeholder="San Antonio, TX"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[11px] font-medium text-[#666] mb-2">Project Details (Optional)</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-[#C6A87C] focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full bg-[#C6A87C] hover:bg-[#B59669] disabled:bg-[#C6A87C]/50 text-black font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Calendar size={16} />
                                        Request Consultation
                                    </>
                                )}
                            </button>
                        </motion.form>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#0A0A0A] border border-white/5 rounded-lg p-6 sticky top-24">
                            <h3 className="text-sm font-medium text-white mb-4">What's Included</h3>

                            {/* Free Consultation */}
                            <div className="border-b border-white/5 pb-4 mb-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-[#C6A87C]/20 rounded-md flex items-center justify-center">
                                        <Calendar size={18} className="text-[#C6A87C]" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm text-white block">Free Consultation</span>
                                        <span className="text-[11px] text-[#666]">No obligation</span>
                                    </div>
                                    <span className="text-sm text-[#C6A87C] font-medium">FREE</span>
                                </div>
                            </div>

                            {/* Quote Items Summary */}
                            {items.length > 0 && (
                                <div className="border-b border-white/5 pb-4 mb-4">
                                    <span className="text-[11px] text-[#666] block mb-3">Your Configurations</span>
                                    {items.map((item, index) => (
                                        <div key={item.id} className="text-xs text-[#888] mb-2">
                                            <span className="text-white">#{index + 1}</span> {item.woodLabel} • {item.layoutLabel}
                                            <span className="float-right text-[#C6A87C]">${item.price.toLocaleString()}</span>
                                        </div>
                                    ))}
                                    <div className="text-xs text-[#666] mt-2 pt-2 border-t border-white/5">
                                        <span>Estimated Total</span>
                                        <span className="float-right text-white">${totalPrice.toLocaleString()}</span>
                                    </div>
                                </div>
                            )}

                            {/* Includes */}
                            <div className="space-y-2 mb-6">
                                <span className="text-[11px] text-[#666] block mb-2">Consultation includes:</span>
                                {['Discussion of your project', 'Professional recommendations', 'Free estimate'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-[#888]">
                                        <Check size={12} className="text-[#C6A87C]" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-[10px] text-[#444]">
                                * We'll contact you within 24 hours to schedule
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
