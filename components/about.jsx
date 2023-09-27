const awards = [{ title: "No awards yet", date: "-- / -- / --" }];

const About = () => {
	return (
		<div
			className="w-full max-w-[1200px] mx-auto mt-16 flex flex-col gap-4 mn:gap-12 mn:flex-row mn:justify-between"
			id="about"
		>
			<div>
				<h1 className="text-tiny font-bold whitespace-nowrap">
					Why ELECTRALAB
				</h1>
				<h1 className="text-large leading-[25px] font-bold bg-gradient-to-r from-green to-purple bg-clip-text text-transparent w-max">
					Stunning digital <br /> experiences.
				</h1>
			</div>
			<div>
				<h1 className="text-large leading-[25px] font-semibold w-full max-w-[700px] mb-2">
					We create stunning digital experiences that people will love, On all
					platforms.
				</h1>
				<p className="text-tiny text-secondary w-full max-w-[700px] mb-1">
					<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
						<b>Our Arduino projects</b>
					</span>{" "}
					are designed to inspire and educate, providing you with a fun and
					rewarding way to learn electronics and programming.
				</p>
				<p className="text-tiny text-secondary w-full max-w-[700px]">
					<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
						<b>With our collection</b>
					</span>{" "}
					of Arduino projects, you'll be able to build everything from simple
					circuits to complex robots, all while honing your skills and
					unleashing your creativity.
				</p>
				<div className="mt-6 flex flex-col gap-4 w-full max-w-[700px]">
					{awards.map(({ title, date }, i) => (
						<div
							key={i}
							className="flex items-center justify-between border-r border-b border-hovery rounded-br-md px-3 py-1"
						>
							<h4>{title}</h4>
							<h5>{date}</h5>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
