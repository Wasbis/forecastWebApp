import React from "react";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen overflow-hidden">
            {/* <Navbar /> */}
            <div className="conten ">
                <main>{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
