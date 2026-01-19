import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const navLinks = [
        { label: 'Home', href: '#' },
        { label: 'Features', href: 'https://www.snipersverse.com/howItWorks/' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Docs', href: 'https://www.snipersverse.com/faq/' },
    ];

    return (
        <header className="w-full text-white sticky top-0 overflow-hidden z-50 bg-[#1A1E20] border-b border-white/10">
            {/* Background Image */}
            
            {/* Radial Icon */}
            <div
                className="absolute top-0 lg:w-[30%] w-[100%] right-0 bottom-0 left-0 pointer-events-none"
                style={{ 
                    zIndex: 9,
                    background: 'linear-gradient(to right, rgba(26, 78, 92, 0), rgba(26, 78, 92, 1), rgba(26, 78, 92, 0))'
                }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center" aria-label="SnipersVerse Home">
                            <img src={logo} alt="SnipersVerse" className="w-[132px] h-[74px]" />
                        </a>
                    </div>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setActiveLink(link.label)}
                                className={`text-white hover:text-white/80 text-sm transition-colors ${
                                    activeLink === link.label ? 'font-bold' : 'font-normal'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://www.snipersverse.com/profile"
                            className="border border-white/20 bg-transparent text-white px-4 py-2 rounded-full text-sm font-normal hover:bg-white/10 transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href="https://www.snipersverse.com/signup"
                            className="bg-[#00FF88] text-black px-4 py-2 rounded-full text-sm font-normal hover:opacity-90 transition-opacity"
                        >
                            Sign Up
                        </a>
                        <a
                            href="https://trade.snipersverse.com/"
                            className="bg-[#00FF88] text-black px-4 py-2 rounded-full text-sm font-normal hover:opacity-90 transition-opacity"
                        >
                            Launch Terminal
                        </a>
                        <a
                            href="https://t.me/SnipersVerseSniperBot"
                            className="bg-[#00FF88] text-black px-4 py-2 rounded-full text-sm font-normal hover:opacity-90 transition-opacity"
                        >
                            Launch Bot
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden pb-4 border-t border-white/10">
                        <div className="flex flex-col gap-4 pt-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.label);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`text-white hover:text-white/80 text-sm transition-colors ${
                                        activeLink === link.label ? 'font-bold' : 'font-normal'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 pt-2">
                                <a
                                    href="https://www.snipersverse.com/profile"
                                    className="border border-white/20 bg-transparent text-white px-4 py-2 rounded-full text-sm font-normal hover:bg-white/10 transition-colors w-full"
                                >
                                    Login
                                </a>
                                <a
                                    href="https://www.snipersverse.com/signup"
                                    className="bg-[#00FF88] text-black px-4 py-2 rounded-full text-sm font-normal hover:opacity-90 transition-opacity w-full"
                                >
                                    Sign Up
                                </a>
                                <a
                                    href="https://trade.snipersverse.com/"
                                    className="bg-[#00FF88] text-black px-4 py-2 rounded-full text-sm font-normal hover:opacity-90 transition-opacity w-full"
                                >
                                    Launch Terminal
                                </a>
                                <a
                                    href="https://t.me/SnipersVerseSniperBot"
                                    className="bg-[#00FF88] text-black px-4 py-2 rounded-full text-sm font-normal hover:opacity-90 transition-opacity w-full"
                                >
                                    Launch Bot
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
