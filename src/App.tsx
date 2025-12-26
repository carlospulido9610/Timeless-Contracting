import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import AdminPanel from './layers/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteCart from './components/QuoteCart';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <ProductProvider>
            <QuoteProvider>
                <Router>
                    <ScrollToTop />
                    <div className="min-h-screen bg-[#050505] text-[#A1A1AA] font-light selection:bg-[#C6A87C] selection:text-black">
                        <Navbar />
                        <QuoteCart />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/admin" element={<AdminPanel />} />
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </QuoteProvider>
        </ProductProvider>
    );
}

export default App;
