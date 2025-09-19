"use client";

import { useEffect, useState } from "react";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeManager = () => {
    const [theme, setTheme] = useState<string>("luxury");

    useEffect(() => {
        const savedTheme =
            document.cookie.replace(
                /(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/,
                "$1"
            ) || "luxury";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "luxury" ? "bumblebee" : "luxury";
        setTheme(newTheme);
        document.cookie = `theme=${newTheme}; max-age=${
            30 * 24 * 60 * 60
        }; path=/`;
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "luxury"}
                onChange={toggleTheme}
            />

            <IoSunnyOutline className="swap-on fill-current" fontSize={30} />
            <IoMoonOutline className="swap-off fill-current" fontSize={30} />
        </label>
    );
};

export default ThemeManager;
