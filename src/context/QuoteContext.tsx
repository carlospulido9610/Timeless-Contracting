import { createContext, useContext, useState, ReactNode } from 'react';

export interface QuoteItem {
    id: string;
    wood: string;
    woodLabel: string;
    layout: string;
    layoutLabel: string;
    extras: string[];
    extrasLabels: string[];
    price: number;
    timestamp: number;
}

interface QuoteContextType {
    items: QuoteItem[];
    isCartOpen: boolean;
    addToQuote: (item: Omit<QuoteItem, 'id' | 'timestamp'>) => void;
    removeFromQuote: (id: string) => void;
    clearQuote: () => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    totalPrice: number;
    itemCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<QuoteItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToQuote = (item: Omit<QuoteItem, 'id' | 'timestamp'>) => {
        const newItem: QuoteItem = {
            ...item,
            id: crypto.randomUUID(),
            timestamp: Date.now(),
        };
        setItems(prev => [...prev, newItem]);
        setIsCartOpen(true); // Auto-open cart when item added
    };

    const removeFromQuote = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const clearQuote = () => {
        setItems([]);
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen(prev => !prev);

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const itemCount = items.length;

    return (
        <QuoteContext.Provider
            value={{
                items,
                isCartOpen,
                addToQuote,
                removeFromQuote,
                clearQuote,
                openCart,
                closeCart,
                toggleCart,
                totalPrice,
                itemCount,
            }}
        >
            {children}
        </QuoteContext.Provider>
    );
}

export function useQuote() {
    const context = useContext(QuoteContext);
    if (context === undefined) {
        throw new Error('useQuote must be used within a QuoteProvider');
    }
    return context;
}
