import React from 'react';
import aiDrivenIcon from '../assets/images/ai-driven.svg';
import rugIcon from '../assets/images/rug.svg';
import fastExecutionIcon from '../assets/images/fast-execution.svg';
import multiWalletIcon from '../assets/images/multi-wallet.svg';
import radialIcon from '../assets/images/radial.svg';
import containerIcon from '../assets/images/Container (10).svg';

export const WhySnipersVerse: React.FC = () => {
    const features = [
        {
            icon: aiDrivenIcon,
            iconColor: 'border-green-500',
            title: 'AI-Driven Alerts',
            description: 'Our proprietary algorithms scan the blockchain 24/7 to identify tokens before they pump.'
        },
        {
            icon: rugIcon,
            iconColor: 'border-blue-500',
            title: 'Rug & Honeypot Protection',
            description: 'Trade with confidence. Our system automatically simulates transactions to detect malicious contract code.'
        },
        {
            icon: fastExecutionIcon,
            iconColor: 'border-yellow-500',
            title: 'Fast Execution + MEV',
            description: 'Beat the bots with our optimized RPC nodes and private transaction layers that protect you from front-running.'
        },
        {
            icon: multiWalletIcon,
            iconColor: 'border-purple-500',
            title: 'Multi-Wallet Tracking',
            description: 'Manage your entire portfolio from one dashboard. Track PnL across multiple wallets seamlessly.'
        }
    ];

    return (
        <section className="w-full text-white pt-16 -mt-1 relative bg-[#01061A] overflow-hidden">
            {/* Radial Background */}
            <img 
                src={radialIcon} 
                alt="" 
                className="absolute top-0 left-0 pointer-events-none"
                style={{ zIndex: 1 }}
            />
            {/* Container Image */}
            <img 
                src={containerIcon} 
                alt="" 
                className="absolute top-[20%] left-0 pointer-events-none"
                style={{ zIndex: 1 }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
                <div className="text-center">
                    {/* Main Title */}
                    <h2 className="text-4xl md:text-[32px] lg:text-[42px] font-medium mb-4 md:mb-6 text-white">
                        Why SnipersVerse?
                    </h2>

                    {/* Tagline */}
                    <p className="text-base md:text-[17px] text-[#A0A0B0] mb-12 md:mb-16 max-w-xl mx-auto font-normal">
                        Built for speed, designed for profit. The only terminal you need to dominate the Solana ecosystem.
                    </p>

                    {/* Feature Cards Grid - 2x2 */}
                    <div className="grid md:grid-cols-2 gap-5 mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}

                                className="bg-white/5 border flex flex-col gap-3 border-white/10 rounded-[16px] p-6 md:p-8 transition-colors flex flex-col h-[257px]"
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <img src={feature.icon} alt={feature.title} />
                                </div>
                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-medium text-white mb-3 text-left">
                                    {feature.title}
                                </h3>
                                {/* Description */}
                                <p className="text-sm text-[#9CA3AF] max-w-[422px] text-left font-normal">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySnipersVerse;
