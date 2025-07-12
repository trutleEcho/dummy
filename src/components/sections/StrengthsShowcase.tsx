'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Code2, Zap, Shield, Users, Globe, Lightbulb } from 'lucide-react';

const strengths = [
    {
        icon: Code2,
        title: 'Expert Development',
        description: 'Our team of seasoned developers crafts robust, scalable solutions using cutting-edge technologies and best practices.',
        stats: '99.9% Uptime',
    },
    {
        icon: Zap,
        title: 'Lightning Fast Delivery',
        description: 'Agile development methodologies ensure rapid deployment without compromising quality or functionality.',
        stats: '40% Faster',
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.',
        stats: 'ISO Certified',
    },
    {
        icon: Users,
        title: 'Dedicated Support',
        description: '24/7 expert support team ready to assist with any challenges or questions you may have.',
        stats: '< 2hr Response',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Serving clients worldwide with localized solutions and cross-cultural expertise.',
        stats: '50+ Countries',
    },
    {
        icon: Lightbulb,
        title: 'Innovation First',
        description: 'Constantly exploring emerging technologies to provide you with competitive advantages.',
        stats: 'AI Powered',
    },
];

export function StrengthsShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className="relative py-20 bg-gray-50 overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"
                style={{ y: backgroundY }}
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
                        Why Choose
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Corner Softwares
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We combine technical expertise with business acumen to deliver solutions that not only meet
                        your requirements but exceed your expectations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {strengths.map((strength, index) => (
                        <StrengthCard key={strength.title} strength={strength} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StrengthCard({ strength, index }: { strength: typeof strengths[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
        >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <strength.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {strength.stats}
          </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{strength.title}</h3>
                <p className="text-gray-600 leading-relaxed">{strength.description}</p>
            </div>
        </motion.div>
    );
}