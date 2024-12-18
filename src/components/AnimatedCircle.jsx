import React from "react";

const AnimatedCircle = ({ temperature = 0, minTemp = -20, maxTemp = 50, size = 300 }) => {
    // Standarisasi suhu udara
    const standardizedScore = ((temperature - minTemp) / (maxTemp - minTemp)) * 100;

    // Perhitungan lingkaran
    const radius = (size - 45) / 2; // Menghitung radius lingkaran
    const circumference = 2 * Math.PI * radius; // Keliling lingkaran
    const offset = circumference - (standardizedScore / 100) * circumference; // Offset progres lingkaran

    return (
        <div className="flex justify-center items-center relative">
            {/* Outline Lingkaran Luar */}
            <svg className="absolute transform rotate-12 rounded-full border-gray-500/30 border-[4px]" width={size + 10} height={size + 10}></svg>

            {/* SVG untuk Lingkaran Progress */}
            <svg width={size} height={size} className="transform rotate-[145deg]">
                {/* Lingkaran Background */}
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="30" fill="transparent" />
                {/* Lingkaran Progress */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#gradient)" // Menggunakan warna gradasi
                    strokeWidth="30"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{
                        transition: "stroke-dashoffset 0.5s ease-in", // Animasi progres
                    }}
                />
                {/* Definisi Gradien */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E35353" /> {/* Warna awal */}
                        <stop offset="100%" stopColor="#7453E3" /> {/* Warna akhir */}
                    </linearGradient>
                </defs>
            </svg>

            {/* Text di Tengah */}
            <div className="absolute text-center">
                <div className="font-bold text-white" style={{ fontSize: `${size / 8}px` }}>
                    {temperature}
                    {"\u00b0"}C
                </div>
                <div className="font-normal text-white" style={{ fontSize: `${size / 13}px` }}>
                    Progress
                </div>
            </div>
        </div>
    );
};

export default AnimatedCircle;
