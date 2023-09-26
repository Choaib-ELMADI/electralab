const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata = {
	title: "ElectraLab",
	description:
		"ElectraLab is a platform for electornics enthusiasts. You can find Arduino projects, Raspberry, Computer Vision and more.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}
