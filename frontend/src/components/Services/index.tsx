
import {
    Navigation,
    Map,
    Shield,
    Camera,
    Waves,
    Leaf,
    Cpu,
    Database,
    Globe,
    Landmark,
    Satellite,
    Scan,
    Radar,
    GraduationCap,
    Wrench,
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Navigation className="h-8 w-8" />,
            title: "GPS-Navigation",
            description: "Real-time tracking and monitoring solutions for vehicles, assets, and personnel with 24/7 visibility.",
            link: "#"
        },
        {
            icon: <Map className="h-8 w-8" />,
            title: "Geodesy and Topography Services",
            description: "Comprehensive fleet tracking, route optimization, and driver behavior monitoring systems.",
            link: "#"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Cartography service",
            description: "Advanced boundary monitoring with instant alerts when assets enter or exit designated areas.",
            link: "#"
        },
        {
            icon: <Camera className="h-8 w-8" />,
            title: "Photogrammetry service",
            description: "Seamless integration with IoT devices for enhanced data collection and analysis capabilities.",
            link: "#"
        },
        {
            icon: <Waves className="h-8 w-8" />,
            title: "Bathymetry and navigation service",
            description: "Detailed location-based analytics and reporting for data-driven business decisions.",
            link: "#"
        },
        {
            icon: <Leaf className="h-8 w-8" />,
            title: "Environmental Monitoring / Assessment",
            description: "Employee safety and productivity tracking with emergency response capabilities.",
            link: "#"
        },
        {
            icon: <Cpu className="h-8 w-8" />,
            title: "Smart solutions / Digital twins",
            description: "Interactive dashboards and reports for comprehensive operational insights.",
            link: "#"
        },
        {
            icon: <Database className="h-8 w-8" />,
            title: "Information Technology (IT) services",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        }
        ,
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Geographic Information Systems (GIS)",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        }
        ,
        {
            icon: <Landmark className="h-8 w-8" />,
            title: "Geology-exploration services",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        }
        ,
        {
            icon: <Satellite className="h-8 w-8" />,
            title: "Automonitoring and satellite control system",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        },
        {
            icon: <Scan className="h-8 w-8" />,
            title: "Remote Sensing service",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        },
        {
            icon: <Radar className="h-8 w-8" />,
            title: "LİDAR / Mobile mapping",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        },
        {
            icon: <GraduationCap className="h-8 w-8" />,
            title: "Trainings",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        },
        {
            icon: <Wrench className="h-8 w-8" />,
            title: "Technical Service",
            description: "Tailored GPS and geolocation solutions designed specifically for your business needs.",
            link: "#"
        }

    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive GPS and geolocation solutions designed to transform your business operations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <a
                                href={service.link}
                                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors group-hover:underline"
                            >
                                Read more
                                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;