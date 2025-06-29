import { useState } from "react";
import menuItems from "../data/menuItems";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-5 w-40 rounded-xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20 py-2 z-50">
                    {menuItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-white hover:text-cyan-400 transition-colors duration-300"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
