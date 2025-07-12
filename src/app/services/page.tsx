'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Megaphone, Palette, BarChart3, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
    {
        icon: Code,
        name: 'Custom Software Development',
        description: 'End-to-end software development from concept to deployment with cutting-edge technologies.',
        process: ['Requirements Analysis', 'Architecture Design', 'Development & Testing', 'Deployment & Support'],
        technologies: ['React/Next.js', 'Node.js', 'Python', 'Cloud Platforms', 'Databases', 'APIs'],
        href: '/services/software',
        image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        icon: Megaphone,
        name: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
        process: ['Market Research', 'Strategy Development', 'Campaign Implementation', 'Performance Analysis'],
        technologies: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Email Marketing', 'Analytics', 'PPC'],
        href: '/services/marketing',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        icon: Palette,
        name: 'Graphic Design',
        description: 'Creative design solutions that capture your brand essence and engage your audience.',
        process: ['Brand Discovery', 'Concept Development', 'Design Creation', 'Refinement & Delivery'],
        technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Branding', 'UI/UX', 'Print Design'],
        href: '/services/design',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        icon: BarChart3,
        name: 'Analytics & Insights',
        description: 'Data-driven insights and business intelligence to optimize your performance and growth.',
        process: ['Data Collection', 'Analysis Setup', 'Report Generation', 'Actionable Insights'],
        technologies: ['Google Analytics', 'Data Warehousing', 'BI Tools', 'Custom Dashboards', 'ML/AI', 'Reporting'],
        href: '/services/analytics',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Services
              </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive digital services to transform your business and accelerate your growth
                            in the digital landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Details */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                            >
                                {/* Image */}
                                <div className="flex-1">
                                    <div className="relative">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-96 object-cover rounded-2xl shadow-lg"
                                        />
                                        <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                            <service.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.name}</h3>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                                    {/* Process */}
                                    <div className="mb-8">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {service.process.map((step, stepIndex) => (
                                                <div key={step} className="flex items-center space-x-3">
                                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-sm font-semibold text-blue-600">{stepIndex + 1}</span>
                                                    </div>
                                                    <span className="text-gray-700">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-8">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies & Tools</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                                >
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex space-x-4">
                                        <Button asChild>
                                            <Link href={service.href} className="inline-flex items-center space-x-2">
                                                <span>Learn More</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link href="/contact">Get Quote</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Our Services?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We combine expertise, innovation, and dedication to deliver exceptional results
                            that exceed your expectations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            'Expert Team with 8+ Years Experience',
                            'Agile Development Methodology',
                            '24/7 Support & Maintenance',
                            'Scalable & Future-proof Solutions',
                            'Transparent Communication',
                            'Competitive Pricing',
                        ].map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-3"
                            >
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and see how we can help you achieve your goals
                            with our comprehensive digital services.
                        </p>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                            <Link href="/contact" className="inline-flex items-center space-x-2">
                                <span>Start Your Project</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}