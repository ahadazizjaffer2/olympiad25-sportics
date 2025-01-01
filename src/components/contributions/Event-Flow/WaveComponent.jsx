import React from 'react';

const waveImage = "https://res.cloudinary.com/dm1xi8zff/image/upload/v1730032374/waves_oq7m2m.png";

export default function WaveComponent() {
    return (
        <div className="absolute hidden sm:block sm:top-[-2rem] md:top-[-2.9rem] lg:-top-24 -z-10">
            <img src={waveImage} alt="Wave Background" className="w-full h-auto" />
        </div>
    );
}
