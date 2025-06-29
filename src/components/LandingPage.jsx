import BusinessVertical from "./BusinessVertical";
import MobileMenu from "./MobileMenu";
import services from "../data/services";
import menuItems from "../data/menuItems";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-black relative">
            <div className="hidden lg:flex h-screen">
                {services.map((service) => (
                    <BusinessVertical key={service.id} {...service} className="flex-1" />
                ))}

                <div className="fixed top-8 right-8 z-50">
                    <div className="flex items-center space-x-4 backdrop-blur-md bg-white/10 rounded-2xl px-6 py-3 border border-white/20">
                        {menuItems.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-white text-sm font-semibold hover:text-cyan-400 transition-colors duration-300"
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

                <div className="fixed top-8 right-4 z-50 flex items-center justify-between backdrop-blur-md bg-white/10 rounded-2xl p-2.5 border border-white/20">
                    <MobileMenu />
                </div>
            </div>

            <div className="fixed top-8 left-8 z-50">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl px-6 py-3 border border-white/20">
                    <h1 className="text-2xl font-bold text-white tracking-wider">
                        Group<span className="text-cyan-400">MD</span>
                    </h1>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="backdrop-blur-md bg-white/10 rounded-full px-4 py-2 border border-white/20">
                    <p className="text-white/70 text-xs md:text-sm text-center font-bold">
                        2025 GroupMD. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
