import React from "react";

import { motion } from "framer-motion";
export default function Altimeter({ altimeterValue }) {
    return (
        <div className="relative w-40 h-40">
            {/* Outer circle with gradient border */}
            <div className="absolute inset-0 rounded-full  shadow-lg overflow-hidden">
                <div className="absolute inset-0 rounded-full border-[16px] border-blue-500/20" />
                <motion.div
                    className="absolute inset-0 rounded-full border-[16px] border-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>

            {/* Value display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                    className="text-3xl font-bold text-white"
                    key={altimeterValue}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    {altimeterValue.toFixed(1)}
                </motion.span>
                <motion.span className="text-sm text-blue-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Meter
                </motion.span>
            </div>
        </div>
    );
}
