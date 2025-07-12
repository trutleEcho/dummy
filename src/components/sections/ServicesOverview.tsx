'use client';

import { motion } from 'framer-motion';
import { Code, Megaphone, Palette, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
    {
        icon: Code,
        name: 'Custom Software Development',
        description: 'End-to-end software development from concept to deployment.',
        highlights: ['Full-stack Development', 'API Integration', 'Database Design', 'Testing & QA'],
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: Megaphone,
        name: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies to grow your business.',
        highlights: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'],
        color: 'from-green-500 to-green-600',
    },
    {
        icon: Palette,
        name: 'Graphic Design',
        description: 'Creative design solutions that capture your brand essence.',
        highlights: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Assets'],
        color: 'from-purple-500 to-purple-600',
    },
    {
        icon: BarChart3,
        name: 'Analytics & Insights',
        description: 'Data-driven insights to optimize your business performance.',
        highlights: ['Performance Tracking', 'User Analytics', 'Business Intelligence', 'Reporting'],
        color: 'from-orange-500 to-orange-600',
    },
];

export function ServicesOverview() {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Comprehensive
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Digital Services
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From custom software development to digital marketing and design, we provide
                        all the services you need to succeed in the digital landscape.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                                </div>

                                <p className="text-gray-300 mb-6">{service.description}</p>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {service.highlights.map((highlight) => (
                                        <div key={highlight} className="flex items-center text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>

                                <Button variant="outline" className="text-white border-gray-600 hover:bg-white hover:text-gray-900" asChild>
                                    <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}>
                                        Learn More
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href="/services" className="inline-flex items-center space-x-2">
                            <span>View All Services</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}