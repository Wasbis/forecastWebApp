import React from "react";
import { FaCompass } from "react-icons/fa6";
import { LuWaves } from "react-icons/lu";

export default function Wind({ windSpeedValue, windDirectionValue }) {
    return (
        <div className="text-white h-full space-y-3">
            <div className="flex w-full h-3/4 justify-center items-center">
                <div className="bg-red-100 h-3/4 w-1/3 rounded-full"></div>
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
                            <h1>{windSpeedValue}</h1>
                            <span className="font-normal">Km/h</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // style 1

        // <div className="flex h-full justify-center items-centerrelative font-semibold text-white gap-5">
        //     <div className="bg-red-50/10 h-full w-1/2"></div>
        //     <div className="w-1/2">
        //         <div className="flex justify-center items-center gap-2">
        //             <LuWaves />
        //             <div>
        //                 <h1 className="font-normal text-xs">Wind Speed </h1>
        //                 <div className="flex justify-center items-center ">
        //                     <h1>{windSpeedValue}</h1>
        //                     <span className="font-normal">Km/h</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="flex justify-center items-center gap-2">
        //             <LuWaves />
        //             <div>
        //                 <h1 className="font-normal text-xs">Wind Speed </h1>
        //                 <div className="flex justify-center items-center ">
        //                     <h1>{windSpeedValue}</h1>
        //                     <span className="font-normal">Km/h</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
