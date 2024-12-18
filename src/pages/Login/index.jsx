import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Ganti logika autentikasi sesuai kebutuhan
        if (username === "admin" && password === "admin") {
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl text-white mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-400 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-400 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-400">
                    Don't have an account?{" "}
                    <a href="/register" className="text-green-400 hover:text-green-300">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
