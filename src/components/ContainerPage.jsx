import React from "react";

const ContainerPage = ({ title, subtitle, children, className = "", backgroundColor = "bg-white" }) => {
    return (
        <div className={`min-h-screen ${backgroundColor} p-6 ${className}`}>
            {title && (
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">{title}</h1>
                    {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>}
                </div>
            )}
            <div className="container mx-auto max-w-7xl">{children}</div>
        </div>
    );
};

export default ContainerPage;
