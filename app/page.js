import WhatWeCreate from "@/components/what-we-create";
import Testimonials from "@/components/testimonials";
import Services from "@/components/services";
import About from "@/components/about";
import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<About />
			<Work />
			<WhatWeCreate />
			<Testimonials />
		</>
	);
}
