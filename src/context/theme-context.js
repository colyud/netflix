import { createContext, useState, useEffect } from "react";
import { themes } from "../themes";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    const [curTheme, setCurTheme] = useState(themes.data.light);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        if (isDark) {
            setCurTheme(themes.data.dark);
        } else {
            setCurTheme(themes.data.light);
        }
    }, [isDark]);

    return <ThemeContext.Provider value={{ isDark, setIsDark, curTheme, profiles, setProfiles }}>{children}</ThemeContext.Provider>;
};
