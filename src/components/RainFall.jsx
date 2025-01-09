"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function RainfallAnimation({ rainfallValue = 0 }) {
    const [prevRainfallValue, setPrevRainfallValue] = useState(rainfallValue);
    const waveControls = useAnimation();

    // Calculate the height of the water based on the rainfall value
    const waterHeight = Math.min(80, rainfallValue * 2); // Max height is 80%

    useEffect(() => {
        if (rainfallValue > prevRainfallValue) {
            // Trigger wave animation when rainfall increases
            waveControls.start({
                y: [0, -10, 0],
                transition: { duration: 0.5, times: [0, 0.5, 1] },
            });
        }
        setPrevRainfallValue(rainfallValue);
    }, [rainfallValue, prevRainfallValue, waveControls]);

    // Calculate wave intensity based on rainfall value
    const waveIntensity = Math.min(1, rainfallValue / 40); // Normalize to 0-1 range

    return (
        <div className="relative w-30 h-30 bg-white rounded-full shadow-lg overflow-hidden">
            {/* Blue circular border */}
            <div className="absolute inset-0 rounded-full border-[16px] border-blue-500/20" />

            {/* Animated water */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 bg-blue-500"
                initial={{ height: 0 }}
                animate={{ height: `${waterHeight}%` }}
                transition={{ type: "spring", stiffness: 10, damping: 5 }}
            >
                {/* Animated waves */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.3' d='M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,186.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "200% 100%",
                    }}
                    animate={waveControls}
                    initial={{ x: 0 }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            duration: 10 / (1 + waveIntensity), // Speed up as intensity increases
                            ease: "linear",
                        },
                    }}
                />
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,261.3C840,267,960,245,1080,224C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "200% 100%",
                    }}
                    animate={waveControls}
                    initial={{ x: 0 }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            duration: 15 / (1 + waveIntensity), // Speed up as intensity increases
                            ease: "linear",
                        },
                    }}
                />
            </motion.div>

            {/* Rainfall value display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-500">
                <motion.span
                    className="text-4xl font-bold"
                    key={rainfallValue}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    {rainfallValue.toFixed(1)}
                </motion.span>
                <motion.span className="text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    mm
                </motion.span>
            </div>

            {/* Raindrop animations */}
            {[...Array(5)].map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-1 h-3 bg-blue-500 rounded-full"
                    style={{
                        left: `${20 + index * 15}%`,
                        top: "-10%",
                    }}
                    animate={{
                        y: ["0%", "120%"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeIn",
                    }}
                />
            ))}
        </div>
    );
}
