const montserrat = Montserrat({ subsets: ["latin"] });
import { Montserrat } from "next/font/google";

import AuroraBg from "@/components/aurora-bg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "./providers";
import "./globals.css";

export const metadata = {
	title: "ELECTRALAB.ino",
	description:
		"ELECTRALAB is a platform for electronics engineering students and electronics enthusiasts. You can find Arduino projects, Raspberry, Computer Vision and more.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Providers>
					<AuroraBg />
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
