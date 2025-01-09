import React from "react";

export default function Visibility({ visibilityValue }) {
    return (
        <div className="flex justify-center items-center h-4/5 relative font-semibold text-white">
            <div className=" gap-3 text-5xl ">
                <h1>{visibilityValue}</h1>
                <span className="font-normal text-2xl">Meter</span>
            </div>
        </div>
    );
}
