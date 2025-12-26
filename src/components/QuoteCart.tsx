import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteCart() {
    const { items, isCartOpen, closeCart, removeFromQuote, clearQuote, totalPrice } = useQuote();
    const navigate = useNavigate();

    const handleCheckout = () => {
        closeCart();
        navigate('/', { state: { scrollTo: 'booking' } });
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-white/10 z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={20} className="text-[#C6A87C]" />
                                <h2 className="text-lg font-medium text-white">Your Quote</h2>
                                <span className="text-xs bg-[#C6A87C] text-black px-2 py-0.5 rounded-full font-medium">
                                    {items.length}
                                </span>
                            </div>
                            <button
                                onClick={closeCart}
                                className="text-[#666] hover:text-white transition-colors p-2"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {items.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingBag size={48} className="mx-auto text-[#333] mb-4" />
                                    <p className="text-[#666] text-sm">Your quote is empty</p>
                                    <p className="text-[#444] text-xs mt-2">
                                        Configure a project and add it here
                                    </p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        className="bg-[#111] border border-white/5 rounded-lg p-4"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-sm font-medium text-white">Media Wall Config</h3>
                                            <button
                                                onClick={() => removeFromQuote(item.id)}
                                                className="text-[#666] hover:text-red-500 transition-colors p-1"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>

                                        <div className="space-y-2 text-xs">
                                            <div className="flex justify-between">
                                                <span className="text-[#666]">Wood:</span>
                                                <span className="text-[#A1A1AA]">{item.woodLabel}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#666]">Mount:</span>
                                                <span className="text-[#A1A1AA]">{item.layoutLabel}</span>
                                            </div>
                                            {item.extrasLabels.length > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-[#666]">Extras:</span>
                                                    <span className="text-[#A1A1AA]">{item.extrasLabels.join(', ')}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center">
                                            <span className="text-[10px] text-[#444]">Estimated</span>
                                            <span className="text-sm font-medium text-[#C6A87C]">
                                                ${item.price.toLocaleString()}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/5 bg-[#050505]">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-[#888]">Estimated Total</span>
                                    <span className="text-xl font-medium text-white">
                                        ${totalPrice.toLocaleString()}
                                    </span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#C6A87C] hover:bg-[#B59669] text-black font-medium text-sm py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                                >
                                    Request Quote
                                    <ArrowRight size={16} />
                                </button>

                                <button
                                    onClick={clearQuote}
                                    className="w-full text-[#666] hover:text-[#888] text-xs py-2 mt-2 transition-colors"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
