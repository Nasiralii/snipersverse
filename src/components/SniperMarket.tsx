import React from 'react';
import sniper1Icon from '../assets/images/sniper-market/sniper1.svg';
import sniper2Icon from '../assets/images/sniper-market/sniper2.svg';
import sniper3Icon from '../assets/images/sniper-market/sniper3.svg';
import sniper4Icon from '../assets/images/sniper-market/sniper4.svg';
import sniper5Icon from '../assets/images/sniper-market/sniper5.svg';
import sniper6Icon from '../assets/images/sniper-market/sniper6.svg';

export const SniperMarket: React.FC = () => {
    const features = [
        {
            icon: sniper1Icon,
            title: 'AI Trend Predictions',
            description: 'Real-time, in-terminal buy and sell signals powered by live market data — no lag, no noise.'
        },
        {
            icon: sniper2Icon,
            title: 'Top Wallet Copy Trading',
            description: 'Mirror the smartest wallets instantly, directly into your own — faster and more precise than competitors.'
        },
        {
            icon: sniper3Icon,
            title: 'Custom Auto-Strategies',
            description: 'Create rule-based sniper strategies with full control — optimized for speed and execution.'
        },
        {
            icon: sniper4Icon,
            title: 'Pre-Liquidity Detection',
            description: 'Identify tokens before liquidity goes live — enter early, ahead of the crowd.'
        },
        {
            icon: sniper5Icon,
            title: 'Instant Token Insights',
            description: 'Clean, fast token analysis with zero clutter — only the data that matters.'
        },
        {
            icon: sniper6Icon,
            title: 'Multi-Chain Alerts',
            description: 'Live listings and alerts across chains and CEXs — starting with Solana, expanding fast.'
        }
    ];

    return (
        <section className="w-full pt-16 relative bg-[#01061A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    {/* Heading */}
                    <h2 className="text-[40px] font-bold mb-4 md:mb-6 text-white">
                        Why We're Built to Dominate the Sniper Market
                    </h2>
                </div>

                {/* Feature Cards Grid - 2x3 */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-black border border-white rounded-[16px] px-6 flex flex-col gap-4 py-10"
                        >
                            {/* Icon */}
                            <div className="mb-2">
                                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                            </div>
                            {/* Title */}
                            <h3 className="text-[18px] font-bold text-white mb-2 text-left">
                                {feature.title}
                            </h3>
                            {/* Description */}
                            <p className="text-[14px] font-normal text-left" style={{ color: 'rgba(226, 226, 226, 0.93)' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SniperMarket;