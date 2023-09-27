import Services from "@/components/services";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<div className="bg-green h-[1000px]"></div>
		</>
	);
}
