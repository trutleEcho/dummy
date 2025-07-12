'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const products = [
    {
        icon: Code,
        name: 'Enterprise Suite',
        description: 'Comprehensive business management platform with advanced analytics, workflow automation, and multi-tenant architecture.',
        features: ['Real-time Analytics', 'Workflow Automation', 'Multi-tenant Architecture', 'Role-based Access', 'API Integration'],
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        href: '/products/enterprise',
        price: 'Starting at $299/month',
    },
    {
        icon: Smartphone,
        name: 'Mobile Solutions',
        description: 'Cross-platform mobile applications that deliver exceptional user experiences with native performance.',
        features: ['Native Performance', 'Offline Capability', 'Push Notifications', 'Cross-platform', 'Real-time Sync'],
        image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
        href: '/products/mobile',
        price: 'Custom Pricing',
    },
    {
        icon: Globe,
        name: 'Web Platforms',
        description: 'Scalable web applications built with modern frameworks, responsive design, and SEO optimization.',
        features: ['Responsive Design', 'SEO Optimized', 'Progressive Web App', 'Modern Frameworks', 'Performance Optimized'],
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        href: '/products/web',
        price: 'Starting at $199/month',
    },
    {
        icon: Database,
        name: 'Data Solutions',
        description: 'Advanced data processing and analytics platforms for informed decision making and business intelligence.',
        features: ['Big Data Processing', 'Machine Learning', 'Real-time Insights', 'Data Visualization', 'Predictive Analytics'],
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
        href: '/products/data',
        price: 'Starting at $499/month',
    },
    {
        icon: Cloud,
        name: 'Cloud Infrastructure',
        description: 'Robust cloud solutions for scalability, reliability, and performance with auto-scaling capabilities.',
        features: ['Auto Scaling', 'Load Balancing', 'Disaster Recovery', 'Global CDN', 'Security Monitoring'],
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        href: '/products/cloud',
        price: 'Pay as you scale',
    },
    {
        icon: Shield,
        name: 'Security Suite',
        description: 'Comprehensive cybersecurity solutions to protect your digital assets with threat detection and compliance.',
        features: ['Threat Detection', 'Encryption', 'Compliance Management', 'Security Auditing', '24/7 Monitoring'],
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        href: '/products/security',
        price: 'Starting at $399/month',
    },
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our Product
                            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                {" "}Suite
              </span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Discover our comprehensive range of software products designed to transform
                            your business operations and drive growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                            <product.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                            <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                                        <div className="grid grid-cols-1 gap-2 mb-8">
                                            {product.features.map((feature) => (
                                                <div key={feature} className="flex items-center text-sm text-gray-600">
                                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex space-x-4">
                                            <Button className="flex-1" asChild>
                                                <Link href={product.href}>
                                                    Learn More
                                                </Link>
                                            </Button>
                                            <Button variant="outline" asChild>
                                                <Link href="/contact">
                                                    Get Quote
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Can&apos;t find exactly what you&apos;re looking for? We specialize in creating
                            custom software solutions tailored to your specific needs.
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link href="/contact" className="inline-flex items-center space-x-2">
                                <span>Discuss Your Project</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}