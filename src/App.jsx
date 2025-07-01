// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Preloader from "./components/Preloader";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        const preloaderTimer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowMainContent(true);
            }, 300);
        }, 2500);

        return () => clearTimeout(preloaderTimer);
    }, []);

    return (
        <div className="App">
            {isLoading && <Preloader />}
            <div
                className={`transition-all duration-1000 ease-out ${
                    showMainContent
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-95 opacity-0"
                }`}
            >
                <LandingPage />
            </div>
        </div>
    );
}

export default App;
