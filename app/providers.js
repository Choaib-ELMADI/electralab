"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
