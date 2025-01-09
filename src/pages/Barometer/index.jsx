"use client";

import { motion } from "framer-motion";

export default function Barometer({ barometerValue }) {
    // Convert value to degrees (assuming range 960-1060 mb maps to -120 to 120 degrees)
    const valueToDegrees = (val) => {
        const min = 960;
        const max = 1060;
        return ((val - min) / (max - min)) * 240 - 120;
    };

    return (
        <div className="relative w-[9rem] h-[9rem]">
            {/* Background circle */}
            <div className="absolute inset-0 rounded-full bg-white shadow-lg" />

            {/* Curved scale with numbers */}
            <svg className="absolute inset-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Scale marks and numbers */}
                {Array.from({ length: 9 }).map((_, i) => {
                    const angle = -185 + i * 24; // -120 to 120 degrees
                    const radian = (angle * Math.PI) / 180;
                    const radius = 40; // Radius for the marks
                    const numberRadius = 32; // Radius for the numbers

                    // Calculate positions
                    const x1 = 50 + radius * Math.cos(radian);
                    const y1 = 50 + radius * Math.sin(radian);
                    const x2 = 50 + (radius - 3) * Math.cos(radian);
                    const y2 = 50 + (radius - 3) * Math.sin(radian);
                    const textX = 50 + numberRadius * Math.cos(radian);
                    const textY = 50 + numberRadius * Math.sin(radian);

                    const value = 960 + i * 10;

                    return (
                        <g key={i}>
                            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#CBD5E1" strokeWidth="1" />
                            <text x={textX} y={textY} fill="#64748B" fontSize="4" textAnchor="middle" dominantBaseline="middle">
                                {value}
                            </text>
                        </g>
                    );
                })}

                {/* Blue arc */}
                <path d="M 50,50 m -45,0 a 45,45 0 1,1 90,0" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>

            {/* Animated tapered needle */}
            <motion.div
                className="absolute bottom-1/2 left-[49%]"
                style={{
                    width: "4px",
                    height: "40%",
                    transformOrigin: "bottom center",
                    background: "linear-gradient(to top, #3B82F6 89%, transparent)",
                    clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
                }}
                animate={{
                    rotate: valueToDegrees(barometerValue),
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                }}
            />

            {/* Center pivot */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Value display */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xl font-bold text-blue-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={barometerValue}
            >
                
                {barometerValue}
                <span className="text-sm ml-1">mb</span>
            </motion.div>
        </div>
    );
}
