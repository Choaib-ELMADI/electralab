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
		<div className="w-full max-w-[600px] mx-auto bg-gradient-to-r from-purple to-pink rounded-lg p-[2px] flex items-center justify-center">
			<div className="w-full px-2 py-4 flex flex-col gap-4 items-center text-background dark:text-text bg-gradient-to-r from-pink to-purple rounded-lg">
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
		</div>
	);
};

export default Support;
