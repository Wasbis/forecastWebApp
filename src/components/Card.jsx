import React from "react";

// Komponen Card
const Card = ({ title, description, imageUrl, link, footer, className, children }) => {
    return (
        <div
            className={`relative group rounded-lg overflow-hidden shadow-lg bg bg-white dark:bg-gray-800  backdrop-blur-sm transition-all ease-in-out duration-300 hover:scale-105 hover:cursor-pointer ${className}`}
        >
            {/* Border gradien dengan animasi */}
            <div className="absolute inset-0 rounded-lg p-[2px] group-hover:bg-gradient-to-r from-[#CF7401] via-[#A73C84] to-[#CF7401] bg-[length:200%_200%]  opacity-100 ">
                {/* Lapisan isi untuk menutupi bagian dalam border */}
                <div className="h-full w-full scale-98 bg-white blur-sm  dark:bg-gray-800 rounded-lg"></div>
            </div>

            {/* Konten kartu */}
            <div className="relative z-10 p-4">
                {imageUrl && <img className="w-full h-48 object-cover rounded-t-lg" src={imageUrl} alt={title} />}
                {title && <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>}
                {description && <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>}
                {children}
                {footer && <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-b-lg">{footer}</div>}
                {link && (
                    <a
                        href={link}
                        className="block mt-4 py-2 text-center bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Learn More
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;