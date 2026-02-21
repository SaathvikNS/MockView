"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
	theme: Theme;
	toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window !== "undefined") {
			return (localStorage.getItem("theme") as Theme) || "light";
		}
		return "light";
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () =>
		setTheme((prev) => (prev === "light" ? "dark" : "light"));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
