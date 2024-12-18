import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/Lambang_TNI_AU.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-gray-900 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo / Brand */}
                <Link to="/" className="text-2xl font-bold text-green-500 flex justify-center items-center space-x-4">
                    <img src={logo} className="h-9" alt="" loading="lazy" />
                    <span className="text-md">Military Dashboard</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/dashboard" className="text-white hover:text-green-500 transition duration-300">
                        Dashboard
                    </Link>
                    <Link to="/settings" className="text-white hover:text-green-500 transition duration-300">
                        Settings
                    </Link>
                    <Link to="/about" className="text-white hover:text-green-500 transition duration-300">
                        About
                    </Link>
                    <Link to="/login" className="text-white hover:text-green-500 transition duration-300">
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 p-4 space-y-4">
                    <Link to="/dashboard" className="block text-white hover:text-green-500 transition duration-300">
                        Dashboard
                    </Link>
                    <Link to="/settings" className="block text-white hover:text-green-500 transition duration-300">
                        Settings
                    </Link>
                    <Link to="/about" className="block text-white hover:text-green-500 transition duration-300">
                        About
                    </Link>
                    <Link to="/login" className="block text-white hover:text-green-500 transition duration-300">
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
