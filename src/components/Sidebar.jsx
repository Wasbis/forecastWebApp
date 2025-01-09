import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const NavbarItem = ({ link, icon: Icon, isActive }) => {
    return (
        <Link
            to={link}
            className={`relative h-8 w-8 rounded-full flex justify-center items-center transition-all duration-300 transform group-hover:cursor-pointer ${
                isActive
                    ? "bg-blue-500/70 scale-110 shadow-lg ring-2 "
                    : "bg-transparent hover:bg-white hover:ring-2 hover:ring-gray-300 hover:scale-105"
            }`}
        >
            <Icon className={`text-2xl transition-colors duration-300 ${isActive ? "text-white" : "text-white hover:text-gray-400"}`} />
        </Link>
    );
};

export default function DashboardLayout({ children }) {
    const location = useLocation();
    const [isNavbarVisible, setNavbarVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isHovered, setIsHovered] = useState(false); // New state for hover detection

    const routes = [
        { path: "/", icon: FaHome, label: "Home" },
      //   { path: "/profile", icon: FaUser, label: "Profile" },
      //   { path: "/settings", icon: FaCog, label: "Settings" },
        { path: "/notifications", icon: FaBell, label: "Alerts" },
        { path: "/messages", icon: FaEnvelope, label: "Inbox" },
        { path: "/logout", icon: FaSignOutAlt, label: "Logout" },
    ];

    useEffect(() => {
        if (isNavbarVisible && !isHovered) {
            // Only hide navbar when not hovered
            if (timeoutId) clearTimeout(timeoutId);

            const id = setTimeout(() => {
                setNavbarVisible(false);
            }, 20000);
            setTimeoutId(id);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isNavbarVisible, isHovered]); // Add isHovered to the dependency array

    return (
        <div className="h-screen  bg-[#1E1E1E] grid justify-center items-center relative">
            <div className="content h-full my-10 grid">
                <main className="">{children}</main>
            </div>

            <div
                className={`absolute top-1/2 left-10 transform -translate-y-1/2 flex items-center justify-center w-12 h-16 hover:cursor-pointer animate-bounce-left ${
                    isNavbarVisible ? "hidden" : ""
                }`}
                onClick={() => setNavbarVisible(true)}
            >
                <BsArrowRight className="text-white text-xl" />
            </div>

            <div
                className={`absolute flex flex-col justify-center items-center bg-[#2A2A2A]/90 shadow-2xl gap-10 p-5 transition-transform duration-500 rounded-full ${
                    isNavbarVisible ? "translate-x-10" : "-translate-x-full"
                }`}
                style={{
                    backdropFilter: "blur(10px)",
                }}
                onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on hover
                onMouseLeave={() => setIsHovered(false)} // Reset isHovered when hover ends
            >
                {routes.map((route) => (
                    <div key={route.path} className="relative">
                        <NavbarItem link={route.path} icon={route.icon} isActive={location.pathname === route.path} />
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {route.label} {/* Tooltip hint */}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
