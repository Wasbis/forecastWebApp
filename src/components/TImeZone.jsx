import React, { useState, useEffect } from "react";

// Komponen utama
export default function TimeZone({}) {
    const [currentTime, setCurrentTime] = useState(""); // Waktu saat ini
    const [selectedZone, setSelectedZone] = useState("UTC"); // Default zona waktu

    // Daftar zona waktu dengan offsetnya (dalam jam)
    const timeZones = {
        UTC: 0,
        WITA: 8,
        WIB: 7,
        WIT: 9,
    };

    // Fungsi untuk mendapatkan waktu online
    const fetchTimeOnline = async () => {
        try {
            // Menggunakan API publik untuk waktu (worldtimeapi.org)
            const response = await fetch("http://worldtimeapi.org/api/timezone/Etc/UTC");
            const data = await response.json();
            const utcTime = new Date(data.utc_datetime); // Waktu dalam UTC
            setCurrentTime(utcTime);
        } catch (error) {
            console.error("Error fetching time:", error);
        }
    };

    // Konversi waktu berdasarkan zona waktu
    const convertTime = (time, offset) => {
        const localTime = new Date(time.getTime() + offset * 3600 * 1000); // Offset dalam ms
        return localTime.toLocaleString(); // Format ke string lokal
    };

    // Fetch waktu saat komponen pertama kali dirender
    useEffect(() => {
        fetchTimeOnline();
    }, []);

    // Render UI
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Time Zone Converter</h1>
            <p>
                <strong>Current UTC Time:</strong> {currentTime.toLocaleString()}
            </p>

            <label htmlFor="timeZoneSelector">Select Time Zone: </label>
            <select id="timeZoneSelector" value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)}>
                {Object.keys(timeZones).map((zone) => (
                    <option key={zone} value={zone}>
                        {zone}
                    </option>
                ))}
            </select>

            <h2>Time in {selectedZone}:</h2>
            <p>{currentTime ? convertTime(currentTime, timeZones[selectedZone]) : "Loading..."}</p>
        </div>
    );
}
