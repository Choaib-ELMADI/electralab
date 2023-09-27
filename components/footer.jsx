import { Heart } from "lucide-react";
import Link from "next/link";

import SocialLinks from "./social-links";
import Logo from "./logo";

const Footer = () => {
	return (
		<div className="max-w-[1800px] mx-auto mt-12 py-4 px-2 md:px-4 dm:px-6 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<div className="hidden sm:block">
					<Logo show={false} />
				</div>
				<p className="flex items-center gap-2 text-small text-secondary tracking-tight select-none">
					<span className="items-center gap-1 hidden mn:flex">
						Made with <Heart className="text-red" fill="var(--red)" size={16} />{" "}
						by
					</span>
					<Link
						href="https://elmadichoaib.vercel.app"
						target="_blank"
						className="relative bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text after:absolute after:left-0 after:bottom-[1px] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-purple after:to-pink font-semibold"
					>
						Choaib ELMADI
					</Link>
				</p>
			</div>
			<SocialLinks />
		</div>
	);
};

export default Footer;
