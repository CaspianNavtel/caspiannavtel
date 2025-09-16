import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-gray-50 via-blue-50 to-gray-100 shadow-lg backdrop-blur-sm' : 'bg-transparent backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="" className='w-40' />

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#47b331] transition-colors outline-0">
                            About
                        </button>
                        <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#47b331] transition-colors outline-0">
                            Services
                        </button>
                        <button onClick={() => scrollToSection('equipment')} className="text-gray-700 hover:text-[#47b331] transition-colors outline-0">
                            Equipment
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#47b331] transition-colors outline-0">
                            Contact
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-[#47b331] text-white px-6 py-2 rounded-lg hover:bg-[#188c00] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                        >
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-[#188c00]"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-[#47b331] transition-colors w-full text-left">
                                About
                            </button>
                            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-[#47b331] transition-colors w-full text-left">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('equipment')} className="block px-3 py-2 text-gray-700 hover:text-[#47b331] transition-colors w-full text-left">
                                Equipment
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-[#47b331] transition-colors w-full text-left">
                                Contact
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left bg-[#47b331] text-white px-3 py-2 rounded-lg hover:bg-[#188c00] transition-colors ml-1 my-2"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;