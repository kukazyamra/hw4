import React, {useEffect, useState} from 'react';
import classes from './WindowSize.module.css'

function WindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth, height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className={classes.windowsize}>
            <h1>Размер окна</h1>
            <p><b>Ширина:</b>{windowSize.width}</p>
            <p><b>Высота:</b>{windowSize.height}</p>
        </div>
    );
}

export default WindowSize;