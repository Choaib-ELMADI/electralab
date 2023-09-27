import WhatWeCreate from "@/components/what-we-create";
import Services from "@/components/services";
import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<About />
			<WhatWeCreate />
			<div className="h-[1000px]"></div>
		</>
	);
}
