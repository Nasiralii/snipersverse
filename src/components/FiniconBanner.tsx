import React from 'react';
import titleBg from '../assets/images/title-bg.svg';

export const FiniconBanner: React.FC = () => {
    return (
        <section className="w-full text-white pt-8 md:pt-16 relative bg-[#01061A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative min-h-[200px] md:min-h-[250px]">
                    {/* Background Image */}
                    <img 
                        src={titleBg} 
                        alt="" 
                        className="absolute inset-0 w-full h-full md:object-fill object-cover rounded-[40px]"
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 text-center">
                        {/* Main Message */}
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-white mb-6 md:mb-8 lg:mb-10 max-w-4xl px-2">
                            The only sniper bot where success builds a character that could one day be worth a fortune.
                        </h2>
                        
                        {/* Call to Action Button */}
                        <a
                            href="https://www.snipersverse.com/howItWorks/"
                            className="bg-[#00FF88] text-black px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:opacity-90 transition-opacity"
                        >
                            Explore Finicons
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FiniconBanner;
