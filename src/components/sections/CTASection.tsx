'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Let&apos;s discuss how Corner Softwares can help you achieve your digital goals.
                        Our experts are ready to provide customized solutions for your unique needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4" asChild>
                            <Link href="/contact" className="inline-flex items-center space-x-2">
                                <span>Get Started Today</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>

                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4" asChild>
                            <Link href="/consultation" className="inline-flex items-center space-x-2">
                                <MessageCircle className="w-5 h-5" />
                                <span>Free Consultation</span>
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}