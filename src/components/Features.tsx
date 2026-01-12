import React from 'react';
import aiSignalIcon from '../assets/images/features/ai-signal.svg';
import rugcheckIcon from '../assets/images/features/rugcheck.svg';
import mevIcon from '../assets/images/features/mev.svg';
import autoSnipeIcon from '../assets/images/features/auto-snipe.svg';
import whaleIcon from '../assets/images/features/whale.svg';
import multiWalletIcon from '../assets/images/features/multi-waller.svg';

export const Features: React.FC = () => {
    const features = [
        {
            icon: <img src={aiSignalIcon} alt="AI Signals" className="w-12 h-12" />,
            title: 'AI Signals + New Launch Sniping',
            description: 'Spot tokens early. AI filters out the trash.'
        },
        {
            icon: <img src={rugcheckIcon} alt="RugCheck Protection" className="w-12 h-12" />,
            title: 'RugCheck Protection + Honeypot Simulation',
            description: 'Trade with confidence — fake pools get blocked.'
        },
        {
            icon: <img src={mevIcon} alt="MEV Shielded" className="w-12 h-12" />,
            title: 'MEV-Shielded Execution',
            description: 'Beat front-runners. You keep your entry.'
        },
        {
            icon: <img src={autoSnipeIcon} alt="Auto-Snipe" className="w-12 h-12" />,
            title: 'Auto-Snipe + Priority Fees',
            description: 'Smarter entries. Faster wins. Zero hesitation.'
        },
        {
            icon: <img src={whaleIcon} alt="Whale Tracking" className="w-12 h-12" />,
            title: 'Whale Tracking & Volume Spikes',
            description: 'Follow the smart money. Catch momentum instantly.'
        },
        {
            icon: <img src={multiWalletIcon} alt="Multi-Wallet" className="w-12 h-12" />,
            title: 'Pro Portfolio + Multi-Wallet',
            description: 'Manage everything like a fund — one dashboard.'
        }
    ];

    return (
        <section className="w-full text-white py-16 md:py-24 relative bg-[#01061A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
                <div className="text-center">
                    {/* Main Title */}
                    <h2 className="text-4xl md:text-[32px] lg:text-[42px] font-bold mb-6 md:mb-8 text-white uppercase">
                        CORE SV TERMINAL FEATURES
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-[17px] text-[#A0A0B0] mb-12 md:my-16 max-w-xl mx-auto text-white font-normal">
                        Built for speed, designed for profit. The only terminal you need to dominate the Solana ecosystem.
                    </p>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 w-full">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-[#1F1F29] rounded-[20px] p-6 md:p-8 transition-colors flex flex-col"
                            >
                                {/* Icon at the top */}
                                <div className="mb-6 flex justify-start">
                                    {feature.icon}
                                </div>
                                {/* Title */}
                                <h3 className="text-base text-left font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                {/* Description */}
                                <p className="text-sm text-[9CA3AF] text-left font-normal">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Launch Terminal Button */}
                    <div className="flex justify-center">
                        <button className="bg-[#00FF88] text-black px-8 py-4 rounded-full font-normal hover:opacity-90 transition-opacity text-sm">
                            Launch Terminal
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
