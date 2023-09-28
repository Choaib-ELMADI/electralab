import Image from "next/image";
import Link from "next/link";

import { completedProjects } from "@/lib/data";

const SingleWork = ({ project: { image, link, title } }) => {
	return (
		<div className="rounded-lg overflow-hidden sticky top-4 border border-[#000]">
			<Image
				src={image}
				width={1280}
				height={769}
				alt={title}
				draggable="false"
				className="w-full object-cover"
			/>
			<Link
				href={`/projects/${link}`}
				className="absolute left-4 bottom-3 bg-[#fff] text-[#000] text-tiny px-3 py-1 rounded-full border border-[#000] hover:underline"
			>
				{title}
			</Link>
		</div>
	);
};

const Work = () => {
	return (
		<div className="w-full max-w-[1200px] mx-auto mt-16">
			<h1 className="text-large leading-[25px] font-bold bg-gradient-to-r from-green to-purple bg-clip-text text-transparent w-max mb-2">
				Projects <br /> Collection.
			</h1>
			<div className="grid grid-cols-1 gap-4 mn:grid-cols-2" id="work">
				{completedProjects.map((project) => (
					<SingleWork project={project} key={project.title} />
				))}
			</div>
		</div>
	);
};

export default Work;
