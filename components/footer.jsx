import { Heart } from "lucide-react";
import Link from "next/link";

import SocialLinks from "./social-links";
import Logo from "./logo";

const Footer = () => {
	return (
		<div className="max-w-[1800px] mx-auto mt-12 py-4 px-2 md:px-4 dm:px-6 flex items-center justify-between relative overflow-hidden">
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
						className="relative bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text after:absolute after:left-0 after:bottom-[1px] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-purple after:to-pink font-semibold whitespace-nowrap"
					>
						Choaib ELMADI
					</Link>
				</p>
			</div>
			<SocialLinks />
			<div className="absolute bottom-0 left-[50%] translate-y-[50%] translate-x-[-50%] w-[90%] max-w-[1200px] h-[80vh] min-h-[400px] bg-gradient-radial from-[rgba(88,63,198,0.2)] from-[5%] to-transparent to-[70%] z-[-1] rounded-[50%]" />
		</div>
	);
};

export default Footer;
