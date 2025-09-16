import { useEffect, useState } from 'react';
import asanxidmet from '../../assets/partners/asanxidmet.jpg'
import avis from '../../assets/partners/avis.png'
import azercell from '../../assets/partners/azercell.png'
import azeraluminium from '../../assets/partners/azeraluminium.png'
import gurtam from '../../assets/partners/gurtam.png'
import azerisiq from '../../assets/partners/azerisiq.png'
import azersun from '../../assets/partners/azersun.png'
import azergold from '../../assets/partners/azergold.png'
import azerpambıq from '../../assets/partners/azerpambıq.png'
import sixt from '../../assets/partners/sixt.png'
import rahattelecom from '../../assets/partners/rahattelecom.png'

const Partners = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const partnersSection = document.getElementById('partners');
        if (partnersSection) {
            observer.observe(partnersSection);
        }

        return () => observer.disconnect();
    }, []);

    const partners = [
        {
            name: "Azercell",
            logo: azercell,
            description: "Leading telecommunications provider"
        },
        {
            name: "Avis",
            logo: avis,
            description: "Leading telecommunications provider"
        },
        {
            name: "Azergold",
            logo: azergold,
            description: "Leading telecommunications provider"
        },
        {
            name: "Azersun",
            logo: azersun,
            description: "Leading telecommunications provider"
        },
        {
            name: "Azerpambıq",
            logo: azerpambıq,
            description: "Leading telecommunications provider"
        },
        {
            name: "Sixt",
            logo: sixt,
            description: "Leading telecommunications provider"
        },
        {
            name: "Gurtam",
            logo: gurtam,
            description: "International investment company"
        },
        {
            name: "Rahat Telecom",
            logo: rahattelecom,
            description: "Global food and beverage leader"
        },
        {
            name: "Azeraluminium",
            logo: azeraluminium,
            description: "Industrial manufacturing excellence"
        },
        {
            name: "TechCorp",
            logo: asanxidmet,
            description: "Technology solutions provider"
        },
        {
            name: "GlobalTech",
            logo: azerisiq,
            description: "International tech services"
        }
    ];

    return (
        <section id="partners" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
                            Trusted Partners
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                        Through reliable partnerships and a professional approach, we achieve success in GPS and geolocation services
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                                }`}
                            style={{
                                animationDelay: `${index * 150}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            {/* Logo Container */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-orange-50 transition-all duration-300">
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                                />

                                {/* Hover overlay */}
                                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                            </div>

                            {/* Partner Name */}
                            {/* <h3 className="mt-2 text-sm font-semibold text-gray-800 text-center group-hover:text-orange-600 transition-colors duration-300">
                                {partner.name}
                            </h3> */}

                            {/* Tooltip on hover */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                                {partner.description}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200/20 rounded-full blur-2xl"></div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
        </section>
    );
};

export default Partners;