"use client";

import { useState, useEffect } from "react";
import { Menu, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import Logo from "./logo";

const SmallNavMenu = ({ links }) => {
	const [viewSmallNavMenu, setViewSmallNavMenu] = useState(false);

	useEffect(() => {
		if (viewSmallNavMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [viewSmallNavMenu]);

	return (
		<div className="flex dm:hidden">
			<button
				onClick={() => setViewSmallNavMenu(!viewSmallNavMenu)}
				className="z-[60]"
			>
				<Menu />
			</button>

			{viewSmallNavMenu && (
				<motion.div
					className="fixed top-0 left-0 w-full h-screen overflow-y-auto custom-scrollbar px-2 md:px-4 dm:px-6 py-[17px] bg-hovery backdrop-blur-md z-50 flex flex-col"
					variants={{ hidden: { y: "-16px" }, visible: { y: "0px" } }}
					initial="hidden"
					animate="visible"
				>
					<Logo />
					<div className="pl-4 flex flex-col gap-2 my-8">
						{links.map((link) => (
							<Link
								href={link.link}
								key={link.label}
								className="text-small tracking-tight text-text opacity-90 hover:opacity-100 hover:text-[#000] dark:hover:text-[#fff] transition-all"
								onClick={() => setViewSmallNavMenu(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
					<Link
						href="mailto:choaib3elmadi@gmail.com"
						className="bg-gradient-to-r from-purple to-pink text-medium text-background dark:text-text px-4 py-[2px] rounded-full whitespace-nowrap mt-auto flex items-center justify-center gap-2"
					>
						<Mail size={24} /> Lets Talk
					</Link>
				</motion.div>
			)}
		</div>
	);
};

export default SmallNavMenu;
