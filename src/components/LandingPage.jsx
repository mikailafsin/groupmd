// src/components/LandingPage.jsx
import BusinessVertical from "./BusinessVertical";
import MobileMenu from "./MobileMenu";
import services from "../data/services";
import menuItems from "../data/menuItems";
import mdGroupLogo from "../assets/logo/md-group-logo.svg";
import AboutSection from "./AboutSection";

const LandingPage = () => {
    return (
        <div className="relative min-h-screen bg-black">
            <div className="hidden h-screen lg:flex">
                {services.map((service) => (
                    <BusinessVertical key={service.id} {...service} className="flex-1" />
                ))}

                <div className="fixed top-8 right-8 z-50">
                    <div className="flex items-center space-x-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
                        {menuItems.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-sm font-semibold text-white transition-colors duration-300 hover:text-cyan-400"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                {services.map((service) => (
                    <BusinessVertical
                        key={service.id}
                        {...service}
                        className="h-screen"
                        isMobile={true}
                    />
                ))}

                <div className="fixed top-8 right-4 z-50 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md">
                    <MobileMenu />
                </div>
            </div>

            <AboutSection />

            <div className="fixed top-8 left-8 z-50">
                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
                    <div className="w-24 md:w-28">
                        <img className="w-full" src={mdGroupLogo} alt="Grop MD Preloader Svg" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform">
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <p className="text-center text-xs font-bold text-white/70 md:text-sm">
                        2025 GroupMD. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
