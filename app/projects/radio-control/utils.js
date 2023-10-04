import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Introduction = () => {
	return (
		<div>
			<p className="text-small mb-3">
				Introducing our{" "}
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					Arduino-based radio controller
				</span>
				, designed to make remote control of your robotic projects a breeze!
				This innovative controller utilizes an Arduino Nano to read data from
				two joysticks and wirelessly transmit it to another Arduino Nano, via an
				NRF24L01 module.
			</p>
			<p className="text-small mb-3">
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					The Arduino Nano
				</span>{" "}
				is a small, powerful microcontroller that&rsquo;s perfect for this type
				of project. It&rsquo;s easy to program and can be customized to meet
				your specific needs. With its compact size, you can easily take it with
				you wherever you go, making it ideal for controlling robots, drones, or
				other projects from a distance.
			</p>
			<p className="text-small">
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					The NRF24L01 module
				</span>{" "}
				is a wireless communication module that allows you to send and receive
				data over a distance of up to 1000 meters. This makes it perfect for
				controlling your robot from a distance, without the need for messy
				cables or wires.
			</p>
		</div>
	);
};

export const Steps = () => {
	return (
		<div className="mt-8">
			<h1 className="text-medium mb-2 font-[500]">
				So, these are the steps we&rsquo;re going to follow to complete this
				project:
			</h1>
			<div className="ml-12 mb-4">
				<h1 className="bg-gradient-to-r from-green to-purple bg-clip-text text-transparent font-semibold w-max">
					Transmitter:
				</h1>
				<ol className="list-inside list-decimal ml-5 flex flex-col gap-1">
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-circuit-trs">Arduino Circuit Diagram</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#solder-electronics-trs">Soldering & Electronics</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-code-trs">Arduino Code</Link>
					</li>
				</ol>
			</div>
			<div className="ml-12">
				<h1 className="bg-gradient-to-r from-green to-purple bg-clip-text text-transparent font-semibold w-max">
					Receiver:
				</h1>
				<ol className="list-inside list-decimal ml-5 flex flex-col gap-1">
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-circuit-rcv">Arduino Circuit Diagram</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#solder-electronics-rcv">Soldering & Electronics</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-code-rcv">Arduino Code</Link>
					</li>
				</ol>
			</div>
		</div>
	);
};

export const CircuitDiagram = ({
	props: { id, title, description, image },
}) => {
	return (
		<div id={id} className="mt-8">
			<Link
				href={`#${id}`}
				className="group text-medium mb-2 font-[500] w-max hover:text-purple transition-all"
			>
				{title}{" "}
				<LinkIcon
					size={20}
					className="inline text-secondary group-hover:text-purple transition-all"
				/>
			</Link>
			<p className="text-small mb-3">{description}</p>
			<Image
				src={image}
				width={900}
				height={400}
				draggable="false"
				alt={title}
				priority={true}
				className="w-full rounded-sm"
			/>
		</div>
	);
};

export const AssembleParts = ({
	props: { id, title, description, images, conclusion },
}) => {
	return (
		<div id={id} className="mt-8">
			<Link
				href={`#${id}`}
				className="group text-medium mb-2 font-[500] w-max hover:text-purple transition-all"
			>
				{title}{" "}
				<LinkIcon
					size={20}
					className="inline text-secondary group-hover:text-purple transition-all"
				/>
			</Link>
			<p className="text-small mb-3">{description}</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 mn:grid-cols-3 gap-2">
				{images.map((image, i) => (
					<div key={`image-${i}`} className="sm:max-h-[200px]">
						<Image
							src={image}
							width={400}
							height={400}
							draggable="false"
							alt={`${title} - ${i}`}
							className="w-full h-full rounded-sm object-cover"
						/>
					</div>
				))}
			</div>
			<p className="text-small">{conclusion}</p>
		</div>
	);
};

export const Conclusion = ({
	props: { title, descriptions, image, images },
}) => {
	return (
		<div className="mt-8">
			<h1 className="text-medium mb-2 font-[500]">{title}</h1>
			<p className="text-small mb-3">{descriptions[0]}</p>
			<p className="text-small mb-3">{descriptions[1]}</p>
			<Image
				src={image}
				width={800}
				height={360}
				draggable="false"
				alt="Image"
				className="w-full h-full rounded-sm object-cover mb-2"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 mn:grid-cols-3 gap-2">
				{images.map((image, i) => (
					<div key={`image-${i}`} className="sm:max-h-[200px]">
						<Image
							src={image}
							width={400}
							height={400}
							draggable="false"
							alt={`${title} - ${i}`}
							className="w-full h-full rounded-sm object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
