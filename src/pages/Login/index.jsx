"use client";

import React from "react";
import { motion } from "framer-motion";

export default function index() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background effects */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-64 bg-black rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            ></motion.div>

            <div className="max-w-md w-full space-y-8 bg-purple-800 bg-opacity-50 p-10 rounded-3xl backdrop-blur-lg relative z-10">
                <div>
                    <motion.div
                        className="mx-auto h-16 w-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center"
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                        </svg>
                    </motion.div>
                    <h2 className="mt-6 text-center text-2xl font-bold text-white">Welcome to Lanud Dashboard</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-purple-300 placeholder-purple-400 text-white bg-purple-700 bg-opacity-50 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-purple-300 placeholder-purple-400 text-white bg-purple-700 bg-opacity-50 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
