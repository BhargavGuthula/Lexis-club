import React, { useState, useEffect } from "react";
import './Home.css';

const Home = () => {
    const text = "Lexis Club, where words meet power.";
    const speed = 100; // Adjust the speed if needed

    const [display, setDisplay] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplay((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeoutId); // Clear timeout if component unmounts
        }
    }, [index, text, speed]);

    return (
        <>
            <div className="landingPage">
                <h1 id="h1Home">Welcome to THE LEXIS CLUB ! </h1>
                <div className="description">
                    <p>{display}</p> {/* Use the state variable `display` here */}
                </div>
            </div>
        </>
    );
};

export default Home;
    