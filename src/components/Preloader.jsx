// src/components/Preloader.jsx
import { useState, useEffect } from "react";
import mdGroupLogo from "../assets/logo/md-group-logo.svg";

const Preloader = () => {
    const [logoOpacity, setLogoOpacity] = useState(0.2);
    const [logoScale, setLogoScale] = useState(0.8);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setIsAnimating(true);
            setLogoOpacity(1);
            setLogoScale(1);
        }, 300);

        return () => clearTimeout(startTimer);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-50 via-cyan-100 to-sky-200" />

            <div className="relative z-10 text-center">
                <div
                    className="mb-8 transition-all duration-2000 ease-out"
                    style={{
                        opacity: logoOpacity,
                        transform: `scale(${logoScale})`,
                        filter: `blur(${isAnimating ? 0 : 4}px)`,
                    }}
                >
                    <div className="w-xs md:w-sm">
                        <img className="w-full" src={mdGroupLogo} alt="Grop MD Preloader Svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
