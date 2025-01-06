"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Compass({ heading = 0, showLabels = true }) {
    const [displayHeading, setDisplayHeading] = useState(heading);

    useEffect(() => {
        setDisplayHeading(heading);
    }, [heading]);

    const getCardinalDirection = (degrees) => {
        const directions = ["North", "North East", "East", "South East", "South", "South West", "West", "North West"];
        const index = Math.round(degrees / 45) % 8;
        return directions[index];
    };

    return (
        <div className="relative w-full h-full">
            {/* Outer circle */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20" />

            {/* Animated blue ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-[6px] border-blue-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Cardinal directions */}
            {showLabels && (
                <>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-medium">N</div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium">E</div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium">S</div>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-sm font-medium">W</div>
                </>
            )}

            {/* Rotating compass pointer (circular) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: displayHeading }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full" />
                </div>
            </motion.div>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {getCardinalDirection(displayHeading)}
                <motion.span
                    className="text-sm text-gray-400"
                    key={`degree-${displayHeading}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {`${displayHeading.toFixed(0)}°`}
                </motion.span>
            </div>
        </div>
    );
}
