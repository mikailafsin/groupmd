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
            className={`relative overflow-hidden group cursor-pointer ${className}`}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    src={backgroundVideo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity duration-500`}
                />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                <div className="mb-8">
                    <h2
                        className={`text-4xl md:text-5xl text-center lg:text-6xl font-bold text-white tracking-tight transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-white/10  group-hover:rounded-2xl group-hover:px-6 group-hover:py-3 block ${
                            isHovered || isMobile ? "transform -translate-y-4 scale-65" : ""
                        }`}
                    >
                        {title}
                    </h2>
                </div>

                <div
                    className={`transition-all duration-700 ease-out ${
                        isHovered || isMobile
                            ? "opacity-100 transform translate-y-0 max-h-96"
                            : "opacity-0 transform translate-y-32 max-h-0 overflow-hidden"
                    }`}
                >
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-4 border border-white/20 shadow-2xl max-w-md mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-750">
                        <div className="group cursor-pointer">
                            <div className="p-8">
                                <p className="text-gray-200 mb-6 leading-relaxed">{description}</p>

                                <ul className="space-y-2 mb-8">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-sm text-gray-200"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-amber-200 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={handleCTAClick}
                                    className="group/btn w-full relative overflow-hidden bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-4xl px-4 cursor-pointer py-2 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {ctaText}
                                        <svg
                                            className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
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

                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
        </div>
    );
};

export default BusinessVertical;
