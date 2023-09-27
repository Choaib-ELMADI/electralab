import {
	TerminalSquare,
	CircuitBoard,
	ShieldCheck,
	TabletSmartphone,
} from "lucide-react";

const services = [
	{
		icon: TerminalSquare,
		title: "Coding",
		description: "Write code to control the whole process of the project.",
	},
	{
		icon: CircuitBoard,
		title: "Electronics",
		description: "Provide all needed electronics and sensors.",
	},
	{
		icon: ShieldCheck,
		title: "Project Testing",
		description: "Test the project and make sure its working properly.",
	},
	{
		icon: TabletSmartphone,
		title: "Project App",
		description: "Build a website for the project to share with friends.",
	},
];

const Services = () => {
	return (
		<div
			className="w-full max-w-[1200px] mx-auto mt-16 grid gap-4 grid-cols-1 mn:grid-cols-2"
			id="services"
		>
			<div>
				<div className="w-full max-w-[500px] sticky top-4">
					<h1 className="text-tiny font-bold">Our Services</h1>
					<h1 className="text-large leading-[25px] font-bold bg-gradient-to-r from-green to-purple bg-clip-text text-transparent w-max">
						Your Next <br />
						Innovation.
					</h1>
					<p className="text-tiny text-secondary">
						Innovation drives progress by transforming ideas into reality
						through creativity and experimentation.
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				{services.map((service, i) => (
					<div
						className="bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.4)] backdrop-blur-lg border border-hovery rounded-sm py-2 px-3 w-full sticky top-4"
						key={`service-${i + 1}`}
					>
						<service.icon className="mb-2 opacity-80 w-10 h-10 md:w-[60px] md:h-[60px]" />
						<h1 className="font-[600] text-small ml-1">{service.title}</h1>
						<p className="text-tiny opacity-80 ml-1">{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
