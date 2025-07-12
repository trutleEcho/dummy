'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const products = [
    {
        icon: Code,
        name: 'Enterprise Suite',
        description: 'Comprehensive business management platform with advanced analytics and automation.',
        features: ['Real-time Analytics', 'Workflow Automation', 'Multi-tenant Architecture'],
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
        href: '/products/enterprise',
    },
    {
        icon: Smartphone,
        name: 'Mobile Solutions',
        description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
        features: ['Native Performance', 'Offline Capability', 'Push Notifications'],
        image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
        href: '/products/mobile',
    },
    {
        icon: Globe,
        name: 'Web Platforms',
        description: 'Scalable web applications built with modern frameworks and best practices.',
        features: ['Responsive Design', 'SEO Optimized', 'Progressive Web App'],
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        href: '/products/web',
    },
    {
        icon: Database,
        name: 'Data Solutions',
        description: 'Advanced data processing and analytics platforms for informed decision making.',
        features: ['Big Data Processing', 'Machine Learning', 'Real-time Insights'],
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
        href: '/products/data',
    },
    {
        icon: Cloud,
        name: 'Cloud Infrastructure',
        description: 'Robust cloud solutions for scalability, reliability, and performance.',
        features: ['Auto Scaling', 'Load Balancing', 'Disaster Recovery'],
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
        href: '/products/cloud',
    },
    {
        icon: Shield,
        name: 'Security Suite',
        description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
        features: ['Threat Detection', 'Encryption', 'Compliance Management'],
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
        href: '/products/security',
    },
];

export function ProductsShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
        <section ref={containerRef} className="relative py-20 bg-white overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"
                style={{ y }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Product Suite
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Discover our range of innovative software products designed to streamline operations,
                        enhance productivity, and drive business growth.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/products" className="inline-flex items-center space-x-2">
                            <span>Explore All Products</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <product.icon className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>

                                    <div className="space-y-2 mb-6">
                                        {product.features.map((feature) => (
                                            <div key={feature} className="flex items-center text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors" asChild>
                                        <Link href={product.href}>
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}