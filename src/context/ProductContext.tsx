import { createContext, useContext, useState, ReactNode } from 'react';
import americanWalnutImg from '../assets/configurator/american-walnut.jpg';
import whiteOakImg from '../assets/configurator/white-oak.jpg';
import ebonizedAshImg from '../assets/configurator/ebonized-ash.jpg';

// Types
export type WoodOption = {
    id: string;
    name: string;
    desc: string;
    color: string;
    price: number | 'Included'; // 'Included' (0) or number for +Price
    image: string;
};

export type LayoutOption = {
    id: string;
    name: string;
    desc: string;
    price: number | 'Included';
};

interface ProductContextType {
    basePrice: number;
    woodOptions: WoodOption[];
    layoutOptions: LayoutOption[];
    updateBasePrice: (price: number) => void;
    updateWoodOption: (id: string, data: Partial<WoodOption>) => void;
    updateLayoutOption: (id: string, data: Partial<LayoutOption>) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
    const [basePrice, setBasePrice] = useState(5450);

    const [woodOptions, setWoodOptions] = useState<WoodOption[]>([
        {
            id: 'american-walnut',
            name: 'American Walnut',
            desc: 'Dark, rich grain',
            color: '#3E3025',
            price: 'Included',
            image: americanWalnutImg
        },
        {
            id: 'white-oak',
            name: 'White Oak',
            desc: 'Light, Scandinavian',
            color: '#C7B299',
            price: 'Included',
            image: whiteOakImg
        },
        {
            id: 'ebonized-ash',
            name: 'Ebonized Ash',
            desc: 'Matte black texture',
            color: '#1A1A1A',
            price: 800,
            image: ebonizedAshImg
        },
    ]);

    const [layoutOptions, setLayoutOptions] = useState<LayoutOption[]>([
        { id: 'linear', name: 'Linear', desc: 'Wall-to-wall fit', price: 'Included' },
        { id: 'floating', name: 'Floating', desc: 'Centered mount', price: 500 },
    ]);

    const updateBasePrice = (price: number) => setBasePrice(price);

    const updateWoodOption = (id: string, data: Partial<WoodOption>) => {
        setWoodOptions(prev => prev.map(opt => opt.id === id ? { ...opt, ...data } : opt));
    };

    const updateLayoutOption = (id: string, data: Partial<LayoutOption>) => {
        setLayoutOptions(prev => prev.map(opt => opt.id === id ? { ...opt, ...data } : opt));
    };

    return (
        <ProductContext.Provider value={{
            basePrice,
            woodOptions,
            layoutOptions,
            updateBasePrice,
            updateWoodOption,
            updateLayoutOption
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}
