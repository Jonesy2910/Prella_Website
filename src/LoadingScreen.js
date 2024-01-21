import React, { useEffect, useState } from 'react';
import './LoadingScreen.css'; // Import the CSS file for the loading screen styles

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a 5-second loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return isLoading ? (
        <div className="loading-screen">
            <div className="container">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    ) : null;
};

export default LoadingScreen;