import { Hammer, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#020202] border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-2">
                    <span className="text-[#EDEDED] font-semibold text-sm tracking-tight flex items-center gap-2 mb-4">
                        <div className="w-4 h-4 bg-[#C6A87C] rounded-[1px] flex items-center justify-center text-black">
                            <Hammer size={10} strokeWidth={2} />
                        </div>
                        Timeless Contracting
                    </span>
                    <p className="text-xs text-[#666] max-w-sm mb-6 leading-relaxed">
                        Elevating residential spaces through superior craftsmanship and modern design. Serving the greater San Antonio area.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-[#666] hover:text-[#EDEDED] transition-colors"><Instagram size={16} /></a>
                        <a href="#" className="text-[#666] hover:text-[#EDEDED] transition-colors"><Facebook size={16} /></a>
                        <a href="#" className="text-[#666] hover:text-[#EDEDED] transition-colors"><Mail size={16} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-[11px] font-medium text-[#EDEDED] mb-4">Contact</h4>
                    <div className="space-y-3 text-xs text-[#888]">
                        <div className="flex items-start gap-3">
                            <span>510 San Fernando Street<br />San Antonio, TX 78207</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span>(555) 123-4567</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-[11px] font-medium text-[#EDEDED] mb-4">Legal</h4>
                    <ul className="space-y-2 text-xs text-[#888]">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                    </ul>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                <p className="text-[10px] text-[#333]">© 2025 Timeless Contracting LLC. All rights reserved.</p>
                <Link to="/admin" className="text-[10px] text-[#222] hover:text-[#444]">Admin Login</Link>
            </div>
        </footer>
    );
}
