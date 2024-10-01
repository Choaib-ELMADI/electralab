import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
	{
		title: "Linkedin",
		link: "https://www.linkedin.com/in/choaib-elmadi",
		icon: Linkedin,
	},
	{
		title: "Github",
		link: "https://github.com/Choaib-ELMADI",
		icon: Github,
	},
	{
		title: "Instagram",
		link: "https://instagram.com/choaib_elmadi",
		icon: Instagram,
	},
	{
		title: "Facebook",
		link: "https://www.facebook.com/choaib.ce",
		icon: Facebook,
	},
];

const SocialLinks = ({ styles = "" }) => {
	return (
		<div className={`flex items-center justify-center gap-4 ${styles}`}>
			{socialLinks.map((s, i) => (
				<Link
					href={s.link}
					key={s.title}
					target="_blank"
					className={`${
						i <= 1 ? "hover:text-purple" : "hover:text-pink"
					} transition-all`}
				>
					<s.icon size={24} />
				</Link>
			))}
		</div>
	);
};

export default SocialLinks;
