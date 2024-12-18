import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Ganti logika registrasi sesuai kebutuhan
        alert("Registration successful!");
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl text-white mb-6 text-center">Register</h2>
                <form onSubmit={handleRegister}>
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

                    <div className="mb-4">
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

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-400 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-400">
                    Already have an account?{" "}
                    <a href="/login" className="text-green-400 hover:text-green-300">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
