// src/components/BusinessVertical.jsx
import { useState } from "react";

const BusinessVertical = ({
    title,
    description,
    ctaText,
    ctaLink,
    backgroundVideo,
    gradient,
    features,
    className,
    isMobile = false,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCTAClick = () => {
        window.open(ctaLink, "_blank");
    };

    return (
        <div
            className={`group relative cursor-pointer overflow-hidden ${className}`}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="absolute inset-0 h-full w-full">
                <video
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    src={backgroundVideo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity duration-500`}
                />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center p-8">
                <div className="mb-8">
                    <h2
                        className={`block text-center text-4xl font-bold tracking-tight text-white transition-all duration-500 group-hover:rounded-2xl group-hover:bg-white/10 group-hover:px-6 group-hover:py-3 group-hover:backdrop-blur-md md:text-5xl lg:text-6xl ${
                            isHovered || isMobile ? "-translate-y-4 scale-65 transform" : ""
                        }`}
                    >
                        {title}
                    </h2>
                </div>

                <div
                    className={`transition-all duration-700 ease-out ${
                        isHovered || isMobile
                            ? "max-h-96 translate-y-0 transform opacity-100"
                            : "max-h-0 translate-y-32 transform overflow-hidden opacity-0"
                    }`}
                >
                    <div
                        className={`mx-auto max-w-md rounded-3xl border border-white/20 bg-white/10 p-4 opacity-0 shadow-2xl backdrop-blur-lg transition-opacity duration-750 ${
                            isHovered || isMobile ? "opacity-100" : "group-hover:opacity-100"
                        }`}
                    >
                        <div className="group cursor-pointer">
                            <div className="p-8">
                                <p className="mb-6 leading-relaxed text-gray-200">{description}</p>

                                <ul className="mb-8 space-y-2">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-sm text-gray-200"
                                        >
                                            <div className="mr-2 h-2 w-2 rounded-full bg-amber-200" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={handleCTAClick}
                                    className="group/btn relative w-full cursor-pointer overflow-hidden rounded-4xl border border-white/30 bg-white/20 px-4 py-2 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-2xl hover:shadow-white/20"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {ctaText}
                                        <svg
                                            className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover/btn:translate-x-full" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>
        </div>
    );
};

export default BusinessVertical;
