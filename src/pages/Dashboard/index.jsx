import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import ContainerPage from "../../components/ContainerPage";
import AnimatedCircle from "../../components/AnimatedCircle";
import Humidity from "../Humidity";

export default function Index() {
    const [temperature, setTemperature] = useState(16); // Skor awal suhu

    useEffect(() => {
        const interval = setInterval(() => {
            setTemperature((prevScore) => {
                const change = Math.random() * 6 - 3; // Fluktuasi antara -3 dan +3
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
        }, 2000); // Interval 2 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <ContainerPage backgroundColor="bg-[#1e1e1e]" className="space-x-6  ">
            <div className=" flex-1 space-y-6 my-10  w-full">
                <div className="w-full h-1/4 space-y-4">
                    <div className="flex justify-between h-[25%]">
                        <div className="w-1/2 flex">
                            <div className="w-[7.568%] bg-red-400  rounded-full flex justify-center items-center">asd</div>
                        </div>
                        <div className="flex-1 flex justify-end w-full gap-1">
                            <div className="w-[7.568%] bg-red-400  rounded-full flex justify-center items-center">asd</div>
                            <div className="w-[7.568%] bg-red-400  rounded-full flex justify-center items-center">asd</div>
                        </div>
                    </div>
                    <div className="text-white ">
                        <h2 className="text-2xl font-semibold">BASEOPS LANUD DHOMBER</h2>
                        <p className="text-lg">Elevasi : 10[m] Lat: -1.15 Lon: 116.44</p>
                    </div>
                    {/* <div className=" text-white h-2/5 flex items-end justify-center">MOBILE METEOROLOGICAL STATION</div> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card title={"Temperature"} className={"p-2"}>
                        <AnimatedCircle temperature={temperature} minTemp={-1} maxTemp={60} size={130} className="w-full h-full" />
                    </Card>
                    <Card title={"Barometer"}>
                        <div className="p-5 w-full ">
                            <Humidity />
                        </div>
                    </Card>
                    <Card title={"Boltek"} />
                </div>
                <div className="flex justify-center w-full gap-6">
                    <Card title={"Barometer"} className={"w-[40%]"}>
                        <AnimatedCircle temperature={temperature} minTemp={-1} maxTemp={60} size={200} className="w-full h-full" />
                    </Card>
                    <Card title={"Barometer"} className={"flex-1"}>
                        <div className="p-5 w-full ">
                            <Humidity />
                        </div>
                    </Card>
                </div>
            </div>
            <div className="w-[20%] space-y-5 my-10">
                <div className="flex space-x-3 h-[20%] ">
                    <Card className={"p-5 w-full"}>asdasd</Card>
                    <Card className={"p-5 w-full"}>asdasd</Card>
                </div>
                <div className="flex space-x-3 h-[40%] ">
                    <Card className={"p-5 w-full"}>asdasd</Card>
                </div>
                <div className="flex space-x-3 h-[30%] ">
                    <Card className={"p-5 w-full"}>asdasd</Card>
                </div>
            </div>
        </ContainerPage>
    );
}
