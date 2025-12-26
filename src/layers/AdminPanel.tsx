import { useState } from 'react';
import { Package, Users, Settings, Plus, Search, X, Save, Upload } from 'lucide-react';
import { useProduct, WoodOption } from '../context/ProductContext';

export default function AdminPanel() {
    const [activeView, setActiveView] = useState('products');
    const { basePrice, woodOptions, updateBasePrice, updateWoodOption } = useProduct();

    const [editingProduct, setEditingProduct] = useState(false);
    const [tempBasePrice, setTempBasePrice] = useState(basePrice.toString());
    const [tempWoodOptions, setTempWoodOptions] = useState<WoodOption[]>([]);

    const startEditing = () => {
        setTempBasePrice(basePrice.toString());
        setTempWoodOptions([...woodOptions]);
        setEditingProduct(true);
    };

    const saveChanges = () => {
        updateBasePrice(Number(tempBasePrice));
        tempWoodOptions.forEach(opt => {
            updateWoodOption(opt.id, opt);
        });
        setEditingProduct(false);
    };

    const updateTempWood = (id: string, field: keyof WoodOption, value: any) => {
        setTempWoodOptions(prev => prev.map(opt => opt.id === id ? { ...opt, [field]: value } : opt));
    };

    return (
        <div className="min-h-screen bg-[#050505] pt-20 px-6 max-w-7xl mx-auto flex gap-6 relative">
            {/* Modal Overlay */}
            {editingProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-[#111] border border-white/10 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <h3 className="text-xl text-white font-medium">Edit Product: Media Wall System</h3>
                            <button onClick={() => setEditingProduct(false)} className="text-[#666] hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Base Price */}
                            <div>
                                <label className="block text-xs font-medium text-[#666] mb-2 uppercase tracking-wider">Base Price ($)</label>
                                <input
                                    type="number"
                                    value={tempBasePrice}
                                    onChange={(e) => setTempBasePrice(e.target.value)}
                                    className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-white focus:border-[#C6A87C] outline-none"
                                />
                            </div>

                            {/* Wood Options Images */}
                            <div>
                                <label className="block text-xs font-medium text-[#666] mb-4 uppercase tracking-wider">Wood Option Images</label>
                                <div className="space-y-4">
                                    {tempWoodOptions.map((opt) => (
                                        <div key={opt.id} className="bg-[#050505] p-4 rounded border border-white/5 flex gap-4 items-start">
                                            <div className="w-16 h-16 bg-[#1a1a1a] rounded overflow-hidden flex-shrink-0">
                                                <img src={opt.image} alt={opt.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-sm text-white font-medium">{opt.name}</span>
                                                    <span className="text-xs text-[#666]">{opt.id}</span>
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] text-[#444] mb-1">Image URL / Path</label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={opt.image}
                                                            onChange={(e) => updateTempWood(opt.id, 'image', e.target.value)}
                                                            className="flex-1 bg-[#111] border border-white/10 rounded px-2 py-1.5 text-xs text-[#EDEDED] focus:border-[#C6A87C] outline-none"
                                                        />
                                                        <button className="bg-white/5 hover:bg-white/10 p-1.5 rounded text-[#EDEDED]">
                                                            <Upload size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-white/5 bg-[#0A0A0A] flex justify-end gap-3 sticky bottom-0">
                            <button
                                onClick={() => setEditingProduct(false)}
                                className="px-4 py-2 text-xs font-medium text-[#888] hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveChanges}
                                className="bg-[#C6A87C] hover:bg-[#B59669] text-black px-4 py-2 rounded text-xs font-medium flex items-center gap-2 transition-colors"
                            >
                                <Save size={14} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div className="w-64 border-r border-white/5 pr-6 hidden md:block">
                <h2 className="text-white font-medium mb-8">Admin Dashboard</h2>
                <div className="space-y-1">
                    <button
                        onClick={() => setActiveView('products')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm ${activeView === 'products' ? 'bg-white/10 text-white' : 'text-[#888] hover:text-white'}`}
                    >
                        <Package size={16} /> Products
                    </button>
                    <button
                        onClick={() => setActiveView('orders')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm ${activeView === 'orders' ? 'bg-white/10 text-white' : 'text-[#888] hover:text-white'}`}
                    >
                        <Users size={16} /> Consultations
                    </button>
                    <button
                        onClick={() => setActiveView('settings')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm ${activeView === 'settings' ? 'bg-white/10 text-white' : 'text-[#888] hover:text-white'}`}
                    >
                        <Settings size={16} /> CMS Settings
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl text-white font-medium capitalize">{activeView} Management</h1>
                    <button className="bg-[#C6A87C] text-black px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2">
                        <Plus size={14} /> Add New
                    </button>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex gap-4">
                        <div className="relative flex-1">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444]" />
                            <input type="text" placeholder="Search..." className="w-full bg-[#111] border border-white/5 rounded-md pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#C6A87C]" />
                        </div>
                    </div>

                    <table className="w-full text-left text-xs">
                        <thead className="bg-[#111] text-[#666] font-medium">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Last Edit</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#A1A1AA]">
                            <tr>
                                <td className="px-6 py-4 text-white">Media Wall System</td>
                                <td className="px-6 py-4"><span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded">Active</span></td>
                                <td className="px-6 py-4">${basePrice.toLocaleString()}</td>
                                <td className="px-6 py-4">Just now</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={startEditing}
                                        className="text-[#C6A87C] hover:underline"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            {/* Static placeholders for other items */}
                            <tr>
                                <td className="px-6 py-4 text-white">Floating Desk</td>
                                <td className="px-6 py-4"><span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded">Active</span></td>
                                <td className="px-6 py-4">$3,200</td>
                                <td className="px-6 py-4">1 day ago</td>
                                <td className="px-6 py-4 text-right"><button className="text-[#C6A87C] hover:underline">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
