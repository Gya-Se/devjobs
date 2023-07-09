import React, { useState, useEffect } from 'react'
import Toggle from "react-styled-toggle";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
    const toggleDarkMode  = (event) => {
        setTheme(colorTheme);
        setDarkSide(event.target.checked);
    };


    return (
        <>
            <Toggle
                backgroundColorChecked={"#fff"}
                backgroundColorUnchecked={"#fff"}
                backgroundColorButton={"#5964E0"}
                sliderWidth={15}
                sliderHeight={15}
                width={35}
                height={22}
                translate={13}
                checked={darkSide}
                onChange={toggleDarkMode}
            />
        </>
    );
}

function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme]
}