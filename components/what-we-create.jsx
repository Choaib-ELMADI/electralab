import { ArrowRightIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const creates = [
	{
		title: "Concept",
		desc: "Designing and building electronic devices, circuits, and systems that power our modern world.",
		icon: "/concept.png",
	},
	{
		title: "Pexel Perfect",
		desc: "Designing, analysing, and manufacturing mechanical systems and devices.",
		icon: "/perfect.png",
	},
	{
		title: "Innovative",
		desc: "Introducing new ideas, products, or methods that create value and drive progress in society.",
		icon: "/innovative.png",
	},
];

const WhatWeCreate = () => {
	return (
		<div className="w-full max-w-[1200px] mx-auto mt-16 flex flex-col gap-4 mn:flex-row mn:gap-8">
			<div className="w-full">
				<div className="sticky top-4">
					<h1 className="text-large leading-[25px] font-bold bg-gradient-to-r from-green to-purple bg-clip-text text-transparent w-max mb-2">
						Together, <br />
						We Create.
					</h1>
					<Image
						src="/create-banner.png"
						width={700}
						height={240}
						alt="Banner Image"
						draggable="false"
						priority={true}
						className="w-full aspect-[2.5/1] object-cover rounded-sm"
					/>
				</div>
			</div>
			<div className="mx-auto mn:mx-0 w-full max-w-[500px]">
				<p className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent w-max mb-2">
					<b>Now We Work</b>
				</p>
				<div className="flex flex-col gap-4">
					{creates.map(({ title, desc, icon }, i) => (
						<div
							key={i}
							className="group sticky top-4 bg-purple p-2 rounded-sm border border-[#000]"
						>
							<Image
								src={icon}
								alt={title}
								width={70}
								height={70}
								draggable="false"
								className="object-cover grayscale"
							/>
							<h1 className="group-hover:pl-5 relative w-max uppercase mt-2 text-background dark:text-text transition-all">
								{title}
								<span className="absolute top-0 left-0 translate-y-[4px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all text-pink">
									<ArrowRightIcon size={18} />
								</span>
							</h1>
							<p className="text-tiny text-[#b1b1b1]">{desc}</p>
						</div>
					))}
					<div className="group sticky top-4 bg-pink text-background dark:text-text p-2 rounded-sm border border-[#000]">
						<p className="uppercase">Now We Work</p>
						<h1 className="font-bold text-medium mb-6">
							Let&rsquo;s create your next big project together.
						</h1>
						<Link
							href="mailto:choaib3elmadi@gmail.com"
							className="bg-gradient-to-r from-purple to-pink text-small text-background dark:text-text px-4 py-1 rounded-sm whitespace-nowrap flex items-center gap-2"
						>
							<Mail size={20} /> Get In Touch
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeCreate;
