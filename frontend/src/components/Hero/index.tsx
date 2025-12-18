import gps from "../../assets/images/hero.png"

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 pt-16 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Innovative
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bbe] to-[#188c00]"> GPS</span> and
                            <br />
                            <span className="text-orange-500">Geolocation</span> Solutions
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                            Transform your business with cutting-edge GPS technology. From fleet management to precision tracking,
                            we deliver solutions that drive efficiency and growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="bg-[#47b331] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#188c00] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                View Services
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="border-2 border-[#007bbe] text-[#007bbe] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007bbe] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Right side - Tech Illustration */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src={gps}
                                alt="GPS Technology"
                                className="rounded-2xl w-full object-cover"
                            />

                        </div>
                        {/* Background elements */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-2xl blur-3xl transform rotate-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;