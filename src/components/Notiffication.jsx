import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Notification = ({ type = "info", message = "", duration = 3000, onClose, className = "" }) => {
    const [isVisible, setIsVisible] = useState(true);

    const notificationTypes = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-black",
        info: "bg-blue-500 text-white",
    };

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose && onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed top-4 right-4 flex items-center px-4 py-3 rounded shadow-lg transition-opacity duration-300 ${notificationTypes[type]} ${className}`}
        >
            <span className="mr-2">
                {type === "success" && "✅"}
                {type === "error" && "❌"}
                {type === "warning" && "⚠️"}
                {type === "info" && "ℹ️"}
            </span>
            <span>{message}</span>
            <button
                onClick={() => {
                    setIsVisible(false);
                    onClose && onClose();
                }}
                className="ml-4 text-lg font-bold text-white focus:outline-none"
            >
                ×
            </button>
        </div>
    );
};

Notification.propTypes = {
    type: PropTypes.oneOf(["success", "error", "warning", "info"]),
    message: PropTypes.string.isRequired,
    duration: PropTypes.number,
    onClose: PropTypes.func,
    className: PropTypes.string,
};

export default Notification;
