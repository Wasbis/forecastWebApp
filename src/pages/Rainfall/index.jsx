import React from "react";
import RainfallAnimation from "../../components/RainfallAnimation";

export default function Rainfall({ rainfallValue }) {
    return (
        <div className="grid justify-start items-center relative font-semibold text-white">
            <div className="flex justify-center gap-3 text-5xl">
                <RainfallAnimation rainfallValue={rainfallValue} />
            </div>
        </div>
    );
}
