import { Mail } from "lucide-react";
import Link from "next/link";

import CompletedProjectsMenu from "./completed-projects-menu";
import SmallNavMenu from "./navmenu-small";
import SwitchTheme from "./switch-theme";

const links = [
	{
		link: "/#services",
		label: "Services",
	},
	{
		link: "/#about",
		label: "About",
	},
	{
		link: "/#work",
		label: "Work",
	},
	{
		link: "/#testimonials",
		label: "Testimonials",
	},
];

const NavMenu = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="hidden dm:flex items-center gap-8">
				{links.map((link) => (
					<Link
						href={link.link}
						key={link.label}
						className="text-tiny tracking-tight text-text opacity-90 hover:opacity-100 hover:text-[#000] dark:hover:text-[#fff] transition-all"
					>
						{link.label}
					</Link>
				))}
			</div>
			<CompletedProjectsMenu />
			<div className="w-[1px] h-[18px] bg-secondary" />
			<Link
				href="mailto:choaib3elmadi@gmail.com"
				className="bg-gradient-to-r from-purple to-pink text-tiny text-background dark:text-text px-4 py-[2px] rounded-full whitespace-nowrap hidden dm:flex items-center gap-2"
			>
				<Mail size={18} /> Lets Talk
			</Link>
			<SwitchTheme />
			<SmallNavMenu links={links} />
		</div>
	);
};

export default NavMenu;
