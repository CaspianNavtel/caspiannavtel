
import { MapPin, Linkedin, Youtube, Twitter, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <MapPin className="h-8 w-8 text-orange-500" />
                            <span className="font-bold text-xl">GeoSolutions</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading provider of innovative GPS and geolocation solutions, transforming businesses
                            through cutting-edge location intelligence technology.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Youtube className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => scrollToSection('hero')}
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('equipment')}
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    Equipment
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">GPS Monitoring</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Fleet Management</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Geofencing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">IoT Integration</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Custom Solutions</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-orange-500" />
                                <span className="text-gray-400">info@geosolutions.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-orange-500" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                                <span className="text-gray-400">
                                    123 Technology Drive<br />
                                    Innovation District<br />
                                    Tech City, TC 12345
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2025 GeoSolutions. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;