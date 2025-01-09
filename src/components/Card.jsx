import React from "react";

// Komponen Card
const Card = ({ title, description, imageUrl, link, footer, className, children }) => {
    return (
        <div
            className={`relative group rounded-2xl overflow-hidden shadow-lg bg bg-white dark:bg-gray-800  backdrop-blur-sm transition-all ease-in-out duration-300 hover:scale-105 hover:cursor-pointer py-4  ${className}`}
        >
            <div className="absolute inset-0 rounded-2xl p-[2px] group-hover:bg-gradient-to-r from-[#CF7401] via-[#A73C84] to-[#CF7401] bg-[length:200%_200%]  opacity-100 ">
                <div className="h-full w-full scale-98 bg-white blur-sm  dark:bg-gray-800 rounded-lg"></div>
            </div>

            <div className="relative z-10 h-full items-center justify-center text-center ">
                {title && <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>}

                <div className="h-full">{children}</div>
            </div>
        </div>
    );
};

export default Card;
