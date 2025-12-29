import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1483ca]/5 to-transparent" />
                <div className="max-w-5xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1483ca]/10 rounded-full text-[11px] font-medium text-[#1483ca] border border-[#1483ca]/20 mb-6">
                            Our Story
                        </span>
                        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight">
                            About <span className="text-[#1483ca]">Timeless Contracting</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            We are more than just a carpentry and painting business; we are visionaries
                            dedicated to transforming spaces into beautifully functional and aesthetically
                            pleasing environments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-medium text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                Our mission is simple: to enhance the way people experience their spaces.
                                We understand that your home or office is a reflection of who you are, and
                                we strive to bring your vision to life.
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                Whether you are looking to create a cozy nook for family gatherings, a
                                productive workspace, or simply to rejuvenate your home's interior, we are
                                here to help.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop"
                                    alt="Craftsmanship"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-[#1483ca] text-white p-4 rounded-lg shadow-xl">
                                <span className="text-2xl font-bold">10+</span>
                                <span className="text-sm block">Years of Experience</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 border-t border-gray-200 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl font-medium text-gray-900 mb-4">Built on Strong Foundations</h2>
                        <p className="text-gray-500">The values that drive everything we do</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Craftsmanship', desc: 'Every detail matters. We take pride in precision and quality.', icon: Award },
                            { title: 'Creativity', desc: 'Innovative solutions tailored to your unique vision.', icon: Users },
                            { title: 'Commitment', desc: 'Dedicated to exceeding expectations, every time.', icon: Clock },
                        ].map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm"
                            >
                                <div className="w-12 h-12 bg-[#1483ca]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon size={20} className="text-[#1483ca]" />
                                </div>
                                <h3 className="text-gray-900 font-medium mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-500">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer - Link to Services */}
            <section className="py-16 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-medium text-white mb-4">What We Offer</h2>
                                <p className="text-gray-400 mb-6">
                                    From custom media walls and closet systems to professional interior and
                                    cabinet painting, we provide comprehensive solutions for your home.
                                </p>
                                <div className="space-y-3">
                                    {['Interior & Exterior Painting', 'Cabinet Refinishing', 'Custom Carpentry', 'Media Walls & Accent Walls', 'Closet Systems', 'Home Office Solutions'].map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                                            <Check size={14} className="text-[#1483ca]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 bg-[#1483ca] hover:bg-[#106ba3] text-white font-medium px-6 py-3 rounded-md transition-colors"
                                >
                                    View All Services
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 border-t border-gray-200 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-medium text-gray-900 mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Let's discuss how we can bring your vision to life. At Timeless Contracting,
                            your vision is our priority!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/book"
                                className="inline-flex items-center justify-center gap-2 bg-[#1483ca] hover:bg-[#106ba3] text-white font-medium px-6 py-3 rounded-md transition-colors"
                            >
                                Schedule Consultation
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-900 text-gray-900 font-medium px-6 py-3 rounded-md transition-colors"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
