import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Corner Softwares - Premium Software Solutions & Digital Services',
    description: 'Leading software company specializing in custom software development, infrastructure solutions, digital marketing, and graphic design services.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}