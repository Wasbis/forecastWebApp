import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import ContainerPage from "../../components/ContainerPage";
import AnimatedCircle from "../../components/AnimatedCircle";
import Humidity from "../Humidity";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import people from "../../assets/icon/people.png";
import Barometer from "../Barometer";
import Altimeter from "../Altimeter";
import Visibility from "../Visibility";
import Rainfall from "../Rainfall";
import Wind from "../Wind";

export default function Index() {
    const [temperature, setTemperature] = useState(0);
    const [barometer, setBarometer] = useState(10);
    const [altimeter, setAltimeter] = useState(10);
    const [rainfall, setRainfall] = useState(10);
    const [visibility, setVisibility] = useState(10);
    const [windSpeed, setWindSpeed] = useState(10);
    const [windDirection, setWindDirection] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setTemperature((prevScore) => {
                const change = Math.random() * 6 - 3; // Fluktuasi antara -3 dan +3
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
            setBarometer((prevScore) => {
                const change = Math.random() * 6 - 3;
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
            setAltimeter((prevScore) => {
                const change = Math.random() * 6 - 3; // Fluktuasi antara -3 dan +3
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
            setRainfall((prevScore) => {
                const change = Math.random() * 6 - 3;
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
            setVisibility((prevScore) => {
                const change = Math.random() * 6 - 3;
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
            setWindDirection((prevScore) => {
                const change = Math.random() * 6 - 3;
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
            setWindSpeed((prevScore) => {
                const change = Math.random() * 6 - 3;
                const newScore = Math.max(0, Math.min(40, prevScore + change)); // Batasan 0 - 100
                return parseFloat(newScore.toFixed(1)); // Membulatkan hingga 1 desimal
            });
        }, 2000); // Interval 2 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <ContainerPage backgroundColor="bg-[#1e1e1e]" className="space-x-6  ">
            <div className=" flex-1 space-y-6 my-10  w-full">
                <div className="w-full h-[20%] space-y-4">
                    <div className="flex justify-between h-[25%]">
                        <div className="w-1/2 flex">
                            <div className="hover:cursor-pointer hover:scale-110 transition-all duration-300 w-[8.568%] bg-gradient-to-br from-gray-500/40 to-gray-400/90   rounded-full flex justify-center items-center">
                                <IoSettings size={"1.2em"} className="text-white" />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end w-full gap-1">
                            <div className="hover:cursor-pointer hover:scale-110 transition-all duration-300 w-[8.568%] bg-gradient-to-br from-gray-500/40 to-gray-400/90   rounded-full flex justify-center items-center">
                                <IoMdNotifications size={"1.2em"} className="text-white" />
                            </div>
                            <div className="hover:cursor-pointer hover:scale-110 transition-all duration-300 w-[8.568%] bg-gradient-to-br from-gray-500/40 to-gray-400/90   rounded-full flex justify-center items-center">
                                <img src={people} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-white ">
                        <h2 className="text-2xl font-semibold">BASEOPS LANUD DHOMBER</h2>
                        <p className="text-lg">Elevasi : 10[m] Lat: -1.15 Lon: 116.44</p>
                    </div>
                    {/* <div className=" text-white h-2/5 flex items-end justify-center">MOBILE METEOROLOGICAL STATION</div> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[33%]">
                    <Card title={"Temperature"} className={"p-2"}>
                        <AnimatedCircle temperature={temperature} minTemp={-1} maxTemp={60} size={160} className="w-full h-full" />
                        <Humidity />
                    </Card>
                    <Card title={"Barometer"}>
                        <div className="p-5 w-full ">
                            <Barometer barometerValue={barometer} />
                        </div>
                    </Card>
                    <Card title={"Altimeter"}>
                        <div className="p-5 w-full ">
                            <Altimeter altimeterValue={altimeter} />
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center w-full gap-6 h-[40%]">
                    <Card title={"Rainfall"} className={"w-[40%]"}>
                        <div className="p-5 w-full ">
                            <Rainfall rainfallValue={rainfall} />
                        </div>
                    </Card>
                    <Card title={"Visibility"} className={"flex-1"}>
                        <div className="p-5 w-full ">
                            <Visibility visibilityValue={visibility} />
                        </div>
                    </Card>
                </div>
            </div>
            <div className="w-[20%] space-y-6 my-10 ">
                <div className="flex space-x-3 h-[20%] ">
                    <Card className={"  text-white font-semibold text-xl text-center grid justify-center items-center h-full  w-1/2"}>
                        <div className="h-full space-y-2">
                            <div className="text-[0.6rem]  uppercase">
                                Station <span className="text-orange-600">(Time UTC)</span>
                            </div>
                            <div className="text-4xl font-normal">19:20</div>
                            <div className="flex text-sm justify-center gap-1">
                                <div>22</div>
                                <div className="font-normal">Friday</div>
                            </div>
                        </div>
                    </Card>
                    <Card className={"text-white font-semibold text-xl text-center grid justify-center items-center h-full  w-1/2"}>
                        <div className="h-full space-y-2">
                            <div className="text-[0.6rem]  uppercase">
                                Station <span className="text-orange-600">(Time WITA)</span>
                            </div>
                            <div className="text-4xl font-normal">19:20</div>
                            <div className="flex text-sm justify-center gap-1">
                                <div>22</div>
                                <div className="font-normal">Friday</div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex space-x-3 h-[40%] ">
                    <Card title={"windspeed"} className={"p-5 w-full"}>
                        <Wind windSpeedValue={windSpeed} windDirectionValue={windDirection} />
                    </Card>
                </div>
                <div className="flex space-x-3 h-[33%] ">
                    <Card className={"p-5 w-full flex justify-center items-center text-white font-semibold text-3xl"}>?</Card>
                </div>
            </div>
        </ContainerPage>
    );
}
