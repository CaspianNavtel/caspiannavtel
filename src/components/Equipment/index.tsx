import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Equipment = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const equipment = [
        {
            name: "Professional GPS Tracker",
            image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "High-precision GPS tracking device with long battery life and weather resistance for reliable asset monitoring."
        },
        {
            name: "Fleet Management System",
            image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Comprehensive dashboard system for real-time fleet monitoring, route optimization, and driver management."
        },
        {
            name: "Drone GPS Module",
            image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Advanced GPS module for unmanned aerial vehicles with precision positioning and autonomous navigation capabilities."
        },
        {
            name: "Satellite Communication Unit",
            image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Rugged satellite communication device for remote area monitoring and emergency response applications."
        },
        {
            name: "Mobile GPS Terminal",
            image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Portable GPS terminal with touch screen interface for field operations and data collection."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % equipment.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + equipment.length) % equipment.length);
    };

    return (
        <section id="equipment" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipment & Technologies</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        State-of-the-art GPS equipment and cutting-edge technologies for every application
                    </p>
                </div>

                <div className="relative">
                    {/* Main slider */}
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {equipment.map((item, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-96 md:h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                                        </div>
                                        <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.name}</h3>
                                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{item.description}</p>
                                            <button className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold w-fit group">
                                                View Technical Details
                                                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {equipment.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-orange-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Equipment;