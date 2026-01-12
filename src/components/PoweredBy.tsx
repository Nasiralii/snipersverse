import React from 'react';
import img1 from '../assets/images/pewerd-by/img1.svg';
import img2 from '../assets/images/pewerd-by/img2.svg';
import img3 from '../assets/images/pewerd-by/img3.svg';
import img4 from '../assets/images/pewerd-by/img4.svg';
import img5 from '../assets/images/pewerd-by/img5.svg';
import img6 from '../assets/images/pewerd-by/img6.svg';
import img7 from '../assets/images/pewerd-by/img7.svg';

export const PoweredBy: React.FC = () => {
    const logos = [
        { src: img1, alt: 'Logo 1' },
        { src: img2, alt: 'Logo 2' },
        { src: img3, alt: 'Logo 3' },
        { src: img4, alt: 'Logo 4' },
        { src: img5, alt: 'Logo 5' },
        { src: img6, alt: 'Logo 6' },
        { src: img7, alt: 'Logo 7' }
    ];

    return (
        <section className="w-full text-white py-16 md:py-24 relative bg-[#01061A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Title */}
                    <h2 className="text-xs text-[#A0A0B0] mb-8 md:mb-12 font-normal">
                        Powered by the best.
                    </h2>

                    {/* Logos */}
                    <div className="flex flex-wrap md:justify-between w-full items-center gap-6 md:gap-8 ">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 md:h-12 w-auto flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PoweredBy;
