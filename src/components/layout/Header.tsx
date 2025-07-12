'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Code, Smartphone, Globe, Palette, Megaphone, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
    { name: 'Enterprise Suite', href: '/products/enterprise', icon: Code },
    { name: 'Mobile Solutions', href: '/products/mobile', icon: Smartphone },
    { name: 'Web Platforms', href: '/products/web', icon: Globe },
];

const services = [
    { name: 'Custom Software Development', href: '/services/software', icon: Code },
    { name: 'Digital Marketing', href: '/services/marketing', icon: Megaphone },
    { name: 'Graphic Design', href: '/services/design', icon: Palette },
    { name: 'Analytics & Insights', href: '/services/analytics', icon: BarChart3 },
];

export function Header() {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
    <Code className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">Corner Softwares</span>
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-8">
        {/* Products Dropdown */}
        <div
    className="relative"
    onMouseEnter={() => setIsProductsOpen(true)}
    onMouseLeave={() => setIsProductsOpen(false)}
>
    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
        <span>Products</span>
        <ChevronDown className="w-4 h-4" />
        </button>

        <AnimatePresence>
        {isProductsOpen && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
        >
        {products.map((product) => (
                <Link
                    key={product.name}
            href={product.href}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
            <product.icon className="w-5 h-5 text-blue-600" />
            <span className="text-gray-900">{product.name}</span>
                </Link>
))}
    </motion.div>
)}
    </AnimatePresence>
    </div>

    {/* Services Dropdown */}
    <div
        className="relative"
    onMouseEnter={() => setIsServicesOpen(true)}
    onMouseLeave={() => setIsServicesOpen(false)}
>
    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
        <span>Services</span>
        <ChevronDown className="w-4 h-4" />
        </button>

        <AnimatePresence>
        {isServicesOpen && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
        >
        {services.map((service) => (
                <Link
                    key={service.name}
            href={service.href}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
            <service.icon className="w-5 h-5 text-blue-600" />
            <span className="text-gray-900">{service.name}</span>
                </Link>
))}
    </motion.div>
)}
    </AnimatePresence>
    </div>

    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
        About
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
        Contact
        </Link>
        </nav>

    {/* CTA Button */}
    <div className="hidden md:block">
    <Button asChild>
    <Link href="/contact">Get Started</Link>
    </Button>
    </div>

    {/* Mobile Menu Button */}
    <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="md:hidden p-2"
        >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>

    {/* Mobile Menu */}
    <AnimatePresence>
        {isMobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    className="md:hidden border-t border-gray-200 py-4"
    >
    <div className="space-y-4">
    <div>
        <h3 className="font-semibold text-gray-900 mb-2">Products</h3>
    {products.map((product) => (
        <Link
            key={product.name}
        href={product.href}
        className="flex items-center space-x-2 py-2 text-gray-600"
        onClick={() => setIsMobileMenuOpen(false)}
    >
        <product.icon className="w-4 h-4" />
            <span>{product.name}</span>
            </Link>
    ))}
    </div>
    <div>
    <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
    {services.map((service) => (
        <Link
            key={service.name}
        href={service.href}
        className="flex items-center space-x-2 py-2 text-gray-600"
        onClick={() => setIsMobileMenuOpen(false)}
    >
        <service.icon className="w-4 h-4" />
            <span>{service.name}</span>
            </Link>
    ))}
    </div>
    <div className="pt-4 border-t border-gray-200">
    <Button className="w-full" asChild>
    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
    Get Started
    </Link>
    </Button>
    </div>
    </div>
    </motion.div>
)}
    </AnimatePresence>
    </div>
    </header>
);
}