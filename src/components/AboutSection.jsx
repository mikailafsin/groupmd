    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-30"
                >
                    <source src="/placeholder-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
                <div className="animate-fade-in mb-8">
                    <h1 className="mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
                        GroupMD
                    </h1>
                    <p className="text-xl font-light tracking-wide text-gray-300 md:text-2xl">
                        Innovating Across Digital Frontiers
                    </p>
                </div>

                <div className="animate-slide-up mb-12">
                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
                        Empowering businesses through cutting-edge cybersecurity, innovative
                        e-commerce solutions, and stunning portfolio platforms. Your digital
                        transformation starts here.
                    </p>
                </div>

                <button
                    onClick={scrollToServices}
                    size="lg"
                    className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
                >
                    Explore Our Services
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
                <span className="h-8 w-8 text-white/60" />
            </div>

            {/* Floating Elements */}
            <div className="animate-float absolute top-20 left-10 h-20 w-20 rounded-full bg-blue-500/20 blur-xl" />
            <div className="animate-float-delayed absolute top-40 right-20 h-32 w-32 rounded-full bg-purple-500/20 blur-xl" />
            <div className="animate-float-slow absolute bottom-40 left-20 h-24 w-24 rounded-full bg-green-500/20 blur-xl" />
        </section>
    );
}

export default About;
