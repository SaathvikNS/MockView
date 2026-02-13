"use client";

import { useTheme } from "../ThemeProvider";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			onClick={toggleTheme}
			className="relative h-9 w-9 rounded-full bg-secondary border border-border flex items-center justify-center overflow-hidden transition-colors duration-300 hover:bg-accent/20"
			aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
		>
			<Sun
				className={`h-4 w-4 absolute transition-all duration-500 ${
					isDark
						? "rotate-90 scale-0 opacity-0"
						: "rotate-0 scale-100 opacity-100 text-amber-500"
				}`}
			/>
			<Moon
				className={`h-4 w-4 absolute transition-all duration-500 ${
					isDark
						? "rotate-0 scale-100 opacity-100 text-blue-300"
						: "-rotate-90 scale-0 opacity-0"
				}`}
			/>
		</button>
	);
};

export default ThemeToggle;
