"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import { completedProjects } from "@/lib/data";

const CompletedProjectsMenu = () => {
	const [viewProjectsList, setviewProjectsList] = useState(false);

	return (
		<div className="relative">
			<button
				className="bg-gradient-to-r from-pink to-purple text-tiny text-background dark:text-text px-4 py-[2px] rounded-full"
				onClick={() => setviewProjectsList(!viewProjectsList)}
			>
				Projects
			</button>

			{viewProjectsList && (
				<motion.div
					className="absolute top-0 right-0 z-10 bg-hovery backdrop-blur-md border border-hovery rounded-sm py-2 px-3 flex flex-col gap-2"
					variants={{ hidden: { y: "36px" }, visible: { y: "30px" } }}
					initial="hidden"
					animate="visible"
				>
					{completedProjects.map(({ link, title }) => (
						<Link
							href={`/projects/${link}`}
							onClick={() => setviewProjectsList(false)}
							className="group whitespace-nowrap text-tiny relative"
						>
							{title}
							<span className="absolute left-0 -bottom-[2px] bg-gradient-to-r from-purple to-pink rounded-full h-[2px] w-0 group-hover:w-full transition-all" />
						</Link>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default CompletedProjectsMenu;
