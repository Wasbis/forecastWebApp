import React from "react";
import { FaCompass } from "react-icons/fa6";
import { LuWaves } from "react-icons/lu";
import DarkCompass from "./DarkCompass";

export default function TestCompo({ windSpeedValue, windDirectionValue }) {
    return (
        <div className="text-white h-full space-y-3 ">
            <div className="flex w-full h-3/4 justify-center items-center">
                <div className="h-[94.35%] w-[65%] rounded-full">
                    <DarkCompass heading={windDirectionValue} />
                </div>
            </div>
            <div className="w-full flex justify-between items-center h-1/4">
                <div className="flex justify-center items-center gap-2 text-lg">
                    <LuWaves size={"10px"} />
                    <div>
                        <h1 className="font-normal text-[10px]">Wind Speed </h1>
                        <div className="flex justify-center items-center text-[10px]">
                            <h1>{windSpeedValue}</h1>
                            <span className="font-normal">Km/h</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 text-lg">
                    <FaCompass size={"10px"} />
                    <div>
                        <h1 className="font-normal text-[10px]">Wind Direction </h1>
                        <div className="flex justify-center items-center text-[10px]">
                            <h1>{parseFloat(windDirectionValue).toFixed(0)}</h1>
                            <span className="font-normal">°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
