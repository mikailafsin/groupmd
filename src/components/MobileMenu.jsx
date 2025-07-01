// src/components/MobileMenu.jsx
import { useState } from "react";
import menuItems from "../data/menuItems";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 mt-5 w-40 rounded-xl border border-white/20 bg-white/10 py-2 shadow-lg backdrop-blur-md">
                    {menuItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-cyan-400"
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
