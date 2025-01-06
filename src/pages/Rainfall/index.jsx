import React from "react";

export default function Rainfall({ rainfallValue }) {
    return (
        <div className="grid justify-start items-center relative font-semibold text-white">
            <div className="flex justify-center gap-3 text-5xl">
                <h1>{rainfallValue}</h1>
                <span className="font-normal text-2xl">{"\u00b0"}C</span>
            </div>
        </div>
    );
}
