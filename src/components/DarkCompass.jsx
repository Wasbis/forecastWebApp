"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DarkCompass({ heading, speed, showLabels = true }) {
    const [displayHeading, setDisplayHeading] = useState(heading);

    useEffect(() => {
        setDisplayHeading(heading);
    }, [heading]);

    const getCardinalDirection = (degrees) => {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index = Math.round(degrees / 45) % 8;
        return directions[index];
    };

    return (
        <div className="relative w-full h-full">
            {/* Dark background with glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-[0_0_40px_rgba(0,0,0,0.6)]" />

            {/* Degree markers */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Create tick marks every 30 degrees */}
                {Array.from({ length: 72 }).map((_, i) => {
                    const angle = i * 5 - 90; // Start from North (-90 degrees)
                    const isMainTick = i % 6 === 0;
                    const isMidTick = i % 3 === 0;
                    const radius = 46;
                    const innerRadius = isMainTick ? 42 : isMidTick ? 43 : 44;

                    const x1 = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y1 = 50 + radius * Math.sin((angle * Math.PI) / 180);
                    const x2 = 50 + innerRadius * Math.cos((angle * Math.PI) / 180);
                    const y2 = 50 + innerRadius * Math.sin((angle * Math.PI) / 180);

                    return (
                        <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={isMainTick ? "#fff" : "#666"}
                            strokeWidth={isMainTick ? "0.5" : "0.25"}
                            opacity={isMainTick ? 1 : isMidTick ? 0.7 : 0.5}
                        />
                    );
                })}

                {/* Degree numbers */}
                {Array.from({ length: 12 }).map((_, i) => {
                    const angle = i * 30 - 90;
                    const radius = 38;
                    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                    return (
                        <text key={i} x={x} y={y} fill="#666" fontSize="4" textAnchor="middle" dominantBaseline="middle">
                            {`${i * 30}°`}
                        </text>
                    );
                })}
            </svg>

            {/* Cardinal directions */}
            {showLabels && (
                <>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500 font-medium text-xs">N</div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-white font-medium text-xs">E</div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white font-medium text-xs">S</div>
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-white font-medium text-xs">W</div>
                </>
            )}

            {/* Inner circle with speed display */}
            <div className="absolute inset-[20%] rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center flex-col text-xs">
                <motion.span
                    key={speed}
                    className=" font-bold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                ></motion.span>
                {getCardinalDirection(displayHeading)}
            </div>

            {/* Rotating orange indicator */}
            <motion.div
                className="absolute inset-0"
                animate={{ rotate: displayHeading }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <motion.div
                    className="absolute w-2 h-2 bg-orange-500 rounded-full"
                    style={{
                        left: "50%",
                        top: "28%",
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        boxShadow: ["0 0 10px rgba(251, 146, 60, 0.5)", "0 0 20px rgba(251, 146, 60, 0.3)", "0 0 10px rgba(251, 146, 60, 0.5)"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
}
