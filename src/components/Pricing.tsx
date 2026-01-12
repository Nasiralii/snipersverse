import React from 'react';
import backgroundSvg from '../assets/images/Background.svg';
import radialIcon from '../assets/images/radial.svg';

export const Pricing: React.FC = () => {
    const freeTierFeatures = [
        'Manual Sniping',
        'AI Rug Scoring',
        'XP Tracking',
        'Invite Link',
        'Basic Snipe Log',
        '0.9% Fee'
    ];

    const foundersTierFeatures = [
        'All Pro+ benefits',
        'Early Feature Access',
        'Finicon Class Unlocks',
        'Trait Staking Beta',
        'OG Bot Badge',
        'Monthly Reroll, Voting Rights',
        'Merch + Drop Priority',
        '0.25% Fee'
    ];

    return (
        <section className="w-full text-white pb-16 relative bg-[#01061A] overflow-hidden">
            {/* Radial Background - bottom left */}
            <img 
                src={radialIcon} 
                alt="" 
                className="absolute bottom-0 left-0 pointer-events-none"
                style={{ zIndex: 1 }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Main Title */}
                    <h2 className="text-4xl md:text-[32px] lg:text-[42px] font-medium mb-4 md:mb-6 text-white">
                        Simple Pricing
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-[17px] text-[#A0A0B0] mb-12 md:mb-16 max-w-xl mx-auto font-normal">
                        Start for free, upgrade for power.
                    </p>

                    {/* Pricing Cards */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
                        {/* Free Tier */}
                        <div className="bg-[#0E1E2C] opacity-50 border border-[#15FFDF] rounded-[16px] p-6 md:p-8 flex flex-col md:w-[482px] h-[481px] items-center relative overflow-hidden">
                            <img 
                                src={backgroundSvg} 
                                alt="" 
                                className="absolute top-0  mx-auto left-0 right-0 top-8 w-full h-auto opacity-100"
                                style={{ width: '284px', height: 'auto' }}
                            />
                            <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center relative z-10">
                                Free Tier
                            </h3>
                            <div className="text-2xl md:text-4xl font-bold text-white mb-6 text-center relative z-10">
                                £0
                            </div>
                            <ul className="flex flex-col gap-3 mb-8 flex-1 items-center relative z-10">
                                {freeTierFeatures.map((feature, index) => (
                                    <li key={index} className="text-sm text-[#D1D5DC] text-center">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#00FF88] text-black px-6 py-3 rounded-[6px] font-bold text-sm md:text-base hover:opacity-90 transition-opacity w-[284px] mt-auto relative z-10">
                                Start Free
                            </button>
                        </div>

                        {/* Founders Tier */}
                        <div className="bg-[#0E1E2C] border border-[#15FFDF] rounded-[16px] p-6 md:p-8 flex flex-col md:w-[482px] h-[481px] items-center relative overflow-hidden">
                            <img 
                                src={backgroundSvg} 
                                alt="" 
                                className="absolute top-0  mx-auto left-0 right-0 top-8 w-full h-auto opacity-100"
                                style={{ width: '284px', height: 'auto' }}
                            />
                            <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center relative z-10">
                                Founders Tier
                            </h3>
                            <div className="text-2xl md:text-4xl font-bold text-white mb-6 text-center relative z-10">
                                £49.99<span className="text-sm">/month</span>
                            </div>
                            <ul className="flex flex-col gap-3 mb-4 flex-1 items-center relative z-10">
                                {foundersTierFeatures.map((feature, index) => (
                                    <li key={index} className="text-sm text-[#D1D5DC] text-center">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#00FF88] text-black px-6 py-3 rounded-[6px] font-bold text-sm md:text-base hover:opacity-90 transition-opacity w-[284px] mt-auto relative z-10">
                                Join Founders Tier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
