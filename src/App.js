import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoutes";
import DashboardLayout from "./layouts/DashboardLayout";

const AppRoutes = () => {
    const isAuthenticated = true; // Ganti logika autentikasi dengan yang sebenarnya.

    return (
        <Routes>
            {/* Rute Publik */}
            <Route path="/login" element={<Login />} />

            {/* Rute yang Memerlukan Autentikasi */}
            <Route
                path="/"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <DashboardLayout>
                            <Dashboard />
                        </DashboardLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/settings"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <DashboardLayout>
                            <Settings />
                        </DashboardLayout>
                    </ProtectedRoute>
                }
            />

            {/* Rute 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
