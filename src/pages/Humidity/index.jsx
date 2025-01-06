import React from "react";

export default function Humidity({}) {
    const humidityValue = 13;
    return (
        <div className="grid justify-start items-center relative font-semibold text-white">
            <div className="flex justify-center gap-3 text-xl">
                <h1>{humidityValue}</h1>
                <span className="font-normal">{"\u00b0"}C</span>
            </div>
        </div>
    );
}
