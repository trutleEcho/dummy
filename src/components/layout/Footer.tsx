import Link from 'next/link';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">Corner Softwares</span>
                        </div>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Crafting exceptional digital experiences through innovative software solutions,
                            custom development, and comprehensive digital services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Products</h3>
                        <ul className="space-y-3">
                            <li><Link href="/products/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise Suite</Link></li>
                            <li><Link href="/products/mobile" className="text-gray-400 hover:text-white transition-colors">Mobile Solutions</Link></li>
                            <li><Link href="/products/web" className="text-gray-400 hover:text-white transition-colors">Web Platforms</Link></li>
                            <li><Link href="/products/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services/software" className="text-gray-400 hover:text-white transition-colors">Software Development</Link></li>
                            <li><Link href="/services/marketing" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link href="/services/design" className="text-gray-400 hover:text-white transition-colors">Graphic Design</Link></li>
                            <li><Link href="/services/analytics" className="text-gray-400 hover:text-white transition-colors">Analytics & Insights</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>hello@cornersoftwares.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-4 h-4 mt-0.5" />
                                <span>123 Tech Street<br />Innovation City, IC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Corner Softwares. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}