import { useState, useEffect } from 'react';

const About = () => {
    const [years, setYears] = useState(0);
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [device, setDevice] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.1 }
        );

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);

        let frameYears = 0;
        let frameClients = 0;
        let frameProjects = 0;
        let frameDevice = 0;

        const yearsIncrement = 20 / totalFrames;
        const clientsIncrement = 350 / totalFrames;
        const projectsIncrement = 200 / totalFrames;
        const deviceIncrement = 8104 / totalFrames;

        const counter = setInterval(() => {
            frameYears++;
            frameClients++;
            frameProjects++;
            frameDevice++;

            setYears(Math.min(Math.round(frameYears * yearsIncrement), 18));
            setClients(Math.min(Math.round(frameClients * clientsIncrement), 348));
            setProjects(Math.min(Math.round(frameProjects * projectsIncrement), 198));
            setDevice(Math.min(Math.round(frameDevice * deviceIncrement), 8104));

            if (frameYears >= totalFrames) {
                clearInterval(counter);
            }
        }, frameRate);
    };

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left side - Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Who we are</h2>
                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                'KaspianNavTel' company was founded in 2007. It is the first local and national company in our country to implement GPS navigation systems, vehicle monitoring, and satellite control systems based on the detailed electronic map of the Republic of Azerbaijan. Our company is a leading technology company offering high-quality solutions in various technology and innovation fields. Starting from the sale and installation of GPS navigation devices, we provide services ranging from satellite, aero, and drone services to geographic information systems (GIS) and geodesy, topography, navigation, and bathymetry works. Additionally, we support the digital transformation of various sectors through smart solutions, digital twins, SCADA systems, and SCADA/GIS integration. We provide advanced solutions in artificial intelligence and machine learning, enhancing our clients' operations through cybersecurity, robotics, and automation for safer and more efficient processes. Our company is also specialized in augmented reality applications, mobile apps, and the creation of information portals. We provide innovative solutions in the production of plastic embossed maps, area models, and marine navigation charts. Alongside geophysics and geological exploration, we offer comprehensive support to our clients with professional training and technical services.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Image/Video */}
                    <div className="relative">
                        <img
                            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Our Team"
                            className="rounded-2xl shadow-xl w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center shadow-xl p-8 border-1 border-indigo-100 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                        <div className="text-5xl font-bold text-blue-600 mb-2">{years}+</div>
                        <div className="text-xl font-semibold text-gray-800 mb-1">Years of Experience</div>
                        <div className="text-gray-600">Leading the GPS technology industry</div>
                    </div>
                    <div className="text-center shadow-xl p-8 border-1 border-red-100 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                        <div className="text-5xl font-bold text-orange-600 mb-2">{clients}+</div>
                        <div className="text-xl font-semibold text-gray-800 mb-1">Satisfied Clients</div>
                        <div className="text-gray-600">Across various industries worldwide</div>
                    </div>
                    <div className="text-center shadow-xl p-8 border-1 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                        <div className="text-5xl font-bold text-green-600 mb-2">{projects}+</div>
                        <div className="text-xl font-semibold text-gray-800 mb-1">Completed Projects</div>
                        <div className="text-gray-600">Successful implementations delivered</div>
                    </div>
                    <div className="text-center shadow-xl p-8 border-1 border-teal-100 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                        <div className="text-5xl font-bold text-teal-600 mb-2">{device}+</div>
                        <div className="text-xl font-semibold text-gray-800 mb-1">Connected Equipment</div>
                        <div className="text-gray-600">Devices seamlessly integrated into our GPS solutions</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;