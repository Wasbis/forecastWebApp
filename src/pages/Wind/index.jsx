import React from "react";
import { FaCompass } from "react-icons/fa6";
import { LuWaves } from "react-icons/lu";
import Compass from "../../components/Compass";

export default function Wind({ windSpeedValue, windDirectionValue }) {
    return (
        <div className="text-white h-full space-y-3">
            <div className="flex w-full h-3/4 justify-center items-center">
                <div className="h-[94.35%] w-[55%] rounded-full">
                    <Compass heading={windDirectionValue} />
                </div>
            </div>
            <div className="w-full flex justify-between items-center h-1/4">
                <div className="flex justify-center items-center gap-2 text-lg">
                    <LuWaves />
                    <div>
                        <h1 className="font-normal text-xs">Wind Speed </h1>
                        <div className="flex justify-center items-center ">
                            <h1>{windSpeedValue}</h1>
                            <span className="font-normal">Km/h</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 text-lg">
                    <FaCompass />
                    <div>
                        <h1 className="font-normal text-xs">Wind Direction </h1>
                        <div className="flex justify-center items-center ">
                            <h1>{parseFloat(windDirectionValue).toFixed(0)}</h1>
                            <span className="font-normal">°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
