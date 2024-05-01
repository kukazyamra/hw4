import React from 'react';
import {useState, useEffect} from "react";


function CountdownTimer() {
    const [countdown, setCountdown] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('hellllllllo')
            setCountdown((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return (prev - 1)
            });
        }, 1000);

        return () => clearInterval(interval)
    }, []);


    return (
        <div>
            <h1>Таймер</h1>
            <p>{countdown}</p>
        </div>
    );
}

export default CountdownTimer;