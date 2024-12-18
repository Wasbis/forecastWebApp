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

        return () => clearInterval(interval); // Bersihkan interval saat komponen dilepas
    }, []);

    return (
        <ContainerPage backgroundColor="bg-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Temperature Card */}
                <div>
                    <Card title={"Temperature"}>
                        <div className="p-5 w-full ">
                            <AnimatedCircle temperature={temperature} minTemp={-1} maxTemp={60} size={250} className="w-full h-full" />
                        </div>
                    </Card>
                </div>
                {/* Barometer Card */}
                <div>
                    <Card title={"Barometer"}>
                        <div className="p-5 w-full ">
                            <Humidity />
                        </div>
                    </Card>
                </div>

                {/* Boltek Card */}
                <div>
                    <Card title={"Boltek"} />
                </div>
            </div>
        </ContainerPage>
    );
}
