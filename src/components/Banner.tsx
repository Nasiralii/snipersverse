import React from 'react';
import bannerBg from '../assets/images/banner-bg.svg';

export const Banner: React.FC = () => {
    return (
        <section
            className="w-full min-h-screen text-white relative overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: `url(${bannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Black overlay at 65% opacity */}
            

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2] py-16 md:py-24">
                <div className="text-center">
                    {/* Main Title */}
                    <h1 className="text-white mb-4 md:mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium leading-tight">
                        <span>The AI Terminal For</span>
                        <br />
                        <span className="text-[#00FF88] font-medium">Solana</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="my-10 text-base sm:text-lg md:text-[20px] max-w-2xl mx-auto px-4" style={{ color: 'rgba(226, 226, 226, 0.86)' }}>
                        Spot the best new tokens, avoid rugs, and execute in seconds
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4">
                        <button className="bg-[#00FF88] text-black px-4 py-2.5 md:px-6 md:py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity text-[14px]">
                            <span>🚀</span>
                            Launch Bot
                        </button>
                        <button className="bg-[#00FF88] text-black px-4 py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:opacity-90 transition-opacity text-[14px]">
                            Launch Terminal
                        </button>
                        <button className="border border-[#00FF88] bg-transparent text-white px-4 py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:bg-[#00FF88]/10 transition-colors text-[14px]">
                            Join Page
                        </button>
                        <button className="bg-[#00FF88] text-black px-4 py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:opacity-90 transition-opacity text-[14px]">
                            Sign Up
                        </button>
                    </div>

                    {/* KPI Cards */}
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
                        {/* Active Snipers */}
                        <div className="bg-white/5 border border-[#FFFFFF1A] rounded-[16px] p-4 max-w-[213.33px] w-full h-[82px] flex items-center justify-center">
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-xl md:text-2xl">👥</span>
                                <div>
                                    <div className="text-xs md:text-sm text-[#A0A0B0]">Active Snipers</div>
                                    <div className="text-xl md:text-2xl font-medium text-[#FFFFFF]">12,405</div>
                                </div>
                            </div>
                        </div>

                        {/* Trades Executed */}
                        <div className="bg-white/5 border border-[#FFFFFF1A] rounded-[16px] p-4 max-w-[213.33px] w-full h-[82px] flex items-center justify-center">
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-xl md:text-2xl">⚡</span>
                                <div>
                                    <div className="text-xs md:text-sm text-[#A0A0B0]">Trades Executed</div>
                                    <div className="text-xl md:text-2xl font-medium text-[#FFFFFF]">$450M+</div>
                                </div>
                            </div>
                        </div>

                        {/* Success Rate */}
                        <div className="bg-white/5 border border-[#FFFFFF1A] rounded-[16px] p-4 max-w-[213.33px] w-full h-[82px] flex items-center justify-center">
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-xl md:text-2xl">📈</span>
                                <div>
                                    <div className="text-xs md:text-sm text-[#A0A0B0]">Success Rate</div>
                                    <div className="text-xl md:text-2xl font-medium text-[#FFFFFF]">94.2%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
