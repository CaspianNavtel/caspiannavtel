

const CTA = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-700 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32  bg-white/20 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48  bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/ rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Choose the most suitable GPS solution
                    <br />
                    <span className="text-orange-400">for your business</span>
                </h2>

                <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Ready to transform your operations with cutting-edge GPS technology?
                    Our experts are here to help you find the perfect solution.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-orange-500 text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl border-2 border-orange-500 hover:border-orange-400"
                    >
                        Contact Us Today
                    </button>

                    <div className="flex items-center space-x-4 text-blue-100">
                        <div className="w-px h-12 bg-cyan-700 hidden sm:block"></div>
                        <div className="text-center sm:text-left">
                            <div className="font-semibold">Free Consultation</div>
                            <div className="text-sm opacity-80">No commitment required</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;