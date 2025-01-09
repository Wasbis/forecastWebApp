import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen relative w-full">
            <div className="absolute z-10 -left-10">
                <Sidebar />
            </div>
            <div className="conten ">
                <main>{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
