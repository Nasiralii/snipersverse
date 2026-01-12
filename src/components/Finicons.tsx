import React from 'react';
import falcon1 from '../assets/images/finicons/falcon1.svg';
import falcon2 from '../assets/images/finicons/falcon2.svg';
import falcon3 from '../assets/images/finicons/falcon3.svg';
import falcon4 from '../assets/images/finicons/falcon4.svg';
import tradeToEarnIcon from '../assets/images/finicons/trade-to-earn.svg';
import evolvingIcon from '../assets/images/finicons/evloving.svg';
import privateIcon from '../assets/images/finicons/private.svg';
import leaderboardIcon from '../assets/images/finicons/leaderboard.svg';

export const Finicons: React.FC = () => {
    const finicons = [
        {
            id: '#1330',
            level: '01',
            rarity: 'Legendary',
            status: 'Locked',
            image: falcon1
        },
        {
            id: '#1329',
            level: '02',
            rarity: 'Legendary',
            status: 'Locked',
            image: falcon2
        },
        {
            id: '#1328',
            level: '03',
            rarity: 'Legendary',
            status: 'Locked',
            image: falcon3
        },
        {
            id: '#1327',
            level: '04',
            rarity: 'Legendary',
            status: 'Locked',
            image: falcon4
        }
    ];

    const features = [
        {
            icon: tradeToEarnIcon,
            title: 'Trade-to-Earn Utility',
            isImage: true
        },
        {
            icon: evolvingIcon,
            title: 'Evolving Traits with\nPerformance\nMilestones',
            isImage: true
        },
        {
            icon: privateIcon,
            title: 'Access to Premium\nAlerts & Private\nChannels',
            isImage: true
        },
        {
            icon: leaderboardIcon,
            title: 'Leaderboard +\nTournaments +\nRewards',
            isImage: true
        }
    ];

    return (
        <section className="w-full text-white py-16 md:py-24 relative bg-[#01061A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                        Meet Finicons, Your AI Trading Companions
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-[#A0A0B0] max-w-3xl mx-auto font-normal">
                        SnipersVerse isn't just a sniper bot, it's a new category. Your trades level up your Finicon. Your Finicon levels up your edge.
                    </p>
                </div>

                {/* Finicon Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                    {finicons.map((finicon, index) => (
                        <div
                            key={index}
                            className="border border-[#00E5FF] rounded-[8px] p-4 md:p-6 flex flex-col items-center relative overflow-hidden"
                            style={{
                                background: 'radial-gradient(circle, #00FF88 0%, #0E1E2C)'
                            }}
                        >
                            {/* Character Image */}
                            <div className="w-full h-48 md:h-64 mb-4 flex items-center justify-center">
                                <img 
                                    src={finicon.image} 
                                    alt={`Finicon ${finicon.id}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Finicon Info */}
                            <div className="w-full flex flex-col flex-1">
                                {/* Finicons ID - Centered at top */}
                                <p className="text-sm md:text-base font-bold text-white mb-4 text-center">
                                    Finicons {finicon.id}
                                </p>
                                
                                {/* Level/Legendary on left */}
                               <div className='flex flex-row justify-between items-end'>
                               <div className="flex flex-col mb-auto">
                                    <p className="text-xs md:text-sm font-medium text-[#00FF88] mb-1">
                                        Level {finicon.level}
                                    </p>
                                    <p className="text-xs md:text-sm font-bold text-white">
                                        {finicon.rarity}
                                    </p>
                                </div>
                                
                                {/* Locked at bottom right */}
                                <div className="flex justify-end mt-auto">
                                    <p className="text-xs md:text-sm font-bold text-[#E00A0A]">
                                        {finicon.status}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-transparent border border-white rounded-[16px] p-6 md:p-8 flex flex-col items-center text-center h-full min-h-[200px] md:min-h-0"
                        >
                            {/* Icon */}
                            {feature.isImage ? (
                                <img 
                                    src={feature.icon} 
                                    alt={feature.title}
                                    className="w-12 h-12 md:w-16 md:h-16 mb-4"
                                />
                            ) : (
                                <div className="text-4xl md:text-5xl mb-4">
                                    {feature.icon}
                                </div>
                            )}

                            {/* Text */}
                            <p className="text-[24px] text-white whitespace-pre-line">
                                {feature.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Finicons;
