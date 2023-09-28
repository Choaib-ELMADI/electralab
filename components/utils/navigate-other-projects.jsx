import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const NavigateToOtherProjects = ({
	props: { next, nextTitle, prev, prevTitle },
}) => {
	return (
		<div className="flex items-center justify-between mb-4 mt-8 w-full max-w-[600px] mx-auto">
			<Link
				href={prev}
				className="flex items-center gap-1 text-small text-secondary whitespace-nowrap"
			>
				<ArrowLeftIcon className="text-text" /> {prevTitle}
			</Link>
			<Link
				href={next}
				className="flex items-center gap-1 text-small text-secondary whitespace-nowrap"
			>
				{nextTitle} <ArrowRightIcon className="text-text" />
			</Link>
		</div>
	);
};

export default NavigateToOtherProjects;
