import React from 'react';
import titleImage from '../assets/images/title (1).svg';

export const ConnectWallet: React.FC = () => {
    return (
        <section className="w-full text-white py-8 md:py-16 lg:py-24 relative bg-[#01061A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[40px] border border-white overflow-hidden" style={{ minHeight: '250px' }}>
                    {/* Background Image */}
                    <img 
                        src={titleImage} 
                        alt="" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 text-center min-h-[200px] md:min-h-[250px]">
                        <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-normal px-4">
                            Ready to trade smarter?
                        </p>
                        
                        <a
                            href="https://www.snipersverse.com/join/"
                            className="border border-white rounded-full px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-white font-bold text-sm sm:text-base md:text-lg hover:opacity-90 transition-opacity bg-transparent"
                        >
                            Connect Wallet
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectWallet;
