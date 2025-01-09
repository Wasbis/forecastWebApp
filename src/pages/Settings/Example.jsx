import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import { clamp } from "@popmotion/popcorn";

// Custom Hook untuk scroll constraints
function useScrollConstraints(ref) {
    const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

    useEffect(() => {
        const element = ref.current;
        if (element) {
            const viewportHeight = element.offsetHeight;
            const contentHeight = element.firstChild?.offsetHeight || 0;
            setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
        }
    }, []);

    return constraints;
}

const Example = () => {
    const y = useMotionValue(0); // Mengelola nilai scroll menggunakan Framer Motion
    const ref = useRef(null);
    const { top, bottom } = useScrollConstraints(ref);

    // Handle wheel scroll dengan clamping
    const handleWheel = useCallback(
        (event) => {
            event.preventDefault();
            const newY = y.get() - event.deltaY;
            const clampedY = clamp(top, bottom, newY);
            y.stop();
            y.set(clampedY);
        },
        [y, top, bottom]
    );

    return (
        <div className="container" ref={ref} onWheel={handleWheel}>
            <motion.div drag="y" dragConstraints={{ top, bottom }} className="scrollable" style={{ y }}>
                {/* Dynamic Items for Simplicity */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="item" />
                ))}
            </motion.div>
        </div>
    );
};

export default Example;
