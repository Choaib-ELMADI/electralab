import { Coffee, Instagram, PartyPopperIcon } from "lucide-react";
import Link from "next/link";

const support = [
	{
		name: "Bye Me Coffe",
		icon: Coffee,
		link: "https://www.buymeacoffee.com/choaib.elmadi",
	},
	{
		name: "Patreon",
		icon: PartyPopperIcon,
		link: "https://www.patreon.com/user?u=81408575",
	},
	{
		name: "Instagram",
		icon: Instagram,
		link: "https://www.instagram.com/choaib_elmadi",
	},
];

const Support = () => {
	return (
		<div className="w-full max-w-[600px] mx-auto px-2 py-4 flex flex-col gap-4 items-center text-background dark:text-text bg-gradient-to-r from-pink to-purple rounded-lg relative after:absolute after:inset-[-2px] after:bg-gradient-to-r after:from-purple after:to-pink after:z-[-1] after:rounded-lg">
			<h1 className="text-medium text-center">Thanks For Supporting Us</h1>
			<div className="flex gap-4 items-center">
				{support.map((s) => (
					<Link
						key={s.name}
						href={s.link}
						target="_blank"
						className="hover:text-[#000] transition-all"
					>
						<s.icon size={24} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Support;
