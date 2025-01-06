import React from "react";

export default function Wind({ windSpeedValue, windDirectionValue }) {
    return (
        <div className="grid justify-start items-center relative font-semibold text-white">
            <div className="flex justify-center gap-3 text-5xl">
                <h1>{windSpeedValue}</h1>
                <span className="font-normal text-2xl">{"\u00b0"}C</span>
                <h1>
                    {windDirectionValue}
                    {"\u00b0"}
                </h1>
            </div>
        </div>
    );
}
