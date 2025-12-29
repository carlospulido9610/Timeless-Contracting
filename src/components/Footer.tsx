import { Instagram, Facebook, Mail } from 'lucide-react';
import timelessLogo from '../assets/timeless_logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="inline-block mb-4">
                        <img src={timelessLogo} alt="Timeless Contracting" className="h-12 w-auto object-contain" />
                    </Link>
                    <p className="text-xs text-gray-500 max-w-sm mb-6 leading-relaxed">
                        Elevating residential spaces through superior craftsmanship and modern design. Serving the greater San Antonio area.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={16} /></a>
                        <a href="#" className="text-gray-400 hover:text-black transition-colors"><Facebook size={16} /></a>
                        <a href="#" className="text-gray-400 hover:text-black transition-colors"><Mail size={16} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-[11px] font-medium text-gray-900 mb-4">Contact</h4>
                    <div className="space-y-3 text-xs text-gray-500">
                        <div className="flex items-start gap-3">
                            <span>510 San Fernando Street<br />San Antonio, TX 78207</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span>(555) 123-4567</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-[11px] font-medium text-gray-900 mb-4">Legal</h4>
                    <ul className="space-y-2 text-xs text-gray-500">
                        <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Warranty</a></li>
                    </ul>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                <p className="text-[10px] text-gray-400">© 2025 Timeless Contracting LLC. All rights reserved.</p>
                <Link to="/admin" className="text-[10px] text-gray-400 hover:text-black">Admin Login</Link>
            </div>
        </footer>
    );
}
