import React from 'react';
import lineSvg from '../assets/images/line.svg';
import backgroundSvg from '../assets/images/Background.svg';
import walletIcon from '../assets/images/wallet.svg';
import filterIcon from '../assets/images/filter.svg';
import tradeIcon from '../assets/images/finicons/trade-earn.svg';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: walletIcon,
            title: 'Connect Wallet',
            description: 'Link your Phantom or Solflare wallet securely.'
        },
        {
            icon: filterIcon,
            title: 'Filter & Signal',
            description: 'Use AI filters to find safe, high-volume tokens.'
        },
        {
            icon: tradeIcon,
            title: 'Trade & Profit',
            description: 'Execute trades instantly within the terminal.'
        }
    ];

    return (
        <section 
            className="w-full text-white py-8 md:py-16 lg:py-24 relative bg-[#01061A]"
            style={{
                backgroundImage: `url(${backgroundSvg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                        How It Works
                    </h2>
                </div>
            </div>
            <div 
                className="container mx-auto p-4 sm:p-6 sm:py-12 lg:p-8 lg:py-16 relative z-10 border-y border-white/5"
                style={{
                    backgroundColor: 'rgba(20, 20, 25, 0.3)'
                }}
            >
               

                {/* Steps */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center relative">
                                {/* Connecting Line - between steps */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute w-full top-12 left-[60%] right-0 z-0" 
                                         style={{ top: '48px' }}
                                    >
                                        <img 
                                            src={lineSvg} 
                                            alt="" 
                                            className="h-auto"
                                        />
                                    </div>
                                )}
                                
                                {/* Icon Container */}
                                <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden bg-transparent flex items-center justify-center mb-6 relative z-10">
                                    <img src={step.icon} alt={step.title} className="w-12 h-12 md:w-16 md:h-16" />
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-base md:text-lg text-white/80 max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
