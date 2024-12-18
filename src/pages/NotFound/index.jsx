import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-green-500 mb-4">404</h1>
                <p className="text-2xl mb-4">Page Not Found</p>
                <p className="text-gray-400 mb-6">Sorry, the page you are looking for doesn't exist.</p>
                <Link to="/" className="text-lg bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
