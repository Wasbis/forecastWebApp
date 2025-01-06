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
    const [temperature, setTemperature] = useState(20); // Suhu awal (20°C)
    const [barometer, setBarometer] = useState(1013); // Tekanan udara awal (hPa)
    const [altimeter, setAltimeter] = useState(100); // Altimeter awal (meter)
    const [rainfall, setRainfall] = useState(0); // Curah hujan awal (mm)
    const [visibility, setVisibility] = useState(10); // Jarak pandang awal (km)
    const [windDirection, setWindDirection] = useState(180); // Arah angin awal (derajat)
    const [windSpeed, setWindSpeed] = useState(5); // Kecepatan angin awal (km/h)

    useEffect(() => {
        const interval = setInterval(() => {
            setTemperature((prev) => {
                const change = Math.random() * 2 - 1; // Fluktuasi kecil (-1°C hingga +1°C)
                const newTemperature = Math.max(-10, Math.min(50, prev + change)); // Batasan suhu -10°C hingga 50°C
                return parseFloat(newTemperature.toFixed(1));
            });

            setBarometer((prev) => {
                const change = Math.random() * 2 - 1; // Fluktuasi (-1 hPa hingga +1 hPa)
                const newBarometer = Math.max(950, Math.min(1050, prev + change)); // Batasan tekanan udara 950-1050 hPa
                return parseFloat(newBarometer.toFixed(1));
            });

            setAltimeter((prev) => {
                const change = Math.random() * 10 - 5; // Fluktuasi (-5 m hingga +5 m)
                const newAltimeter = Math.max(0, prev + change); // Tidak boleh kurang dari 0
                return parseFloat(newAltimeter.toFixed(1));
            });

            setRainfall((prev) => {
                const change = Math.random() < 0.1 ? Math.random() * 5 : 0; // 10% kemungkinan curah hujan naik
                const newRainfall = Math.max(0, prev + change); // Tidak boleh negatif
                return parseFloat(newRainfall.toFixed(1));
            });

            setVisibility((prev) => {
                const change = Math.random() * 2 - 1; // Fluktuasi (-1 km hingga +1 km)
                const newVisibility = Math.max(0.1, Math.min(50, prev + change)); // Batasan 0.1-50 km
                return parseFloat(newVisibility.toFixed(1));
            });

            setWindDirection(() => {
                // Membuat arah angin baru secara acak dengan cakupan 0-360°
                const newDirection = Math.floor(Math.random() * 360); // Rentang penuh 0-360°
                return newDirection;
            });

            setWindSpeed((prev) => {
                const change = Math.random() * 2 - 1; // Fluktuasi (-1 km/h hingga +1 km/h)
                const newSpeed = Math.max(0, Math.min(150, prev + change)); // Batasan 0-150 km/h
                return parseFloat(newSpeed.toFixed(1));
            });
        }, 2000); // Interval 2 detik

        return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
    }, []);

    return (
        <ContainerPage backgroundColor="bg-[#1e1e1e]" className="space-x-6  ">
            <div className=" flex-1 space-y-6 my-10  w-full">
                <div className="w-full h-[20%] space-y-4">
                    <div className="flex justify-between h-[30%]">
                        <div className="w-1/2 flex">
                            <div className="hover:cursor-pointer hover:scale-110 transition-all duration-300 w-[7.568%] bg-gradient-to-br from-gray-500/40 to-gray-400/90   rounded-full flex justify-center items-center">
                                <IoSettings size={"1.2em"} className="text-white" />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end w-full gap-1">
                            <div className="hover:cursor-pointer hover:scale-110 transition-all duration-300 w-[7.568%] bg-gradient-to-br from-gray-500/40 to-gray-400/90   rounded-full flex justify-center items-center">
                                <IoMdNotifications size={"1.2em"} className="text-white" />
                            </div>
                            <div className="hover:cursor-pointer hover:scale-110 transition-all duration-300 w-[7.568%] bg-gradient-to-br from-gray-500/40 to-gray-400/90   rounded-full flex justify-center items-center">
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
                    </Card>
                    <Card title={"Barometer"}>
                        <div className="p-5 flex justify-center items-center">
                            <Barometer barometerValue={barometer} />
                        </div>
                    </Card>
                    <Card title={"Altimeter"}>
                        <div className="p-3 flex justify-center items-center">
                            <Altimeter altimeterValue={altimeter} />
                            {/* <Wind windSpeedValue={windSpeed} windDirectionValue={windDirection} /> */}
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center w-full gap-6 h-[40%]">
                    <Card title={"Rainfall"} className={"w-[40%]"}>
                        <div className="p-5 flex justify-center items-center">
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
                    <Card
                        className={"  text-white font-semibold text-xl text-center grid justify-center items-center h-full  w-1/2"}
                        title={
                            <div className="text-[0.6rem]  uppercase">
                                Station <span className="text-orange-600">(Time UTC)</span>
                            </div>
                        }
                    >
                        <div className="h-full space-y-2">
                            <div className="text-4xl font-normal">19:20</div>
                            <div className="flex text-sm justify-center gap-1">
                                <div>22</div>
                                <div className="font-normal">Friday</div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        className={"text-white font-semibold text-xl text-center grid justify-center items-center h-full  w-1/2"}
                        title={
                            <div className="text-[0.6rem]  uppercase">
                                Station <span className="text-orange-600">(Time UTC)</span>
                            </div>
                        }
                    >
                        <div className="h-full space-y-2">
                            <div className="text-4xl font-normal">19:20</div>
                            <div className="flex text-sm justify-center gap-1">
                                <div>22</div>
                                <div className="font-normal">Friday</div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex h-[40%] ">
                    <Card title={"windspeed"} className={"p-5 w-full h-full "}>
                        {/* <Altimeter altimeterValue={altimeter} /> */}
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
