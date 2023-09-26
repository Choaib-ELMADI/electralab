"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	const { resolvedTheme } = useTheme();

	return (
		<Link href="/">
			<Image
				src={resolvedTheme === "dark" ? "/logo-white.png" : "/logo-black.png"}
				width={35}
				height={35}
				alt="ElectraLab Logo"
				draggable="false"
			/>
			<h1>ElectraLab</h1>
		</Link>
	);
};

export default Logo;
