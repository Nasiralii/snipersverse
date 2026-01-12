import React, { useState } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import positiveIcon from '../assets/images/positive.svg';
import negativeIcon from '../assets/images/negative.svg';

export const MarketPulse: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Safe / Audited');

    const tabs = ['New Pairs', 'Trending', 'AI Picks', 'Volume Spike', 'Safe / Audited', 'Watchlist'];

    const tokens = [
        {
            name: 'Solana AI',
            ticker: '$SOLAI',
            change: 124.5,
            isPositive: true,
            volume: '$2.4M',
            marketCap: '$12M'
        },
        {
            name: 'Neural Net',
            ticker: '$NEURA',
            change: 45.2,
            isPositive: true,
            volume: '$8.1M',
            marketCap: '$45M'
        },
        {
            name: 'Pepe GPT',
            ticker: '$PGPT',
            change: 12.4,
            isPositive: false,
            volume: '$500K',
            marketCap: '$2.1M'
        },
        {
            name: 'Cyber Doge',
            ticker: '$SCYDOGE',
            change: 230.1,
            isPositive: true,
            volume: '$15M',
            marketCap: '$80M'
        },
        {
            name: 'SafeMoon AI',
            ticker: '$SMAI',
            change: 5.4,
            isPositive: true,
            volume: '$1.2M',
            marketCap: '$8M'
        },
        {
            name: 'Rug Check',
            ticker: '$SRUG',
            change: 5.2,
            isPositive: false,
            volume: '$300K',
            marketCap: '$1.5M'
        },
        {
            name: 'Deep Brain',
            ticker: '$DBRAIN',
            change: 12.8,
            isPositive: true,
            volume: '$4.5M',
            marketCap: '$32M'
        },
        {
            name: 'Quantum Sol',
            ticker: '$QSSOL',
            change: 88.4,
            isPositive: true,
            volume: '$6.2M',
            marketCap: '$28M'
        }
    ];

    return (
        <section 
            className="w-full text-white relative bg-[#01061A]"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
                <div className="text-center">
                    {/* Main Title */}
                    <h2 className="text-4xl md:text-[32px] lg:text-[42px] font-medium mb-4 md:mb-6 text-white">
                        Live Market
                        <br />
                        Pulse
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-[17px] text-[#A0A0B0] mb-8 md:mb-12 max-w-xl mx-auto font-normal">
                        Real-time analysis of top performing tokens on Solana. Our AI filters noise to find the next 100x gem.
                    </p>

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full font-normal text-xs transition-colors ${
                                    activeTab === tab
                                        ? 'bg-white text-black'
                                        : 'bg-transparent text-[#A0A0B0] hover:text-white'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Token Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                        {tokens.map((token, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-[#FFFFFF1A] rounded-[20px] p-4 md:p-6 transition-colors flex flex-col"
                            >
                                {/* Header Section */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#4A0000] text-xs font-bold">$</span>
                                        </div>
                                        {/* Name and Ticker */}
                                        <div className="flex flex-col justify-center gap-2 text-start">
                                            <h3 className="text-base md:text-lg font-medium text-white mb-0.5">
                                                {token.name}
                                            </h3>
                                            <p className="text-xs text-[#9CA3AF]">
                                                {token.ticker}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Right: Percentage */}
                                    <div className={`text-sm md:text-base font-medium flex items-center gap-1 ${token.isPositive ? 'text-[#00FF88]' : 'text-red-500'}`}>
                                        {token.isPositive ? (
                                            <img 
                                                src={positiveIcon} 
                                                alt="positive" 
                                                className="w-4 h-4"
                                              
                                            />
                                        ) : (
                                            <img 
                                                src={negativeIcon} 
                                                alt="negative" 
                                                className="w-4 h-4"
                                            />
                                        )}
                                        {token.change} %
                                    </div>
                                </div>

                                {/* Bar Chart - 8 vertical bars with increasing heights */}
                                <div className="mb-4 h-16">
                                    <ResponsiveContainer width="100%" height={64}>
                                        <BarChart
                                            data={Array.from({ length: 8 }, (_, i) => {
                                                // Progressive increase: each bar gets taller from left to right
                                                const barIndex = i + 1; // 1 to 8
                                                // Scale based on percentage change, with progressive increase
                                                const absChange = Math.abs(token.change);
                                                // Better scaling for visibility - bars should fill more of the chart
                                                const baseScale = Math.min(absChange / 50, 2); // Scale up to 2x for high percentages
                                                // Progressive increase: each bar is taller than the previous
                                                const progress = barIndex / 8; // 0.125, 0.25, ..., 1.0
                                                const height = progress * baseScale * 80; // Higher multiplier for taller bars
                                                return {
                                                    name: `bar-${i}`,
                                                    value: Math.max(10, Math.min(100, height)) // Min 10, max 100
                                                };
                                            })}
                                            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                            barCategoryGap="4px"
                                        >
                                            <Bar
                                                dataKey="value"
                                                fill={token.isPositive ? '#00FF88' : '#ef4444'}
                                                radius={[2, 2, 0, 0]}
                                                barSize={20}
                                                isAnimationActive={false}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Metrics */}
                                <div className="flex justify-between items-center mb-4 border-t border-white/5 pt-4 text-xs text-[#9CA3AF]">
                                    <div className='flex flex-col gap-2 text-start'>
                                        <span>Volume</span>
                                        <div className="text-white font-medium">{token.volume}</div>
                                    </div>
                                    <div className='flex flex-col gap-2 text-start'>
                                        <span>M. Cap</span>
                                        <div className="text-white font-medium">{token.marketCap}</div>
                                    </div>
                                    <div>
                                        </div>
                                </div>

                                {/* Open in Terminal Button */}
                                <button 
                                    className="bg-black/50 text-[#00FF88] px-4 py-2 rounded-[16px] font-medium text-xs md:text-sm hover:bg-[#00FF88]/10 transition-colors w-full"
                                    style={{ border: '1px solid rgba(0, 255, 136, 0.3)' }}
                                >
                                    Open in Terminal
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketPulse;
