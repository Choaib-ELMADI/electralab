const montserrat = Montserrat({ subsets: ["latin"] });
import { Montserrat } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "./providers";
import "./globals.css";

export const metadata = {
	title: "ElectraLab",
	description:
		"ElectraLab is a platform for electronics engineering students and electronics enthusiasts. You can find Arduino projects, Raspberry, Computer Vision and more.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Providers>
					<Navbar />
					<main className="max-w-[1800px] mx-auto px-2 md:px-4 dm:px-6">
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
