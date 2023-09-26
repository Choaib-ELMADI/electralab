"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const SwitchTheme = () => {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
		>
			{resolvedTheme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
		</button>
	);
};

export default SwitchTheme;
