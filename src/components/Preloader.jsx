import { useState, useEffect } from "react";

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
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />

            <div className="relative z-10 text-center">
                <div
                    className="mb-8 transition-all duration-2000 ease-out"
                    style={{
                        opacity: logoOpacity,
                        transform: `scale(${logoScale})`,
                        filter: `blur(${isAnimating ? 0 : 4}px)`,
                    }}
                >
                    <h1 className="text-4xl font-bold tracking-wider text-white md:text-6xl">
                        Group<span className="text-cyan-400">MD</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
